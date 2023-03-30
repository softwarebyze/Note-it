import React from 'react'
import Note from './Note'

describe('<Note />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Note />)
  })
})