const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

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
  
    if (body.number === undefined || body.name === undefined) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }


    const person = {
        id: Math.round( Math.random() * 10e6),
        name: body.name,
        number: body.number
        
      }
    
      persons = persons.concat(person)
    
      response.json(person)
  })

  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })