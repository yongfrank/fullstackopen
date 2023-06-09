/*
 * @Author: Frank Chu
 * @Date: 2023-01-27 11:27:58
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-02-07 13:45:43
 * @FilePath: /fullstackopen/part2/phonebook/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
// import './App.css';
import { useState, useEffect } from 'react'
import ContactServices from './services/contacts'
import Notification from './components/Notification'
import Currency from './components/Currency'

function App() {
  const [persons, setPersons] = useState([])
  
  const hook = () => {
    ContactServices
      .getAll()
      .then(response => {
        const persons = response.data
        setPersons(persons)
      })
  }
  useEffect(hook, [])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [showFilter, setShowFilter] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState({isError: false, message: null})
  
  const addPerson = (event) => {
    event.preventDefault()
    // if (persons.some((person) => person.name === newName)) {
    //   alert(`${newName} is already added to phonebook`)
    //   return
    // }
    // console.log('button clicked', event.target)
    
    if (persons.some((person) => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find((person) => person.name === newName)
        const changedPerson = { ...person, number: newNumber }
        ContactServices
          .update(person.id, changedPerson)
          .then(response => {
            setPersons(persons.map((person) => person.id !== changedPerson.id ? person : changedPerson))
            setNotificationMessage({isError: false, message: `changed ${changedPerson.name}'s number`})
            setTimeout(() => {
              setNotificationMessage({isError: false, message: null})
            }, 5000)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setNotificationMessage({isError: true, message: `${error.response.data.error}`})
            setTimeout(() => {
              setNotificationMessage({isError: false, message: null})
            }, 5000)
          })
      }
      return
    }

    const UnrepeatableId = () => {
      let id = persons.length + 1

      //eslint-disable-next-line
      while (persons.some((person) => person.id === id)) {
        id = Math.floor(Math.random() * 1000000)
      }
      return id
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: UnrepeatableId()
    }

    ContactServices
      .create(newPerson)
      .then(response => {
        setPersons(persons.concat(newPerson))
        setNotificationMessage({isError: false, message: `added ${newPerson.name}`})
        setTimeout(() => {
          setNotificationMessage({isError: false, message: null})
        }, 5000)
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        setNotificationMessage({isError: true, message: `${error.response.data.error}`})
        
        setTimeout(() => {
          setNotificationMessage({isError: false, message: null})
        }, 5000)
      })
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    if (event.target.value !== '') {
      setShowFilter(true)
    } else {
      setShowFilter(false)
    }
    console.log(event.target.value)
    setFilteredPersons(persons.filter((person) => person.name.toLowerCase().includes(event.target.value)))
  }

  const handleDelete = (id) => {
    const person = persons.find((person) => person.id === id)
    if (window.confirm(`Do you want to delete ${person.name}?`)) {
      ContactServices
        .deletePerson(id)
        .then(response => {
          setPersons(persons.filter((person) => person.id !== id))
        })
        .catch(error => {
          setNotificationMessage({isError: true, message: `Information of ${person.name} has already been removed from server`})
          setTimeout(() => {
            setNotificationMessage({isError: false, message: null})
          }, 5000)
        })
    }
  }
  return (
    <>
      <h1>Phonebook</h1>
      <Notification message={notificationMessage.message} isError={notificationMessage.isError}/>
      <Filter handle={handleFilterChange} />
      
      <h3>add a new</h3>
      <PersonForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Contact persons={showFilter ? filteredPersons : persons} handleDelete={handleDelete} />
      
      <h1>Currency Transform</h1>
      <Currency />
    </>
  );
}

const PersonForm = ({ addPerson, handleNameChange, handleNumberChange }) => {
  return (
    <form 
        onSubmit={addPerson}
      >
        <div>name: <input onChange={handleNameChange} /></div>
        <div>number: <input onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
    </form>
  )
}


const Filter = ({ handle }) => {
  return (
    <div>filter shown with <input onChange={handle} /></div>
  )
}

const Contact = ({ persons, handleDelete }) => {
  return (
    <>
      {persons.map((person) => {
        return (
          <Person key={person.id} person={person} handleDelete={() => handleDelete(person.id)} />
        )
      })}
    </>
  )
}

const Person = ({ person, handleDelete }) => {
  return (
    <div>
      {person.name} {person.number} <button onClick={handleDelete}>delete</button>
    </div>
  )
}


export default App;
