import React, { useState } from 'react'
import Number from './Components/Number.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [useFilter, setUseFilter] = useState(false)

  const numbersToShow = !useFilter
  ? persons
  : persons.filter(e => e.name.toLowerCase().includes(filterValue.toLocaleLowerCase()))

  const CheckDuplicate = () => {
    if (persons.some(e => e.name === newName)) {
      return true
    }
    return false
  }



  const Duplicate= () => CheckDuplicate()

  const numbers = () => numbersToShow.map(number =>
    <Number
      key={number.name}
      person={number}
    />
  )



  const addPerson = (event) => {
    event.preventDefault()
    if (Duplicate()) {
      return alert(`${newName} on jo luettelossa`)
    }
    const personObject = {
      name: newName,
      number: newNumber 
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')

  }

  const handleNameFormChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberFormChange = (event) => {
    setNewNumber(event.target.value)
  }


  const handleFilterChange = (event) => {
    if (event.target.value !== '') {
      setFilterValue(event.target.value)
      setUseFilter(true)
    }  else {
      setFilterValue(event.target.value)
      setUseFilter(false)
    }
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form>
        <div>
          rajaa näytettäviä:  <input
          value={filterValue}
          onChange={handleFilterChange}
          />
        </div>
      </form>
      <form onSubmit={addPerson}>
      <h3>Lisää uusi</h3>
        <div>
          nimi: <input value = {newName}
                  onChange={handleNameFormChange}
                />
        </div>
        <div>numero: 
          <input value={newNumber}
            onChange={handleNumberFormChange}
          />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h3>Numerot:</h3>
      <ul>
        {numbers()}
      </ul>
    </div>
  )

}

export default App