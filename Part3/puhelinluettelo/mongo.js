const mongoose = require('mongoose')



const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-c2tct.mongodb.net/numbers-assignment?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length == 3) {

  Person.find({}).then(result => {
      result.forEach(p => {
        console.log(p)
      })
      mongoose.connection.close()
  })}

if (process.argv.length == 5) {

  const newPerson  = new Person( {
    id: Math.round( Math.random() * 10e6),
    name: process.argv[3],
    number: process.argv[4]
    
  })

  newPerson.save().then(result => {
    console.log(`lisätään ${process.argv[3]} numero ${process.argv[4]} luetteloon`);
    mongoose.connection.close();
  })

  }
    





