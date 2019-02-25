import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error" style={{ color: 'red', fontWeight: 'bold'} }>
       {message}
    </div>
  )
}

export default Notification