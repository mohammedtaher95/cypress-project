class MyAccountPage {
  elements = {
    changePasswordLink: () => cy.get('[href="/customer/changepassword"]'),
    customerInfo: () => cy.get('[href="/customer/info"]'),
    oldPasswordTxt: () => cy.get("#OldPassword"),
    newPasswordTxt: () => cy.get("#NewPassword"),
    confirmPasswordTxt: () => cy.get("#ConfirmNewPassword"),
    changePasswordBtn: () => cy.get("button.button-1.change-password-button"),
    changeResult: () => cy.get("p.content"),
    messageCloseBtn: () => cy.get("span.close"),
    logoutLink: () => cy.get("a.ico-logout"),
  };

  openChangePasswordpage() {
    this.elements.changePasswordLink().click();
    return this;
  }

  changePassword(oldPass, newPass) {
    this.elements.oldPasswordTxt().type(oldPass);
    this.elements.newPasswordTxt().type(newPass);
    this.elements.confirmPasswordTxt().type(newPass);
    return this;
  }

  clickOnConfirm() {
    this.elements.changePasswordBtn().click();
    return this;
  }

  checkThatChangeMessageShouldBeDisplayed() {
    this.elements.changeResult().should('contain', 'Password was changed')
    return this;
  }

  closeMessage() {
    this.elements.messageCloseBtn().click();
    return this;
  }

  clickOnLogoutButton() {
    this.elements.logoutLink().should('be.visible').click();
  }
}

export default new MyAccountPage();
