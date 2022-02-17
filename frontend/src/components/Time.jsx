import {useState, useEffect} from 'react';
import React from 'react'
import Moment from 'moment'
import '../css/time.css'

export default function time() {
    const [time, setTime] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        //<div className="App">
        <div id="time">{Moment(time).format("HH:mm:ss")}</div>
        //<div>
    );
}