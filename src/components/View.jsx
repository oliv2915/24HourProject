import React, {useEffect, useState} from "react";
import { Button, Label } from "reactstrap"

export default function View ({nasaImage, weatherData}) {
    const [forecast, setForecast] = useState([])
    const [temp, setTemp] = useState({})
    const [wind, setWind] = useState({})
    const [convertToggle, setConvertToggle] = useState(false)


    const convertToggleBtnClick = () => {
        setConvertToggle(!convertToggle)
    }

    const convertToCelcius = (f) => {
        return ((f - 32) * (5 / 9)).toFixed(2)
    } 

    useEffect(() => {
        setForecast(weatherData.weather)
        setTemp(weatherData.main);
        setWind(weatherData.wind);
    }, [])
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={nasaImage.url} width="600"  alt=""/>
            <div className="p-3" style={{width: "600px"}} >
                <Label>{wind ? `Wind Speed: ${wind.speed} mph` : 'Wind Speed Unavailable'}</Label>
                <span> | </span>
                <Label>{temp ? (convertToggle ? `Temperature: ${convertToCelcius(temp.temp)}ºC` : `Temperature: ${temp.temp}ºF`)  : 'Temperature Unavailable'}</Label>
                <span> | </span>
                <Label>{temp ? (convertToggle ? `High: ${convertToCelcius(temp.temp_max)}ºC` : `High: ${temp.temp_max}ºF`) : 'High Unavailable'}</Label>
                <span> | </span>
                <Label>{temp ? (convertToggle ? `Low: ${convertToCelcius(temp.temp_min)}ºC` : `Low: ${temp.temp_min}ºF`) : 'Low Unavailable'}</Label>
                <br/>
                <Label>{temp ? (convertToggle ? `Feels Like: ${convertToCelcius(temp.feels_like)}ºC` : `Feels Like: ${temp.feels_like}ºF`) : 'Feels Like Unavailable'}</Label>
                <span> | </span>
                <Label>Forecast: </Label>
                {forecast ? forecast.map((weather, index) => {
                    return (
                        <Label style={{textTransform: 'capitalize'}} key={index}>{` ${weather.description}`}</Label>
                    )
                }) : "No Weather Forecast Available"}

            </div>
            <Button onClick={convertToggleBtnClick} color='primary'>{convertToggle ? 'Convert Temperature to Fahrenheit' : 'Convert Temperature to Centigrade'}</Button>
            {console.log(forecast)}
        </div>
    )

}