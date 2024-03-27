
describe ("Casos de prueba  para la validacion de la pagina principal", () => {
    beforeEach( ()=> {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    })
    
    it('Boton de Home', () =>  {
        
        cy.get('.home').should('have.text', 'Home');
        cy.get('.home').should('have.class', 'btn');
        cy.get('.home').should('have.class', 'home');
        cy.get('.home').should('have.attr', 'ng-click', 'home()');
        cy.get('.home').should('be.visible');
        cy.get('.home').should('be.enabled');
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('.home').click();
        
    })

    
    it('Box de header', function() {
        
        cy.get('.mainHeading').should('have.text', 'XYZ Bank');
        cy.get('.mainHeading').should('have.class', 'mainHeading');
        cy.get('.mainHeading').should('be.visible');
        cy.get('.mainhdr').should('have.text', '\n\t\tHome\n\t\tXYZ Bank\n\t\tLogout\n\t\t\n\t');
        cy.get('.mainhdr').should('have.class', 'box');
        cy.get('.mainhdr').should('have.class', 'mainhdr');
        cy.get('.mainhdr').should('be.visible');
        
    });

    
    it('Boton de Customer Login', function() {

        cy.get('.borderM > :nth-child(1) > .btn').should('have.text', 'Customer Login');
        cy.get('.borderM > :nth-child(1) > .btn').should('have.class', 'btn');
        cy.get('.borderM > :nth-child(1) > .btn').should('have.class', 'btn-primary');
        cy.get('.borderM > :nth-child(1) > .btn').should('have.class', 'btn-lg');
        cy.get('.borderM > :nth-child(1) > .btn').should('have.attr', 'ng-click', 'customer()');
        cy.get('.borderM > :nth-child(1) > .btn').should('be.visible');
        cy.get('.borderM > :nth-child(1) > .btn').should('be.enabled');
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
        
    });

    
    it('Boton de Bank Manager Login', function() {
       
        cy.get(':nth-child(3) > .btn').should('have.text', 'Bank Manager Login');
        cy.get(':nth-child(3) > .btn').should('have.class', 'btn');
        cy.get(':nth-child(3) > .btn').should('have.class', 'btn-primary');
        cy.get(':nth-child(3) > .btn').should('have.class', 'btn-lg');
        cy.get(':nth-child(3) > .btn').should('have.attr', 'ng-click', 'manager()');
        cy.get(':nth-child(3) > .btn').should('be.visible');
        cy.get(':nth-child(3) > .btn').should('be.enabled');
      
    });

   
    it('Box del Body', function() {
        
        cy.get('.borderM').should('have.text', '\n\t\tCustomer Login\n\t\tBank Manager Login\n\t');
        cy.get('.borderM').should('have.class', 'borderM');
        cy.get('.borderM').should('have.class', 'box');
        cy.get('.borderM').should('have.class', 'padT20');
        cy.get('.borderM').should('be.visible');
       
    });
})
