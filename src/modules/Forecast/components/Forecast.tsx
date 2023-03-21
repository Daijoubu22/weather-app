import React, { useEffect } from 'react';
import axios from 'axios';

function Forecast() {
    useEffect(() => {
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=55.15&longitude=37.48&hourly=temperature_2m,weathercode&timeformat=unixtime').then((res) => {
            console.log(res);
        })
    }, []);

    return (
        <div>
            Forecast
        </div>
    );
}

export default Forecast;
