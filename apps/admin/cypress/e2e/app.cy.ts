/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('passes', () => {
    expect(true)
  })
})
