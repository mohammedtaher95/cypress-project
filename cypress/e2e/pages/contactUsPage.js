class ContactUsPage {

  elements = {
    nameField: () => cy.get("#FullName"),
    emailField: () => cy.get("#Email"),
    enquiryField: () => cy.get("#Enquiry"),
    submitBtn: () => cy.get("[name='send-email']"),
    successMessage: () => cy.get(".result"),
  };

  successMessage = "Your enquiry has been successfully sent to the store owner.";

  fillContactInfoForm(name, email, enquiry) {
    this.elements.nameField().type(name);
    this.elements.emailField().type(email);
    this.elements.enquiryField().type(enquiry);
    return this;
  }

  clickOnSubmitButton() {
    this.elements.submitBtn().click();
    return this;
  }

  checkThatSuccessMessageShouldBeDisplayed() {
    this.elements.successMessage().should('exist').should('contain', this.successMessage);
    return this;
  }
}

export default new ContactUsPage();
