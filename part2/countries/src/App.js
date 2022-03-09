import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Countries from './component/Countries';

function App() {
  const [countries, setCountries] = useState([]); //注意初始值是一个数组
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])

  // let filter = countries.filter(c => c.name.common.toLowerCase() === search.toLowerCase()); 
  let filter = countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase())); //使用filter和includes函数筛选countries
  return (
    <>
      <div>find countries <input type="text" value={search} onChange={({ target }) => setSearch(target.value)} /></div>
      <Countries countries={filter} />
    </>
  )
}

export default App;
