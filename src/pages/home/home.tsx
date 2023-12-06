import { useState, useEffect } from "react";
import './home.scss'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


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
                <br />
                <a href="https://search.neotron.io">
                    <button>Secure Search Engine</button>
                </a>
                <br />
                <br />
                <Link to="/videodownloader">
                    <button>Video Downloader</button>
                </Link>


            </div>
        </div>
    )
}

export default Home