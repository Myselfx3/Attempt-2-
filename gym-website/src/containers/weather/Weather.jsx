import React, {useState} from 'react';
import axios from 'axios';
import './weather.css';
function Weather() {
    const [data,setData] = useState ({})
    const [location,setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ccb28ed0a580e9931bfc677f28b1e2ae`;

    const searchLocation = (event) =>{
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
    }
    return (
        <div className="Weather">
            <div className="Weather-Heading"><h2>Check out the Weather</h2></div>
            <div className="search">
                <input 
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyDown={searchLocation}
                placeholder='Enter Location'
                type="text"/>
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <p>{data.main.temp.toFixed()}°C</p> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>


                {data.name != undefined &&
                    <div className="bottom">
                        <div className="feels">
                            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} km/h</p> : null}
                            <p>Wind Speed</p>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}





export default Weather