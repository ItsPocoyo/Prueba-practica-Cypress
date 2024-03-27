describe ("Validacion del boton Home, logout e interfaz de Welcome user", () => {
    beforeEach( ()=> {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account');
    })


it('Flujo de home desde la interfaz de Welcome User', function() {
  
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account');
  cy.get('.home').click();
  cy.get('.borderM > :nth-child(1) > .btn').click();
  cy.get('#userSelect').select('1');
  cy.get('form.ng-valid > .btn').click();
    })


it('Flujo de Logout desde la interfaz de Welcome User', function() {

  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account'); 
  cy.get('.logout').click();
  cy.get('#userSelect').select('1');
  cy.get('form.ng-valid > .btn').click();

    })


it('Validacion  del boton de Logout', function() {

  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account');
  cy.get('.logout').should('have.text', 'Logout');
  cy.get('.logout').should('have.class', 'btn');
  cy.get('.logout').should('have.class', 'logout');
  cy.get('.logout').should('have.attr', 'ng-show', 'logout');
  cy.get('.logout').should('have.attr', 'ng-click', 'byebye()');
  cy.get('.logout').should('be.visible');
  cy.get('.logout').should('be.enabled');

    })


it('Validacion  del Label Welcome, User', function() {
  
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'); 
  cy.get('.borderM > :nth-child(1) > .btn').click();
  cy.get('#userSelect').select('1');
  cy.get('form.ng-valid > .btn').click(); 
  cy.get('.logout').should('have.text', 'Logout');
  cy.get('.logout').should('have.class', 'btn');
  cy.get('.logout').should('have.class', 'logout');
  cy.get('.logout').should('have.attr', 'ng-show', 'logout');
  cy.get('.logout').should('have.attr', 'ng-click', 'byebye()');
  cy.get('.logout').should('be.visible');
  cy.get('.logout').should('be.enabled');
  cy.get('.borderM > :nth-child(1) > strong').should('have.text', ' Welcome Hermoine Granger !!');
  cy.get('.fontBig').should('have.text', 'Hermoine Granger');
  cy.get('.borderM > :nth-child(1) > strong').should('be.visible');
  cy.get('.fontBig').should('have.class', 'fontBig');
  cy.get('.fontBig').should('have.class', 'ng-binding');
  cy.get('.fontBig').should('be.visible');  

    })
 
it('Validacion  del boton de Select de Account number', function() {

  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  cy.get('.borderM > :nth-child(1) > .btn').click();
  cy.get('#userSelect').select('1');
  cy.get('form.ng-valid > .btn').click(); 
  cy.get('#accountSelect').should('have.id', 'accountSelect');
  cy.get('#accountSelect').should('have.class', 'ng-pristine');
  cy.get('#accountSelect').should('have.class', 'ng-valid');
  cy.get('#accountSelect').should('have.attr', 'ng-hide', 'noAccount');
  cy.get('#accountSelect').should('have.attr', 'ng-options', 'account for account in Accounts');
  cy.get('#accountSelect').should('have.attr', 'style', 'margin-left:10px');
  cy.get('#accountSelect').should('have.attr', 'name', 'accountSelect');
  cy.get('#accountSelect').should('have.attr', 'ng-model', 'accountNo');
  cy.get('#accountSelect').should('have.attr', 'ng-change', 'selectAcct()');
  cy.get('#accountSelect').should('be.visible');
  cy.get('#accountSelect').should('be.enabled');
  //cy.get('.borderM > :nth-child(1) > .btn').click();
  //cy.get('#userSelect').select('1');//
  //cy.get('form.ng-valid > .btn').click();
  cy.get('.borderM > :nth-child(1)').click();
  cy.get('#accountSelect').select('number:1002');
  cy.get('.borderM > :nth-child(1)').click();
  cy.get('#accountSelect').select('number:1003');
 
  
})

it('Validacion  de Account Number, Balance, Currency de la interfaz de Welcomer User', function() {
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  cy.get('.borderM > :nth-child(1) > .btn').click();
  cy.get('#userSelect').select('1');
  cy.get('form.ng-valid > .btn').click();
  cy.get('.borderM > :nth-child(3)').should('have.text', 'Account Number : 1001 , \n\tBalance : 5096 , \n\tCurrency : Dollar');
  cy.get('.borderM > :nth-child(3)').should('have.class', 'center');
  cy.get('.borderM > :nth-child(3)').should('have.attr', 'ng-hide', 'noAccount');
  cy.get('.borderM > :nth-child(3)').should('be.visible');
  cy.get('.borderM > :nth-child(3) > :nth-child(1)').should('have.class', 'ng-binding');
  cy.get('.borderM > :nth-child(3) > :nth-child(1)').should('be.visible');
  cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('have.class', 'ng-binding');
  cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('be.visible');
  cy.get('.borderM > :nth-child(3) > :nth-child(3)').should('have.class', 'ng-binding');
  cy.get('.borderM > :nth-child(3) > :nth-child(3)').should('be.visible');
  
})

it('Validacion  de Transactions en la interfaz de Welcomer User', function() {
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  cy.get('.borderM > :nth-child(1) > .btn').click();
  cy.get('#userSelect').select('1');
  cy.get('form.ng-valid > .btn').click();
  cy.get('[ng-class="btnClass1"]').should('have.text', 'Transactions\n\t\t\n\t\t');
  cy.get('[ng-class="btnClass1"]').should('have.class', 'btn');
  cy.get('[ng-class="btnClass1"]').should('have.class', 'btn-lg');
  cy.get('[ng-class="btnClass1"]').should('have.class', 'tab');
  cy.get('[ng-class="btnClass1"]').should('have.attr', 'ng-class', 'btnClass1');
  cy.get('[ng-class="btnClass1"]').should('have.attr', 'ng-click', 'transactions()');
  cy.get('[ng-class="btnClass1"]').should('be.visible');
  cy.get('[ng-class="btnClass1"]').should('be.enabled');
  cy.get('[ng-class="btnClass1"]').click();

  // Boton de Back
  cy.get('.fixedTopBox > [style="float:left"]').should('have.text', 'Back');
  cy.get('.fixedTopBox > [style="float:left"]').should('have.class', 'btn');
  cy.get('.fixedTopBox > [style="float:left"]').should('have.attr', 'style', 'float:left');
  cy.get('.fixedTopBox > [style="float:left"]').should('have.attr', 'ng-click', 'back()');
  cy.get('.fixedTopBox > [style="float:left"]').should('be.visible');
  cy.get('.fixedTopBox > [style="float:left"]').should('be.enabled');
  cy.get('.fixedTopBox > [style="float:left"]').click();
  cy.get('[ng-class="btnClass1"]').click();

  // Boton de Reset
  cy.get('[style="float:right;margin-top:-30px;"]').should('have.text', 'Reset');
  cy.get('[style="float:right;margin-top:-30px;"]').should('have.class', 'btn');
  cy.get('[style="float:right;margin-top:-30px;"]').should('have.attr', 'ng-show', 'showDate');
  cy.get('[style="float:right;margin-top:-30px;"]').should('have.attr', 'style', 'float:right;margin-top:-30px;');
  cy.get('[style="float:right;margin-top:-30px;"]').should('have.attr', 'ng-click', 'reset()');
  cy.get('[style="float:right;margin-top:-30px;"]').should('be.visible');
  cy.get('[style="float:right;margin-top:-30px;"]').should('be.enabled');
  cy.get('[style="float:right;margin-top:-30px;"]').click();


  // Fecha primaría (Start)
  cy.get('#start').should('have.id', 'start');
  cy.get('#start').should('have.class', 'ng-pristine');
  cy.get('#start').should('have.class', 'ng-valid');
  cy.get('#start').should('have.class', 'ng-valid-min');
  cy.get('#start').should('have.attr', 'style', 'width:130px;');
  cy.get('#start').should('have.attr', 'type', 'datetime-local');
  cy.get('#start').should('have.attr', 'name', 'start');
  cy.get('#start').should('have.attr', 'ng-model', 'startDate');
  cy.get('#start').should('have.attr', 'placeholder', 'yyyy-MM-ddTHH:mm:ss');
  cy.get('#start').should('have.attr', 'min', '2015-01-01T00:00:00');
  cy.get('#start').should('have.attr', 'max', '2015-07-28T00:00:00');
  cy.get('#start').should('not.be.checked');

  // Fecha secuandaría (End)
  cy.get('#end').should('have.id', 'end');
  cy.get('#end').should('have.class', 'ng-pristine');
  cy.get('#end').should('have.class', 'ng-valid');
  cy.get('#end').should('have.class', 'ng-valid-min');
  cy.get('#end').should('have.attr', 'style', 'width:130px;');
  cy.get('#end').should('have.attr', 'type', 'datetime-local');
  cy.get('#end').should('have.attr', 'name', 'end');
  cy.get('#end').should('have.attr', 'ng-model', 'end');
  cy.get('#end').should('have.attr', 'placeholder', 'yyyy-MM-ddTHH:mm:ss');
  cy.get('#end').should('have.attr', 'min');
  cy.get('#end').should('have.attr', 'max');
  cy.get('#end').should('be.visible');
  cy.get('#end').should('be.enabled');
  cy.get('#end').should('not.be.checked');

  // Box contenedor de (Back, Reset, Fechas)
  cy.get('.fixedTopBox').should('have.text', '\n\tBack\n\t\n\t\t\n\t\t\n  \n\n\t\n\tReset\n\t');
  cy.get('.fixedTopBox > div').should('have.attr', 'ng-show', 'showDate');
  cy.get('.fixedTopBox > div').should('have.attr', 'style', 'margin-left:20%;');
  cy.get('.fixedTopBox > div').should('be.visible');




  // Validacion del (Date time, Amount, Transaction Type)
  cy.get(':nth-child(1) > a').should('have.text', '\n            Date-Time\n          ');
  cy.get(':nth-child(1) > a').should('have.attr', 'href', '#');
  cy.get(':nth-child(1) > a').should('have.attr', 'ng-click', 'sortType = \'date\'; sortReverse = !sortReverse');
  cy.get(':nth-child(1) > a').should('be.visible');
  cy.get(':nth-child(2) > a').should('have.text', 'Amount');
  cy.get(':nth-child(2) > a').should('be.visible');
  cy.get(':nth-child(3) > a').should('have.text', 'Transaction Type');
  cy.get(':nth-child(3) > a').should('be.visible');
  cy.get('tr > :nth-child(1)').should('have.text', '\n          \n            Date-Time\n          \n        ');
  cy.get('tr > :nth-child(1)').should('be.visible');
  cy.get('tr > :nth-child(2)').should('have.text', 'Amount');
  cy.get('tr > :nth-child(2)').should('be.visible');
  cy.get('tr > :nth-child(3)').should('have.text', 'Transaction Type');
  cy.get('tr > :nth-child(3)').should('be.visible');

  // Validacion del boton de Deposit superior
  cy.get('.fixedTopBox > [style="float:left"]').click();
  cy.get('[ng-class="btnClass2"]').should('have.text', 'Deposit\n\t\t\n\t\t');
  cy.get('[ng-class="btnClass2"]').should('have.class', 'btn');
  cy.get('[ng-class="btnClass2"]').should('have.class', 'btn-lg');
  cy.get('[ng-class="btnClass2"]').should('have.class', 'tab');
  cy.get('[ng-class="btnClass2"]').should('have.attr', 'ng-class', 'btnClass2');
  cy.get('[ng-class="btnClass2"]').should('have.attr', 'ng-click', 'deposit()');
  cy.get('[ng-class="btnClass2"]').should('be.visible');
  cy.get('[ng-class="btnClass2"]').should('be.enabled');
  cy.get('[ng-class="btnClass2"]').click();

  // Validacion del campo de Amount to be Deposited
  cy.get('label').should('have.text', 'Amount to be Deposited :');
  cy.get('label').should('be.visible');
  cy.get('.form-control').should('have.class', 'form-control');
  cy.get('.form-control').should('have.class', 'ng-pristine');
  cy.get('.form-control').should('have.class', 'ng-invalid');
  cy.get('.form-control').should('have.class', 'ng-invalid-required');
  cy.get('.form-control').should('have.attr', 'type', 'number');
  cy.get('.form-control').should('have.attr', 'placeholder', 'amount');
  cy.get('.form-control').should('be.visible');
  cy.get('.form-control').should('be.enabled');
  cy.get('.form-control').should('not.be.checked');

  //Validacion del boton de Deposit inferior
  cy.get('form.ng-pristine > .btn').should('have.text', 'Deposit');
  cy.get('form.ng-pristine > .btn').should('have.class', 'btn');
  cy.get('form.ng-pristine > .btn').should('have.class', 'btn-default');
  cy.get('form.ng-pristine > .btn').should('have.attr', 'type', 'submit');
  cy.get('form.ng-pristine > .btn').should('be.visible');
  cy.get('form.ng-pristine > .btn').should('be.enabled');

  //Validacion del campo de numero
  cy.get('.form-control').clear('2');
  cy.get('.form-control').type('22222');
  cy.get('form.ng-dirty > .btn').click();

  //Validacion del mensaje de Deposit Successful
  cy.get('.error').should('have.text', 'Deposit Successful');
  cy.get('.error').should('have.class', 'error');
  cy.get('.error').should('have.class', 'ng-binding');
  cy.get('.error').should('have.attr', 'ng-show', 'message');
  cy.get('.error').should('be.visible');

  //Validacion del box de (Amount to be deposited, Amount, Deposit inferior)
  cy.get('.ng-submitted').should('have.text', '\n\t\tAmount to be Deposited :\n\t\t\t\n\t\t\n\t\tDeposit\n\t');
  cy.get('.ng-submitted').should('have.class', 'ng-dirty');
  cy.get('.ng-submitted').should('have.class', 'ng-submitted');
  cy.get('.ng-submitted').should('have.class', 'ng-invalid');
  cy.get('.ng-submitted').should('have.class', 'ng-invalid-required');
  cy.get('.ng-submitted').should('have.attr', 'role', 'form');
  cy.get('.ng-submitted').should('have.attr', 'name', 'myForm');
  cy.get('.ng-submitted').should('have.attr', 'ng-submit', 'deposit()');
  cy.get('.ng-submitted').should('be.visible');
  cy.get('.form-group').should('have.text', 'Amount to be Deposited :\n\t\t\t\n\t\t');
  cy.get('.form-group').should('have.class', 'form-group');
  cy.get('.form-group').should('be.visible');

  //Validacion del boton de Withdrawl superior
  cy.get('[ng-class="btnClass3"]').click();
  cy.get('.btn-primary').should('have.text', 'Withdrawl\n\t\t\n\t\t');
  cy.get('.btn-primary').should('have.class', 'btn');
  cy.get('.btn-primary').should('have.class', 'btn-lg');
  cy.get('.btn-primary').should('have.class', 'tab');
  cy.get('.btn-primary').should('have.class', 'btn-primary');
  cy.get('.btn-primary').should('have.attr', 'ng-class', 'btnClass3');
  cy.get('.btn-primary').should('have.attr', 'ng-click', 'withdrawl()');
  cy.get('.btn-primary').should('be.visible');
  cy.get('.btn-primary').should('be.enabled');

  // Validacion del campo de Amount to be Withdraw
  cy.get('label').should('have.text', 'Amount to be Withdrawn :');
  cy.get('label').should('be.visible');
  cy.get('.form-control').should('have.class', 'form-control');
  cy.get('.form-control').should('have.class', 'ng-pristine');
  cy.get('.form-control').should('have.class', 'ng-invalid');
  cy.get('.form-control').should('have.class', 'ng-invalid-required');
  cy.get('.form-control').should('have.attr', 'type', 'number');
  cy.get('.form-control').should('have.attr', 'ng-model', 'amount');
  cy.get('.form-control').should('have.attr', 'placeholder', 'amount');
  cy.get('.form-control').should('be.visible');
  cy.get('.form-control').should('be.enabled');
  cy.get('.form-control').should('not.be.checked');

  //Validacion del boton de Deposit inferior
  cy.get('form.ng-pristine > .btn').should('have.text', 'Withdraw');
  cy.get('form.ng-pristine > .btn').should('have.class', 'btn');
  cy.get('form.ng-pristine > .btn').should('have.class', 'btn-default');
  cy.get('form.ng-pristine > .btn').should('have.attr', 'type', 'submit');
  cy.get('form.ng-pristine > .btn').should('be.visible');
  cy.get('form.ng-pristine > .btn').should('be.enabled');

  //Validacion del campo de numero
  cy.get('.form-control').clear('2');
  cy.get('.form-control').type('2222');
  cy.get('form.ng-dirty > .btn').click();

  //Validacion del mensaje de Deposit Successful
  cy.get('.error').should('have.text', 'Transaction successful');
  cy.get('.error').should('have.class', 'error');
  cy.get('.error').should('have.class', 'ng-binding');
  cy.get('.error').should('have.attr', 'ng-show', 'message');
  cy.get('.error').should('be.visible');

  //Validacion del mensaje de Transaction Failed
  cy.get('.form-control').clear('66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666');
  cy.get('.form-control').type('66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666');
  cy.get('.ng-submitted > .btn').click();
  cy.get('.error').should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.');
  cy.get('.borderM > .container-fluid > .ng-scope').should('have.class', 'ng-scope');
  cy.get('.error').should('have.attr', 'ng-show', 'message');
  cy.get('.error').should('be.visible');
  /* ==== End Cypress Studio ==== */
})



})