describe ("Casos de prueba para la validacion del flujo del boton Bank Manager", () => {
    beforeEach( ()=> {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get(':nth-child(3) > .btn').click();
    })
it('Casos de prueba para la validacion del boton Add Customer y sus campos', function() {

    // Validacion del boton de Add Customer Superior
    cy.get('[ng-class="btnClass1"]').should('have.text', 'Add Customer\n\t\t');
    cy.get('[ng-class="btnClass1"]').should('have.class', 'btn');
    cy.get('[ng-class="btnClass1"]').should('have.class', 'btn-lg');
    cy.get('[ng-class="btnClass1"]').should('have.class', 'tab');
    cy.get('[ng-class="btnClass1"]').should('have.attr', 'ng-class', 'btnClass1');
    cy.get('[ng-class="btnClass1"]').should('have.attr', 'ng-click', 'addCust()');
    cy.get('[ng-class="btnClass1"]').should('be.visible');
    cy.get('[ng-class="btnClass1"]').should('be.enabled');
    cy.get('[ng-class="btnClass1"]').click();


    //  Validacion del campo de First Name
    cy.get(':nth-child(1) > label').should('have.text', 'First Name :');
    cy.get(':nth-child(1) > label').should('be.visible');
    cy.get(':nth-child(1) > .form-control').should('have.class', 'form-control');
    cy.get(':nth-child(1) > .form-control').should('have.class', 'ng-pristine');
    cy.get(':nth-child(1) > .form-control').should('have.class', 'ng-invalid');
    cy.get(':nth-child(1) > .form-control').should('have.class', 'ng-invalid-required');
    cy.get(':nth-child(1) > .form-control').should('have.attr', 'type', 'text');
    cy.get(':nth-child(1) > .form-control').should('have.attr', 'ng-model', 'fName');
    cy.get(':nth-child(1) > .form-control').should('have.attr', 'placeholder', 'First Name');
    cy.get(':nth-child(1) > .form-control').should('be.visible');
    cy.get(':nth-child(1) > .form-control').should('be.enabled');
    cy.get(':nth-child(1) > .form-control').should('not.be.checked');


    //  Validacion del campo de Last Name
    cy.get(':nth-child(2) > label').should('have.text', 'Last Name :');
    cy.get(':nth-child(2) > label').should('be.visible');
    cy.get(':nth-child(2) > .form-control').should('have.class', 'form-control');
    cy.get(':nth-child(2) > .form-control').should('have.class', 'ng-pristine');
    cy.get(':nth-child(2) > .form-control').should('have.class', 'ng-invalid');
    cy.get(':nth-child(2) > .form-control').should('have.class', 'ng-invalid-required');
    cy.get(':nth-child(2) > .form-control').should('have.attr', 'type', 'text');
    cy.get(':nth-child(2) > .form-control').should('have.attr', 'ng-model', 'lName');
    cy.get(':nth-child(2) > .form-control').should('have.attr', 'placeholder', 'Last Name');
    cy.get(':nth-child(2) > .form-control').should('be.visible');
    cy.get(':nth-child(2) > .form-control').should('be.enabled');
    cy.get(':nth-child(2) > .form-control').should('not.be.checked');


    //  Validacion del campo de Post Code
    cy.get(':nth-child(3) > label').should('have.text', 'Post Code :');
    cy.get(':nth-child(3) > label').should('be.visible');
    cy.get(':nth-child(3) > .form-control').should('have.class', 'form-control');
    cy.get(':nth-child(3) > .form-control').should('have.class', 'ng-pristine');
    cy.get(':nth-child(3) > .form-control').should('have.class', 'ng-invalid');
    cy.get(':nth-child(3) > .form-control').should('have.class', 'ng-invalid-required');
    cy.get(':nth-child(3) > .form-control').should('have.attr', 'type', 'text');
    cy.get(':nth-child(3) > .form-control').should('have.attr', 'ng-model', 'postCd');
    cy.get(':nth-child(3) > .form-control').should('have.attr', 'placeholder', 'Post Code');
    cy.get(':nth-child(3) > .form-control').should('be.visible');
    cy.get(':nth-child(3) > .form-control').should('be.enabled');
    cy.get(':nth-child(3) > .form-control').should('not.be.checked');

   
    //Validacion de ingreso de datos de (First Name, Last Name, Post Code)
    cy.get(':nth-child(1) > .form-control').clear('C');
    cy.get(':nth-child(1) > .form-control').type('Carlos');
    cy.get(':nth-child(2) > .form-control').clear('J');
    cy.get(':nth-child(2) > .form-control').type('Jimenez');
    cy.get(':nth-child(3) > .form-control').clear('ME');
    cy.get(':nth-child(3) > .form-control').type('Meza');


    // Validacion del boton de Add Customer Inferior
    cy.get('form.ng-dirty > .btn').should('have.text', 'Add Customer');
    cy.get('form.ng-dirty > .btn').should('have.class', 'btn');
    cy.get('form.ng-dirty > .btn').should('have.class', 'btn-default');
    cy.get('form.ng-dirty > .btn').should('have.attr', 'type', 'submit');
    cy.get('form.ng-dirty > .btn').should('be.visible');
    cy.get('form.ng-dirty > .btn').should('be.enabled');
    cy.get('form.ng-dirty > .btn').click();
    
})

it('Casos de prueba para la validacion del boton Open Account y sus campos', function() {
    
    // Validacion del boton de Open Account Superior
    cy.get('[ng-class="btnClass2"]').should('have.text', 'Open Account\n\t\t');
    cy.get('[ng-class="btnClass2"]').should('have.class', 'btn');
    cy.get('[ng-class="btnClass2"]').should('have.class', 'btn-lg');
    cy.get('[ng-class="btnClass2"]').should('have.class', 'tab');
    cy.get('[ng-class="btnClass2"]').should('have.attr', 'ng-class', 'btnClass2');
    cy.get('[ng-class="btnClass2"]').should('have.attr', 'ng-click', 'openAccount()');
    cy.get('[ng-class="btnClass2"]').should('be.visible');
    cy.get('[ng-class="btnClass2"]').should('be.enabled');
    cy.get('[ng-class="btnClass2"]').click();


    //  Validacion del campo de Customer
    cy.get(':nth-child(1) > label').should('have.text', 'Customer :');
    cy.get(':nth-child(1) > label').should('be.visible');
    cy.get('#userSelect').should('have.class', 'form-control');
    cy.get('#userSelect').should('have.class', 'ng-pristine');
    cy.get('#userSelect').should('have.class', 'ng-invalid');
    cy.get('#userSelect').should('have.class', 'ng-invalid-required');
    cy.get('#userSelect').should('have.id', 'userSelect');
    cy.get('#userSelect').should('have.attr', 'name', 'userSelect');
    cy.get('#userSelect').should('have.attr', 'ng-model', 'custId');
    cy.get('#userSelect').should('be.visible');
    cy.get('#userSelect').should('be.enabled');


    //  Validacion del campo de Currency
    cy.get(':nth-child(2) > label').should('have.text', 'Currency :');
    cy.get(':nth-child(2) > label').should('be.visible');
    cy.get('#currency').should('have.class', 'form-control');
    cy.get('#currency').should('have.class', 'ng-pristine');
    cy.get('#currency').should('have.class', 'ng-invalid');
    cy.get('#currency').should('have.class', 'ng-invalid-required');
    cy.get('#currency').should('have.id', 'currency');
    cy.get('#currency').should('have.attr', 'name', 'currency');
    cy.get('#currency').should('have.attr', 'name', 'currency');
    cy.get('#currency').should('have.attr', 'ng-model', 'currency');
    cy.get('#currency').should('be.visible');
    cy.get('#currency').should('be.enabled');


    // Validacion del seleccione del campo de Customer
    cy.get('#userSelect').select('1');
    cy.get('#userSelect').select('2');
    cy.get('#userSelect').select('3');
    cy.get('#userSelect').select('4');
    cy.get('#userSelect').select('5');


    // Validacion del seleccione del campo de Currency
    cy.get('#currency').select('Dollar');
    cy.get('#currency').select('Pound');
    cy.get('#currency').select('Rupee');


    //Validacion del boton de Process
    cy.get('form.ng-dirty > button').should('have.text', 'Process');
    cy.get('form.ng-dirty > button').should('have.attr', 'type', 'submit');
    cy.get('form.ng-dirty > button').should('be.visible');
    cy.get('form.ng-dirty > button').should('be.enabled');
    cy.get('form.ng-dirty > button').click();
    
});

it('Casos de prueba para la validacion del boton Customer y sus campos', function() {
    // Validacion del boton de Customer Superior
    cy.get('[ng-class="btnClass3"]').should('have.text', 'Customers\n\t\t');
    cy.get('[ng-class="btnClass3"]').should('have.class', 'btn');
    cy.get('[ng-class="btnClass3"]').should('have.class', 'btn-lg');
    cy.get('[ng-class="btnClass3"]').should('have.class', 'tab');
    cy.get('[ng-class="btnClass3"]').should('have.attr', 'ng-class', 'btnClass3');
    cy.get('[ng-class="btnClass3"]').should('have.attr', 'ng-click', 'showCust()');
    cy.get('[ng-class="btnClass3"]').should('be.visible');
    cy.get('[ng-class="btnClass3"]').should('be.enabled');
    cy.get('[ng-class="btnClass3"]').click();


    //Validacion del campo de Search Customer
    cy.get('.form-control').should('have.class', 'form-control');
    cy.get('.form-control').should('have.class', 'ng-pristine');
    cy.get('.form-control').should('have.class', 'ng-valid');
    cy.get('.form-control').should('have.attr', 'type', 'text');
    cy.get('.form-control').should('have.attr', 'placeholder', 'Search Customer');
    cy.get('.form-control').should('have.attr', 'ng-model', 'searchCustomer');
    cy.get('.form-control').should('be.visible');
    cy.get('.form-control').should('be.enabled');
    cy.get('.form-control').should('not.be.checked');
    cy.get('.form-control').clear('r');
    cy.get('.form-control').type('ron');


    //Validacion de los Campos de (First Name, Last Name, Post Code, Account Number, Delete Customer)
    cy.get(':nth-child(1) > a').should('have.text', '\n            First Name\n            \n            \n          ');
    cy.get(':nth-child(1) > a').should('have.attr', 'href', '#');
    cy.get(':nth-child(1) > a').should('have.attr', 'ng-click', 'sortType = \'fName\'; sortReverse = !sortReverse');
    cy.get(':nth-child(1) > a').should('be.visible');
    cy.get(':nth-child(2) > a').should('have.text', '\n          \tLast Name\n            \n            \n          ');
    cy.get(':nth-child(2) > a').should('have.attr', 'href', '#');
    cy.get(':nth-child(2) > a').should('have.attr', 'ng-click', 'sortType = \'lName\'; sortReverse = !sortReverse');
    cy.get(':nth-child(2) > a').should('be.visible');
    cy.get(':nth-child(3) > a').should('have.text', '\n          \tPost Code\n            \n            \n          ');
    cy.get(':nth-child(3) > a').should('have.attr', 'href', '#');
    cy.get(':nth-child(3) > a').should('have.attr', 'ng-click', 'sortType = \'postCd\'; sortReverse = !sortReverse');
    cy.get(':nth-child(3) > a').should('be.visible');
    cy.get('thead > tr > :nth-child(4)').should('have.text', '\n          Account Number\n        ');
    cy.get('thead > tr > :nth-child(4)').should('be.visible');
    cy.get('thead > tr > :nth-child(5)').should('have.text', '\n          Delete Customer\n        ');
    cy.get('thead > tr > :nth-child(5)').should('be.visible');


    //Validacion del dato en el campo de First Name
    cy.get('tr.ng-scope > :nth-child(1)').should('have.text', 'Ron');
    cy.get('tr.ng-scope > :nth-child(1)').should('have.class', 'ng-binding');
    cy.get('tr.ng-scope > :nth-child(1)').should('be.visible');


    //Validacion del dato en el campo de Last Name
    cy.get('tr.ng-scope > :nth-child(2)').should('have.text', 'Weasly');
    cy.get('tr.ng-scope > :nth-child(2)').should('have.class', 'ng-binding');
    cy.get('tr.ng-scope > :nth-child(2)').should('be.visible');


    //Validacion del dato en el campo de Post Code
    cy.get('tr.ng-scope > :nth-child(3)').should('have.text', 'E55555');
    cy.get('tr.ng-scope > :nth-child(3)').should('have.class', 'ng-binding');
    cy.get('tr.ng-scope > :nth-child(3)').should('be.visible');


    //Validacion del dato en el campo de Account Number
    cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '1008 ');
    cy.get(':nth-child(4) > :nth-child(1)').should('have.text', '1007 ');
    cy.get(':nth-child(4) > :nth-child(1)').should('have.class', 'ng-binding');
    cy.get(':nth-child(4) > :nth-child(1)').should('have.class', 'ng-scope');
    cy.get(':nth-child(4) > :nth-child(1)').should('have.attr', 'ng-repeat', 'account in cust.accountNo');
    cy.get(':nth-child(4) > :nth-child(1)').should('be.visible');
    cy.get(':nth-child(4) > :nth-child(2)').should('have.class', 'ng-binding');
    cy.get(':nth-child(4) > :nth-child(2)').should('have.class', 'ng-scope');
    cy.get(':nth-child(4) > :nth-child(2)').should('have.attr', 'ng-repeat', 'account in cust.accountNo');
    cy.get(':nth-child(4) > :nth-child(2)').should('be.visible');
    cy.get(':nth-child(4) > :nth-child(3)').should('have.text', '1009 ');
    cy.get(':nth-child(4) > :nth-child(3)').should('have.class', 'ng-binding');
    cy.get(':nth-child(4) > :nth-child(3)').should('have.class', 'ng-scope');
    cy.get(':nth-child(4) > :nth-child(3)').should('have.attr', 'ng-repeat', 'account in cust.accountNo');
    cy.get(':nth-child(4) > :nth-child(3)').should('be.visible');
    

    // Validacion del boton de Delete
    cy.get('.form-control').clear();
    cy.get(':nth-child(5) > :nth-child(5) > button').should('have.text', 'Delete');
    cy.get(':nth-child(5) > :nth-child(5) > button').should('have.attr', 'ng-click', 'deleteCust(cust)');
    cy.get(':nth-child(5) > :nth-child(5) > button').should('be.visible');
    cy.get(':nth-child(5) > :nth-child(5) > button').should('be.enabled');
    
});
  })