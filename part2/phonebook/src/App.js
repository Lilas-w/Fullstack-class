import React, { useState, useEffect } from 'react'
import Filter from './component/Filter'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])//怎么传id?是服务器生成的，在返回的res.data里有id
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault();
    const obj = {
      name: newName,
      number: newNumber
    }
    setNewName('')
    setNewNumber('')

    const existingPerson = persons.find(p => p.name === obj.name)  //找到已经存在于persons中的person
    if (existingPerson) {
      window.alert(`${existingPerson.name} is already added to phonebook`)  //注意是window.alert
    }

    axios
      .post('http://localhost:3001/persons', obj)
      .then(res => {
        setPersons(persons.concat(res.data))
      })
  }

  const personsToshow = (filter.length === 0) ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())); //不区分大小写的搜索功能

  return (
    <div>
      <h2>Phone book</h2>
      <Filter value={filter} handleChange={({ target }) => setFilter(target.value)} />
      <h2>add a new</h2>
      <PersonForm name={newName} number={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={personsToshow} />
    </div >
  )
}

export default App