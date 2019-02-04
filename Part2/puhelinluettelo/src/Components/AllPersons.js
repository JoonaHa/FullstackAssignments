import React from 'react'
import Number from './Number.js'

const AllPersons = ({persons, useFilter, filterValue}) => {
    
const numbersToShow = !useFilter
  ? persons
  : persons.filter(e => e.name.toLocaleLowerCase().includes(filterValue))
    
  const numbers = () => numbersToShow.map(number =>
    <Number
      key={number.name}
      person={number}
    />
  )

  return (
    <ul>
      {numbers()}
    </ul>

  )

}



export default AllPersons