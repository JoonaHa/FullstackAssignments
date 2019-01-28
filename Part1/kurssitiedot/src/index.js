import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const kurssi = {
      name: 'Half Stack -sovelluskehitys',
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7
        },
        {
          name: 'Komponenttien tila',
          exercises: 14
        }
      ]
    }

return (
  <div>
    <Header name={kurssi.name} />
    <Content parts={kurssi.parts} />
    <Total parts={kurssi.parts} />
  </div>
)
}


const Header = (course) => {
    return <h1>{course.name}</h1>
    
}

const Content = (props) => {
    return (
        <div>
        <Part p={props.parts[0]}/>
        <Part p={props.parts[1]}/>
        <Part p={props.parts[2]}/>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>yhteensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} tehtävää</p>
      </div>
    )
}


const Part = (props) => {
    return (
      <div>
          <p>
              {props.p.name} {props.p.exercises}
          </p>
      </div>
    )
  }



ReactDOM.render(<App />, document.getElementById('root'))
