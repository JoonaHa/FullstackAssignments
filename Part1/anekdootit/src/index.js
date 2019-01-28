import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header =({text}) => (
    <h1>{text}</h1>
  )
  
const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
        {text}
        </button>
    )
}

const BestAnecdote = ({anecdotes, points}) => {
      var max = points[0]
      var maxIndex = 0;
      
      for (var i = 1; i < points.length; i++) {
        if (points[i] > max) {
            maxIndex = i;
            max = points[i];
        }
    }
  
    console.log(anecdotes[maxIndex])
    return (
        <>
        <p>
            {anecdotes[maxIndex]}
        </p>
        <h4>
            Anecdote has {max} points
        </h4>
        </>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const random = () => (Math.floor(Math.random() * anecdotes.length)) 

  const handleClick = () => {
   setSelected(random)
  }

  const handleVote = () => {
    props.points[selected]++
    console.log(selected,'votes',props.points[selected])
   }


  return (
    <div>
      <Header text='Anecdote of the day'/>
      <div><p>{props.anecdotes[selected]}</p></div> 
      <Button handleClick={handleClick} text='Next anecdote'/>
      <Button handleClick={handleVote} text='Vote'/>
      <Header text='Anecdote with the most votes'/>
      <BestAnecdote anecdotes={props.anecdotes} points={props.points}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

let points = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);


ReactDOM.render(
  <App anecdotes={anecdotes} points={points} />,
  document.getElementById('root')
)
