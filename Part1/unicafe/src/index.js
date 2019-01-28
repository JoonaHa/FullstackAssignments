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

const Statistics = ({good ,bad,neutral}) => {
    const total =  good + bad + neutral
    if (total === 0)
      return (
        <div>Ei yhtään palautetta annettu</div>
      )
    return (
    <table>
      <tbody>  
        <Statistic number={good} text1='hyvä'/>
        <Statistic number={neutral} text1='neutraali'/>
        <Statistic number={bad} text1='huono'/>
        <Statistic number={total} text1='yhteensä'/>
        <Statistic number={(good-bad) / (total)} text1='keskiarvo'/>
        <Statistic number={(good / total) * 100} text1 = 'positiivisia' text2 = '%'/>
      </tbody>
    </table>
    
    )
}    

const Statistic = ({number, text1, text2}) => (
    <tr>
      <td>{text1} :</td> 
      <td>{number} {text2}</td>
    </tr>
)


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
      setGood(good + 1)
      console.log('Good ', good)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log('Neutral', neutral)
}

  const handleBadClicks = () => {
    setBad(bad + 1)
    console.log('Bad ', bad)
  }


  return (
    <div>
      <Header text={'anna palautetta'}/>
      <Button handleClick={handleGoodClick} text='hyvä'/>
      <Button handleClick={handleNeutralClick} text='neutraali'/>
      <Button handleClick={handleBadClicks} text='huono'/>
      <Header text={'statisiikkaa'}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
          
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
