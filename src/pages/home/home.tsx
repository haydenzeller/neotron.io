import { useState, useEffect } from "react";
import './home.scss'
import axios from 'axios'


function Home() {
    const [ip, setIP] = useState("");
    const [location, setLocation] = useState("");
    const getData = async () => {
        const addr = await axios.get("https://api.ipify.org/?format=json");
        setIP(addr.data.ip);

        const info = await axios.get("https://freeipapi.com/api/json/");
        setLocation(info.data.cityName);

    };
    useEffect(() => {
    getData();
    }, []);


    return (
        <div className="home">
            <h1>NEOTRON.IO</h1>
            <h2>If you know what this site is actually for than you know what to do. If not, then just look around I guess </h2>
            <div className="apiStuff">
                <p>Hello {ip}</p>
                <p>How's the weather in {location}?</p>
            </div>
        </div>
    )
}

export default Home