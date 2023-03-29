/// <reference types="cypress" />
import * as React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />)
  })
})
