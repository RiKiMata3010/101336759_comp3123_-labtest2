import axios from "axios";
import { useEffect,useState } from "react";
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
        <div style={{display:'flex',justifyContent:'center',marginTop:40,color:'white'}}>
        
        <div style={{width:400,height:500,backgroundColor:'#0c0d0d'}}>
        <h4> Weather App </h4>
        <hr/>
           <div style={{marginTop:20}}>
            {weekday}
           </div>
           <div style={{marginTop:20}}>
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
           <div style={{marginTop:20}}>
            Lng:{weather?.coord?.lon} Lat:{weather?.coord?.lat}
           </div>
           <div style={{marginTop:20}}>
            Wind Speed: {weather?.wind?.speed} &nbsp; &nbsp; &nbsp; &nbsp; Gust:{weather?.wind?.gust}
           </div>
           <div>
            {'Date : ' + m + "/" + d + "/" + y}
           </div>
        </div>
        </div>
    )
}

export default Weather;