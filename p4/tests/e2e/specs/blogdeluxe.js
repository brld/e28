/* 
I avoided the use of custom htlm attributes in this test as
I felt my architecture allowed for specific selection without
the need for testing-specific ids / attributes
*/

describe('BlogDeluxe', () => {
  let testPost = {
    slug: 'testing-123',
    author: 'Adam',
    subject: 'Testing 123'
  }

  let newPost = {
    slug: "test-post",
    author: "Jamal",
    subject: "Test Post",
    date: "12-12-2019",
    content: "Just testing the new blogging features!",
  }

  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Feed')
    cy.contains('div', testPost.subject).click()

    cy.contains('h1', testPost.subject)
  })
  
  it('favorites a post', () => {
    cy.visit('/post/' + testPost.slug)
    cy.get('button').click()
    cy.visit('/favorites')
    cy.contains('li', testPost.subject)
    cy.get('button').click()
    cy.contains('div', "You don't have any favorites yet... go browse our blog!")
  })

  it('views all users', () => {
    cy.visit('/users')
    cy.contains('h1', 'Users')
    cy.contains('td', testPost.author)
    // Katharine Osborne on StackOverflow
    cy.get('table').find('tr').its('length').should('be.gte', 6) 
  })

  it('creates a new post', () => {
    cy.visit('/post/new')
    cy.get('input').first().type(newPost.subject)
    cy.get('input').eq(1).type(newPost.author)
    cy.get('textarea').first().type(newPost.content)
    cy.get('button').click()
    cy.url().should('include', newPost.slug)
    cy.contains('h1', newPost.subject)
    cy.contains('h2', newPost.author)
  })

})
