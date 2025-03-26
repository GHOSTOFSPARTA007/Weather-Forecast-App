import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
            city: "Unknown",
            feelsLike:15.72,
            temp:16.05,
            tempMin:16.05,
            tempMax:16.05,
            humidity: 77,
            weather: "mist"
            });

        let updateInfo = (newinfo) => {
            setWeatherInfo(newinfo);
        };
  return(
    <div style={{textAlign: "center"}}>
        <h2>Weather App By Mandar</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
    </div>
  )  
}