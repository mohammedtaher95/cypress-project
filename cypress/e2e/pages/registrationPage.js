
class RegistrationPage {

  elements = {
    genderMaleRadioBtn: () => cy.get("#gender-male"),
    firstName: () => cy.get("#FirstName"),
    lastName: () => cy.get("#LastName"),
    emailField: () => cy.get("#Email"),
    passwordField: () => cy.get("#Password"),
    confirmPassword: () => cy.get("#ConfirmPassword"),
    registerBtn: () => cy.get("#register-button"),
    successMessage: () => cy.get(".result"),
    continueBtn: () => cy.get("a.button-1.register-continue-button"),
  };

  checkThatUserRegistrationPageIsLoaded() {

  }

  fillUserRegistrationForm(firstName, lastName, email, password) {
    this.elements.genderMaleRadioBtn().click();
    this.elements.firstName().type(firstName);
    this.elements.lastName().type(lastName);
    this.elements.emailField().type(email)
    this.elements.passwordField().type(password);
    this.elements.confirmPassword().type(password);
    return this;
  }

  clickOnRegisterButton() {
    this.elements.registerBtn().click()
    return this;
  }

  validateThatSuccessMessageIsDisplayed () {
    this.elements.continueBtn().should('exist')
    return this;
  }
}

export default new RegistrationPage();
