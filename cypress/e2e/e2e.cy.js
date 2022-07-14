

it('BstackDemo', () =>{
    cy.visit('https://bstackdemo.com/')

    cy.get("#signin").click();

    cy.get("#username").click();
    cy.xpath("//div[text()='demouser']").click();
    cy.get("#password").click();
    cy.xpath("//div[text()='testingisfun99']").click();
    cy.get("#login-btn").click();

    cy.get("#logout").should('have.text','Logout')

    cy.get("#logout").click();

    cy.get("#signin").should('have.text','Sign In')

})