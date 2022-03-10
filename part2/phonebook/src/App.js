import React, { useState, useEffect } from 'react'
import Filter from './component/Filter'
import Notification from './component/Notification'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'
import PersonServices from './services/PersonServices'

const App = () => {
  const [persons, setPersons] = useState([])//怎么传id?是服务器生成的，在返回的res.data里有id
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    PersonServices.getAll().then(persons => {  //先调用getAll再调用一个then处理数据
      setPersons(persons);
    })
  }, []);

  const notify = (message, type = 'info') => {  //把通知抽离成一个函数。有默认值的参数type，可改为alert
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

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
    setNewName('') //将输入框清零
    setNewNumber('')

    const personToUpdate = persons.find(p => p.name === obj.name)  //先找到已存在的同名person
    if (personToUpdate) {
      const ok = window.confirm(`${personToUpdate.name} is already added to phonebook,replace the old number with a new one?`)
      if (ok) {

        PersonServices.update(personToUpdate.id, { ...personToUpdate, number: newNumber })
          .then(res => {
            setPersons(persons.map(p => p.id === personToUpdate.id ? res : p))
            notify(`The content of ${personToUpdate.name} has been updated`)
          })
          .catch(error => {
            notify(`the person '${personToUpdate.name}' was already deleted from server`, 'alert')
            setPersons(persons.filter(p => p.id !== personToUpdate.id))  //仍然执行下面notification逻辑?
          })
        return //不再执行下面内容
      }
    }

    PersonServices.create(obj).then(personToSave => {   //多加一步then调用
      setPersons(persons.concat(personToSave))
      notify(`Added ${personToSave.name}`)
    })
  }

  const deletePerson = (id) => {
    const personToDelete = persons.find(p => p.id === id) //先通过id找到要删除的person
    if (personToDelete) {
      const ok = window.confirm(`Ready to delete ${personToDelete.name}?`);
      if (ok) {
        PersonServices.remove(id).then(() => {
          setPersons(persons.filter(p => p.id !== id))
          notify(`Deleted ${personToDelete.name}`)
        })
      }
    }
  }

  const personsToshow = (filter.length === 0) ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())); //不区分大小写的搜索功能

  return (
    <div>
      <h2>Phone book</h2>
      <Notification value={notification} />
      <Filter value={filter} handleChange={({ target }) => setFilter(target.value)} />
      <h2>add a new</h2>
      <PersonForm name={newName} number={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={personsToshow} deletePerson={deletePerson} />
    </div >
  )
}

export default App