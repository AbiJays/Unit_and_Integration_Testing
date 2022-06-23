describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update running total on button press', () => {
    cy.get('#number7').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '72')
    })

     
  it('should update running total with correct outcome', () => {
    cy.get('#number7').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9');
  })

  
  it('should chain operations together', () => {
    cy.get('#number9').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
    })


  it('should work with positive numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
    })

    
  it('should be able to output negative numbers', () => {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2');
  })

    
  it('should work with decimal numbers ', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5');
  })

  
  it('should work with very large numbers ', () => {
    cy.get('#number6').click();
    cy.get('#number4').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '92304');
  })

  
  it('should give runtime error on divide by 0', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error');
  })

})