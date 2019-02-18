const router = require('express').Router()
const blog = require('../models/blogpost')


router.get('/', (request, response) => {
  blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

router.post('/', (request, response) => {
  const blog = new blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})


module.exports = router