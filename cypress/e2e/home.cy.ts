
describe('Home page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  context('Hero section', () => {
    it('the h1 contains the correct text', () => {
      cy.getByData("hero-heading").contains('Testing Next.js Application')
    })
  
    it('the features on the homepage are correct', () => {
      cy.get('dt').eq(0).contains('4 Courses')
    })
  })

  context.only('Courses section', () => {
    it('Course: Testing Your First Next.js Application', () => {
      cy.getByData("course-0").find("a").eq(3)//.click()
      //cy.location("pathname").should("eq", "/testing-your-first-application")
    })
  })

  
})
