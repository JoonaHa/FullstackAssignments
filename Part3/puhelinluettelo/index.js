require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var morgan = require('morgan')
const cors = require('cors')
const Note = require('./models/person')



app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))





let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number:"045-123456"
    },
    {
      id: 2,
      name: "Arto Järvinen",
      number: "041-1231243"
    },
    {
      id: 3,
      name: "Lea Kutvonen",
      number: "040-43232234"
    },
    {
        id:4,
        name: "Martti Tienari",
        number: "09-7842232"
    }
  ]

  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/info', (req,res) => {
      const lenght = persons.length;
      const content = `<p> Puhelin luettelossa ${lenght}  henkilön tiedot </p> ${new Date}` 
     res.send(content)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    console.log(person)
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    person = persons.filter(p => p.id !== id);
  
    response.status(204).end();
  });

  app.post('/api/persons', (request, response) => {
    const body = request.body
    var notDublicate = (persons.filter(p => p.name === body.name)
    .length === 0)
    console.log(persons.filter(p => p.name === body.name)
      .length === 0)
    console.log(notDublicate)
    
    if (body.number === undefined || body.name === undefined) {
      return response.status(400).json({ 
        error: 'name or number missing' 
      })
    }

    if (!notDublicate) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }


    const person = {
        id: Math.round( Math.random() * 10e6),
        name: body.name,
        number: body.number
        
      }
    
      console.log(JSON.stringify(person))
      persons = persons.concat(person)

    
    
      response.json(person)
  })

  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })