import axios from "axios";
import { useEffect,useState } from "react";
import './Weather.css'

let Weather = () => {
    let [weather,setWeather] = useState();
    let getWeather = () =>{
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=051c11a296f44220c98d0c7d3abce3b8')
        .then((res)=>{
            setWeather(res.data);
            console.log(res.data);
        })
    }

    useEffect(()=>{
        getWeather();
    },[])
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]

    let n =  new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();

    console.log(weekday);

    return(
        <div class="container">
        
        <h4> Weather Forecast </h4>
        
           <div class="weekday">
            {weekday}
           </div>

           <div class="openweather">
           <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}/>
           <br/>
           <h1>
           {(weather?.main?.temp -273.15).toFixed(2)}°C
           </h1>
           <h3>
           {weather?.name}
           </h3>
           Description: {weather?.weather[0]?.description} 
           </div>

           <br/>

           <div class="coordinates">
            Longitude:{weather?.coord?.lon} --- Latitude:{weather?.coord?.lat}
           </div>

           <br/>

           <div class="windspeed">
            Wind Speed: {weather?.wind?.speed} --- Gust of Wind:{weather?.wind?.gust}
           </div>

           <br/>

           <div class="date">
            {'Date : ' + m + "/" + d + "/" + y}
           </div>
        </div>
        
    )
}

export default Weather;