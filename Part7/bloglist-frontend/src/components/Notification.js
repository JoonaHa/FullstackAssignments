import React from 'react'

const Notification = ({store}) => {
  console.log(store.getState())
  if (store.getState() === '') {
    return null
  }

  const style = {
    color: store.getState().error ? 'red' : 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  return (
    <div style={style}>
      {store.getState().message}
    </div>
  )
}

export default Notification