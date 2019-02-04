import React from 'react'

const Header = props =>
  <h1>{props.course}</h1>

const Total = props => {
  const total = props.parts.reduce((previous, current,) =>
    previous + current.exercises , 0
  )

  return <p>yhteensä {total} tehtävää</p>
}
  

const Part = props =>
  <li key={props.part.id}> {props.part.name} {props.part.exercises}</li>

const Content = props => (
  <ul key={props.parts.id}>
    {props.parts.map( p => <Part part={p}/>)}

  </ul>
)

const Course = ({courses}) => {
  const rows = courses.map(course =>
    <div key={course.id}>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
  return rows
    
}

export default Course