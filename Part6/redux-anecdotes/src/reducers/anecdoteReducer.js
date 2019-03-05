import anecdoteService from '../services/anecdoteService'

const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}


const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const votedAnecdote = state.find(a => a.id === id)
      const updatedAnecdote = { ...votedAnecdote, votes: votedAnecdote.votes + 1 }
      return state.map(anecdote => anecdote.id !== id ? anecdote : updatedAnecdote)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data


    default:
      return state
  }


}


export const voteAnecdoteOf = (anecdote) => {
  return async dispatch => {
    const an = await anecdoteService.updateVotes(anecdote)
    const id = an.id
    console.log(id)
    dispatch({
      type: 'VOTE',
      data: { id }
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newA = await anecdoteService.createNew(asObject(content))
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newA
    })
  }
}


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default reducer