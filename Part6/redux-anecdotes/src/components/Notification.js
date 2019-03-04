import React from 'react';
const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,

  }

  if (props.store.getState().notification === '') {
    console.log('empty')
    return <div></div>
  } else {
    return (
      <div style={style}>
        {props.store.getState().notification}  
      </div>
    )
  }


}

export default Notification
