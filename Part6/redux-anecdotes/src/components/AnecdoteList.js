import React from 'react'
import { connect } from 'react-redux'
import {voteAnecdoteOf} from '../reducers/anecdoteReducer';
import {notificationChange} from '../reducers/notificationReducer'


const Anecdotes = (props) => {
    const anecdotes = props.visibleAnecdotes
    
    const vote = (anecdote) => {
        props.voteAnecdoteOf(anecdote)
        console.log('vote', anecdote.id)
        props.notificationChange(`you voted: '${anecdote.content}'`, 5)
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

const anecdotesToShow = ({anecdotes, filter}) => {
  return anecdotes.filter(a => a.content.toUpperCase().includes(filter.toUpperCase()))
      .sort(function(a, b){return b.votes - a.votes})
}

const mapStateToProps = (state) => {
    return {
      visibleAnecdotes: anecdotesToShow(state)
    }
  }

  const mapDispatchToProps = {
    voteAnecdoteOf,
    notificationChange
  }

  
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Anecdotes)