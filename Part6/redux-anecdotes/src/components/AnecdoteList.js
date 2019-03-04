import React from 'react'
import {voteAnecdoteOf} from '../reducers/anecdoteReducer';
import {notificationChange} from '../reducers/notificationReducer'


const Anecdotes = ({store}) => {
    const anecdotes = store.getState().anecdotes.filter(a => a.content.toUpperCase().includes(store.getState().filter.toUpperCase()))
      .sort(function(a, b){return b.votes - a.votes})
      console.log()
    
    const vote = (anecdote) => {
        store.dispatch(voteAnecdoteOf(anecdote.id))
        console.log('vote', anecdote.id)
        store.dispatch(notificationChange('you voted: ' + anecdote.content))
        setTimeout(() => {
            store.dispatch(notificationChange(''))
          }, 5000)
      }

    return (
        <div>
          {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
      )}
        </div>
    )
}

export  default Anecdotes