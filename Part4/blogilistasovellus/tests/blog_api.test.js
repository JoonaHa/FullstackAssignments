const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)


const Blog = require('../models/blogpost')

beforeEach(async () => {
    await Blog.remove({})
  
    let noteObject = new Note(helper.initialBlogpost[0])
    await noteObject.save()
  
    noteObject = new Note(helper.initialBlogpost[1])
    await noteObject.save()

    noteObject = new Note(helper.initialBlogpost[2])
    await noteObject.save()
  })

test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })


  test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body.length).toBe(helper.initialNotes.length)
  })
  
  test('a specific blog is within the returned blogs', async () => {
    const response = await api.get('/api/blogs')
  
    const contents = response.body.map(r => r.content)
    expect(contents).toContain(
      'HTTP-protokollan tärkeimmät metodit ovat GET ja POST'
    )
  })


  afterAll(() => {
    mongoose.connection.close()
  })