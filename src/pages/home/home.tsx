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
                <div className="api">
                    <p>Hello <span className="highlight">{ip}</span> from <span className="highlight">{location}</span><br/>( if this is correct, use a VPN! )</p>
                </div>
                <div className="links">
                    <h2><span className="Underline">Services</span></h2>
                    <p><a href="https://status.neotron.io">Click here for uptime status</a></p>
                    <a href="https://search.neotron.io" target="_blank">
                        <button>SearXNG ( Metasearch Engine )</button>
                    </a>
                    <br />
                    <Link to="/videodownloader">
                        <button>Youtube Downloader</button>
                    </Link>
                    <br />
                    <a href="" target="_blank">
                        <button>Invidious ( In progress )</button>
                    </a>
                    <br />
                    <a href="https://flix.neotron.io">
                        <button>Media Server ( Restricted Access )</button>
                    </a>
                </div>
                <div className="ServerInfo">
                    <div className="left">
                        <h2 className="Underline">Server #1 - <span className="serverStatus">ONLINE</span></h2>
                        <p>OS: <span className="highlight">Ubuntu LTS / Kali Linux / Windows 11</span></p>
                        <p>CPU: <span className="highlight">Ryzen 9 7900x</span></p>
                        <p>RAM: <span className="highlight">32GB DDR5</span></p>
                        <p>GPU: <span className="highlight">NVIDIA RTX 3070Ti</span></p>
                        <p>Storage: <span className="highlight">3TB M.2 NVME</span></p>
                        <p>Network: <span className="highlight">3.5Gbps</span></p>
                        <p>Location: <span className="highlight">Canada</span></p>
                    </div>
                    <div className="right">
                        <h2 className="Underline">Server #2 - <span className="serverStatus">ONLINE</span></h2>
                        <p>OS Hypervisor: <span className="highlight">ProxmoxVE</span></p>
                        <p>CPU: <span className="highlight">Intel Core I7-7700</span></p>
                        <p>RAM: <span className="highlight">64GB DDR4</span></p>
                        <p>GPU: <span className="highlight">NVIDIA GTX 1060</span></p>
                        <p>Storage: <span className="highlight">12TB M.2 NVME</span></p>
                        <p>Network: <span className="highlight">3.5Gbps</span></p>
                        <p>Location: <span className="highlight">Canada</span></p>  
                    </div>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Home