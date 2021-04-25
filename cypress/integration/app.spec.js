describe('Basic render and navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should render with basic elements', () => {
    cy.get('.logo-name').contains('Emoji Coat of Arms')
    cy.get('a').contains('Create')
    cy.get('a').contains('Gallery')
    cy.get('.start-btn').contains('Get Started Now')
  })

  it('Should go to Create using Get Started button', () => {
    cy.get('.start-btn').contains('Get Started Now').click()
    cy.get('.searchBtn').contains('Submit')
  })

  it('Should go to Create using Create NavBar link', () => {
    cy.get('a').contains('Create').click()
    cy.get('.searchBtn').contains('Submit')
  })

  it('Should go to Gallery using Gallery NavBar link -- gallery empty', () => {
    cy.get('a').contains('Gallery').click()
    cy.get('.gallery-feedback').should('contain', 'clean slate to make something great')
    cy.get('.gallery-start-btn').should('exist')
  })
})

describe('Search for emojis', () => {
  beforeEach(() => {
    const url = 'https://emoji-api.com/emojis?search=cowboy&access_key=ccd4ba88d6d80505f138b2e3e97bd3da9fe0dbf5'
    cy.intercept({
      method: 'GET',
      url ,
      fixture: 'cowboy.json'})
    cy.visit('http://localhost:3000')
  })

  it('Should return a list of matching emojis when using a search term', () => {
    cy.get('.start-btn').contains('Get Started Now').click()
    cy.get('input[name="searchTerm"]').type('cowboy')
      .should('have.value', 'cowboy')
    cy.get('.searchBtn').contains('Submit').click()
    cy.get('.cards-container').find('.emoji-card').should('have.length', 2)
  })
})

describe('Create a new Coat of Arms by clicking on emojis', () => {
  beforeEach(() => {
    const url = 'https://emoji-api.com/emojis?search=heart&access_key=ccd4ba88d6d80505f138b2e3e97bd3da9fe0dbf5'
    cy.intercept({
      method: 'GET',
      url ,
      fixture: 'hearts.json'})
    cy.visit('http://localhost:3000')
  })

  it('Should create a new Coat of Arms', () => {
    cy.get('.start-btn').contains('Get Started Now').click()
    cy.get('input[name="searchTerm"]').type('heart')
      .should('have.value', 'heart')
    cy.get('.searchBtn').contains('Submit').click()
    cy.get('.cards-container').find('.emoji-card').should('have.length', 55)
    cy.get('.emoji-card>#smiling-face-with-hearts').click()
    cy.get('.emoji-card>#smiling-face-with-heart-eyes').click()
    cy.get('.emoji-card>#smiling-cat-with-heart-eyes').click()
    cy.get('.emoji-card>#heart-with-arrow').click()
    cy.get('.emoji-card>#heart-with-ribbon').click()

    cy.get('.feedback').contains('Great selections!')
    cy.get('.save-btn').contains('Save').click()

    cy.get('.coat-container').should('exist')
    cy.get('.gallery-cards-container').should('have.length', 1)
  })
})

describe('404 Not Found', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/xyz')
  })

  it('Should show a 404 page', () => {
    cy.get('.oops').contains('404')
    cy.get('.btn').contains('Gallery').click()
    cy.get('.gallery-start-btn').should('exist')
  })
})

describe('Reset button on creating a coat', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Create')
  })

  it('Should reset coat by clicking reset button', () => {
    cy.get('.emoji-wrapper').children('.cards-container').should('be.empty')

    cy.get('input[name="searchTerm"]').type('heart')
      .should('have.value', 'heart')
    cy.get('.searchBtn').contains('Submit').click()
    cy.get('.emoji-card>#smiling-face-with-hearts').click()
    cy.get('.emoji-card>#anatomical-heart').click()
    cy.get('.emoji-card>#smiling-cat-with-heart-eyes').click()
    cy.get('.emoji-card>#purple-heart').click()
    cy.get('.emoji-wrapper').find('.emoji-card').should('have.length', 4)

    cy.get('.reset-btn').click()

    cy.get('.emoji-wrapper').children('.cards-container').should('be.empty')

  })

})
