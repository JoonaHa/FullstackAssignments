import React from 'react'

const Number = ({ person }) => {
  return (
    <li>{person.name}:  {person.number}</li>
  )
}

export default Number