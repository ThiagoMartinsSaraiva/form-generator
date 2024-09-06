// https://docs.cypress.io/api/table-of-contents

describe("Form Submit to get a pineapple", () => {
  describe("Submitting the full form with valid inputs to get a pineapple", () => {
    it('Given I am on the first Step of the form', () => {
      cy.visit('/')
    })

    it('Then I enter "teste" in the first field', () => {
      cy.get('.text-input').type('Teste')
    })
    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then I enter "teste@teste.teste" in the second field', () => {
      cy.get('.email-input').type('teste@teste.teste')
    })

    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then I Select "Abacaxi 🍍" in the first option of the third field', () => {
      cy.get('input[value="Abacaxi 🍍"]').click()
    })

    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then it should render "Legal, vamos te enviar um 🍍"', () => {
      cy.get('.submitted-form-container-label-main').contains('Legal, vamos te enviar um 🍍')
    })
  })
});

describe("Form Submit to get a watermelon", () => {
  describe("Submitting the full form with valid inputs to get a watermelon", () => {
    it('Given I am on the first Step of the form', () => {
      cy.visit('/')
    })

    it('Then I enter "teste" in the first field', () => {
      cy.get('.text-input').type('Teste')
    })
    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then I enter "teste@teste.teste" in the second field', () => {
      cy.get('.email-input').type('teste@teste.teste')
    })

    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then I Select "Melancia 🍉" in the second option of the third field', () => {
      cy.get('input[value="Melancia 🍉"]').click()
    })

    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then it should render "Legal, vamos te enviar uma 🍉"', () => {
      cy.get('.submitted-form-container-label-main').contains('Legal, vamos te enviar uma 🍉')
    })
  })
})

describe("Form Submit to get an apple", () => {
  describe("Submitting the full form with valid inputs to get an apple", () => {
    it('Given I am on the first Step of the form', () => {
      cy.visit('/')
    })

    it('Then I enter "teste" in the first field', () => {
      cy.get('.text-input').type('Teste')
    })
    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then I enter "teste@teste.teste" in the second field', () => {
      cy.get('.email-input').type('teste@teste.teste')
    })

    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then I Select "Maçâ 🍎" in the third option of the third field', () => {
      cy.get('input[value="Maçâ 🍎"]').click()
    })

    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then it should render "Legal, vamos te enviar uma 🍎"', () => {
      cy.get('.submitted-form-container-label-main').contains('Legal, vamos te enviar uma 🍎')
    })
  })
})

describe("Form Submit to get no fruits", () => {
  describe("Submitting the full form with valid inputs to get no fruits", () => {
    it('Given I am on the first Step of the form', () => {
      cy.visit('/')
    })

    it('Then I enter "teste" in the first field', () => {
      cy.get('.text-input').type('Teste')
    })
    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then I enter "teste@teste.teste" in the second field', () => {
      cy.get('.email-input').type('teste@teste.teste')
    })

    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then I Select "Outro" in the fourth option of the third field', () => {
      cy.get('input[value=""]').click()
    })
  
    it(`Then I select it's input and fill it with "Banana 🍌"`, () => {
      cy.get('.wrapper input').type('Banana 🍌')
    })

    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then it should render "Você não receberá frutas hoje"', () => {
      cy.get('.submitted-form-container-label-main').contains('Você não receberá frutas hoje')
    })
  })
})

describe("Form Submit to Get Email Validation Errors", () => {
  describe("Submitting the form to Get Email Validation Errors", () => {
    it('Given I am on the first Step of the form', () => {
      cy.visit('/')
    })

    it('Then I skip the first field', () => {
      // cy.get('.text-input').type('')
    })
    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then I skip the second field', () => {
      cy.get('.email-input')
    })

    it('Then I  click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then it should show "Essa resposta é obrigatória."', () => {
      cy.get('.error').contains('Essa resposta é obrigatória.')
    })

    it('Then I enter "teste" into the email field', () => {
      cy.get('.email-input').type('teste')
    })

    it('Then it should show "Informe um E-mail válido."', () => {
      cy.get('.error').contains('Informe um E-mail válido.')
    })

    it('Then I enter "teste@.teste.teste" into the email field', () => {
      cy.get('.email-input').type('teste@.teste.teste')
    })

    it('Then the error must be gone', () => {
      cy.get('.error').should('not.exist')
    })

    it('Then I  click the submit button', () => {
      cy.get('.button').click()
    })
  })
});

describe("Form Submit to Favorite Fruit Validation Error", () => {
  describe("Submitting the form to Get Favorite Fruit Validation Error", () => {
    it('Given I am on the first Step of the form', () => {
      cy.visit('/')
    })

    it('Then I enter "teste" in the first field', () => {
      cy.get('.text-input').type('Teste')
    })
    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then I enter "teste@teste.teste" in the second field', () => {
      cy.get('.email-input').type('teste@teste.teste')
    })

    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then I Select "Outro" in the fourth option of the third field', () => {
      cy.get('input[value=""]').click()
    })

    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then it should show "Essa resposta é obrigatória."', () => {
      cy.get('.error').contains('Essa resposta é obrigatória.')
    })

    it('Then I Select "Abacaxi 🍍" in the first option of the third field', () => {
      cy.get('input[value="Abacaxi 🍍"]').click()
    })

    it('Then the error must be gone', () => {
      cy.get('.error').should('not.exist')
    })

    it('Then I click the submit button', () => {
      cy.get('.button').click()
    })

    it('Then it should render "Legal, vamos te enviar um 🍍"', () => {
      cy.get('.submitted-form-container-label-main').contains('Legal, vamos te enviar um 🍍')
    })
  })
})