import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = ({ country }) => {
    const languages = Object.values(country.languages)
    const [weather, setWeather] = useState(null);  //注意初始状态给的形式对不对
    const capital = country.capital[0]

    useEffect(() => {
        const key = process.env.REACT_APP_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${key}`
        axios
            .get(url)
            .then(res => {
                setWeather(res.data)
            })
    }, [])

    return (
        <>
            <h2>{country.name.common}</h2>
            <div>capital {capital} </div>

            <h4>Spoken languages:</h4>
            <ul>
                {languages.map(language =>
                    <li key={language}>
                        {language}
                    </li>
                )}
            </ul>

            <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                width={150}  //给定图片宽度
            />
            <Weather weather={weather} city={capital} />
        </>
    )
}

export default Country