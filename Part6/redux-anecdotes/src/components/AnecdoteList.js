import React from 'react'
import {voteAnecdoteOf} from '../reducers/anecdoteReducer';


const Anecdotes = ({store}) => {
    
    const anecdotes = store.getState()
      .sort(function(a, b){return b.votes - a.votes})
    
    const vote = (id) => {
        store.dispatch(voteAnecdoteOf(id))
        console.log('vote', id)
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
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
      )}
        </div>
    )
}

export  default Anecdotes