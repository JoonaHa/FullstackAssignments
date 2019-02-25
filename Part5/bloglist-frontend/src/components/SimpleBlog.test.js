import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Blog from './SimpleBlog'

test('renders content', () => {
  const blog = {
    title: 'Testi mika lienee',
    author: 'Matti Meikalainen',
    url: 'www.testiMaannantai.fi',
    likes: 5
  }

  const component = render(
    <Blog blog={blog}  />
  )

  const element = component.getByText('Testi mika lienee Matti Meikalainen')
  expect(element).toBeDefined()

  const element1 = component.getByText('Matti Meikalainen')
  expect(element1).toBeDefined()



})
