import { useState, useEffect } from "react";
import './home.scss'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";


function Home() {
    const [ip, setIP] = useState("");
    const [location, setLocation] = useState("");
    const getIp = async () => {
        const addr = await axios.get("https://api.ipify.org/?format=json");
        setIP(addr.data.ip);

        const info = await axios.get("https://freeipapi.com/api/json/");
        setLocation(info.data.cityName);
    };
    useEffect(() => {
    getIp();
    }, []);


    return (
        <HelmetProvider>
            <div className="home">
                <Helmet>
                    <meta name="description" content=" Neotron is a hobby website, or maybe the start of something bigger?"></meta>
                    <meta name="keywords" content="youtube, downloader, video, free, download, mp4, no ads, no redirects, neotron, ai, hobby site, github"></meta>
                    <meta name="author" content="NEOTRON"></meta>
                    <meta name="robots" content="index, follow"></meta>
                    <meta name="googlebot" content="index, follow"></meta>
                    <meta name="generator" content="ReactJS"></meta>
                    <meta name="language" content="English"></meta>
                    <meta name="rating" content="General"></meta>
                    <meta name="distribution" content="Global"></meta>
                    <meta name="revisit-after" content="1 days"></meta>
                </Helmet>
                <div className="logo">
                    <h1>NEOTRON.IO</h1>
                </div>
                <h2>If you know what this site is actually used for than you already know what to do.<br/>If you don't know why your here, look around if you want.</h2>
                <div className="api">
                    <p>Hello <span className="highlight">{ip}</span> from <span className="highlight">{location}</span><br/>( if this is correct, use a VPN! )</p>
                </div>
                <div className="ServerInfo">
                    <h2>Server Info</h2>
                    <p>OS Hypervisor: <span className="highlight">ProxmoxVE</span></p>
                    <p>CPU: <span className="highlight">Intel Core I7 7700</span></p>
                    <p>RAM: <span className="highlight">64GB DDR4</span></p>
                    <p>Storage: <span className="highlight">12TB NVME</span></p>
                    <p>Network: <span className="highlight">3.5Gbps</span></p>
                    <p>Location: <span className="highlight">Canada</span></p>         
                </div>
                <div className="links">
                    <h2>Services</h2>
                    <a href="https://search.neotron.io">
                        <button>Secure Search Engine</button>
                    </a>
                    <br />
                    <Link to="/videodownloader">
                        <button>Video Downloader</button>
                    </Link>
                    <br />
                    <a href="https://flix.neotron.io">
                        <button>The Lucky Few</button>
                    </a>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Home