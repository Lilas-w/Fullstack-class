import React, { useState, useEffect } from 'react'
import Filter from './component/Filter'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }  //怎么传id?
  ])
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

    let equal = persons.find(person => person.name === newName)
    if (equal) {
      window.alert(`${newName} is already added to phonebook`)  //注意是window.alert
      setPersons(persons)  //在if条件中写setter函数是没关系的。只是在条件句中使用useState等，会相当于建两组state setter，第二次渲染时只用到一组，会和别组state setter混乱顺序
    } else {
      setPersons(persons.concat(obj)) //为什么concat参数写[obj]和obj效果一样
    }
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