describe (" Casos de prueba para la validacion del boton  e interfaz de Customer Login", () => {
    beforeEach( ()=> {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    })

it('Boton de Customer Login', function() {
   
    cy.get('.borderM > :nth-child(1) > .btn').should('have.text', 'Customer Login');
    cy.get('.borderM > :nth-child(1) > .btn').should('have.class', 'btn');
    cy.get('.borderM > :nth-child(1) > .btn').should('have.class', 'btn-primary');
    cy.get('.borderM > :nth-child(1) > .btn').should('have.class', 'btn-lg');
    cy.get('.borderM > :nth-child(1) > .btn').should('have.attr', 'ng-click', 'customer()');
    cy.get('.borderM > :nth-child(1) > .btn').should('be.visible');
    cy.get('.borderM > :nth-child(1) > .btn').should('be.enabled');

    })
it ('Interfaz de Boton de Customer Login', function() {    
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.get('#userSelect').should('have.class', 'form-control');
        cy.get('#userSelect').should('have.class', 'ng-pristine');
        cy.get('#userSelect').should('have.class', 'ng-valid');
        cy.get('#userSelect').should('have.id', 'userSelect');
        cy.get('#userSelect').should('have.id', 'userSelect');
        cy.get('#userSelect').should('have.attr', 'name', 'userSelect');
        cy.get('#userSelect').should('have.attr', 'ng-model', 'custId');
        cy.get('#userSelect').should('be.visible');
        cy.get('#userSelect').should('be.enabled');
    
        })
})
          