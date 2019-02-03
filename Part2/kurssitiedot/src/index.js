import React from 'react'
import ReactDOM from 'react-dom'

const Header = props =>
  <h1>{props.course}</h1>

const Total = props => {
  const total = props.parts.reduce((previous, current,) =>
    previous + current.exercises , 0
  )

  return <p>yhteensä {total} tehtävää</p>
}
  

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = props => (
  <div>
    {props.parts.map( p => <Part part={p}/>)}

  </div>
)

const Course = ({course}) => (
  <div>
  <Header course={course.name} />
  <Content parts={course.parts} />
  <Total parts={course.parts} />
</div>
)

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10,
        id: 1
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
        id: 2
      },
      {
        name: 'Komponenttien tila',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <Course course={course} />  
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)