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
    // Do the number buttons update the display of the running total?
     
  it('should update running total with correct outcome', () => {
    cy.get('#number7').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9');
  })
  // Do the arithmetical operations update the display with the result of the operation?
  
  it('should chain operations together', () => {
    cy.get('#number9').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
    })
    // Can multiple operations be chained together?

  it('should work with positive numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
    })
    // Is the output as expected for a range of numbers? Write tests for positive, 
    
  it('should be able to output negative numbers', () => {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2');
  })
    // negative, 
    
  it('should work with decimal numbers ', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5');
  })
  //decimals
  
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
  //very large numbers
  
  it('should give runtime error on divide by 0', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error');
  })
    // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
    // When 

})