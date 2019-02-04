import React, { useState } from 'react'
const NewPerson = (props) => {

    const [persons, setPersons] = useState('')
    setPersons(persons.concat(props.persons))
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')



    const CheckDuplicate = () => {
        if (persons.some(e => e.name === newName)) {
          return true
        }
        return false
      }
    
    
    
    const Duplicate= () => CheckDuplicate()

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


    return (
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
    )
}

 export default NewPerson