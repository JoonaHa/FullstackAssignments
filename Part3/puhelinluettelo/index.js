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

  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })