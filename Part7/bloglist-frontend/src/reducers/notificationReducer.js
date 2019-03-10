const notificationReducer = (state= '', action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return action.notification
  default:
    return state
  }
}


export const notificationChange = (message) => {
  return async dispatch => {
    dispatch ({
      type: 'SET_NOTIFICATION',
      notification: message,
    })

    setTimeout(() => {
      dispatch ({
        type: 'SET_NOTIFICATION',
        notification: '',
      })
    }, (5000))
  }


}

export const setNotification = (message) => {
  return {
    type: 'SET_NOTIFICATION',
    notification: message,
  }
}



export default notificationReducer