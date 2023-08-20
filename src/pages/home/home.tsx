import { useState, useEffect } from "react";
import './home.scss'
import axios from 'axios'


function Home() {
    const [ip, setIP] = useState("");
    const [location, setLocation] = useState("");
    const getData = async () => {
        const addr = await axios.get("https://api.ipify.org/?format=json");
        setIP(addr.data.ip);

        const info = await axios.get("http://ip-api.com/json/?fields=61439");
        setLocation(info.data.city);
    };
    useEffect(() => {
    getData();
    }, []);


    return (
        <div className="home">
            <div className="userInfo">
                <p>Hello, {ip}, How is the weather in {location}?</p>
            </div>
            <h1>NEOTRON.IO</h1>
            <h2>If you don't know what this site is for, you should leave. Now.</h2>
            <h3>If you know what this site is for, you know what to do.</h3>
        </div>
    )
}

export default Home