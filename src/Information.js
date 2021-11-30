import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';




export default function Information(city) {
    

    const [city1, setCity1] = useState([]);
    const icon = `http://openweathermap.org/img/wn/${city1.icon}@2x.png`;
  
    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=8e4b4502938f14af98f58bf6df2099fc`)
        .then(response =>  { 
            setCity1({ 
                name: response.data.name,
                main: response.data.weather[0].main,
                description: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
                temp: response.data.main.temp,
                feels_like: response.data.main.feels_like,
                humidity: response.data.main.humidity,
             })
        })
        .catch(error => console.log(error))
    }, [])

    return (
            <div className='items'>  
             
                <h1 class='header'>Current Weather</h1>
                <img src={icon} alt='icon' ></img>             
                
                <div  class = 'temperature'>
                <p>City:{city1.name}</p>
                <p>Weather: {city1.main}</p>
                <p>Weather-level: {city1.description}</p>
                <p>Temperature: {city1.temp}℉</p>
                <p>Feels like: {city1.feels_like}℉</p>
                <p>Humidity: {city1.humidity}%</p>
                
                </div>
     		</div>
          
        
    )
}