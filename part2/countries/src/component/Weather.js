import React from 'react';

const Weather = ({ city, weather }) => {
    if (weather === null) return null //加一个weather为空时的返回值

    return (
        <>
            <h4>Weather in {city}</h4>
            <div>temperature: {weather.main.temp} Kelvins</div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`weather icon for ${weather.weather[0].description}`} />
            </div>
            <div>wind: {weather.wind.speed} m/s</div>
        </>
    )
}

export default Weather