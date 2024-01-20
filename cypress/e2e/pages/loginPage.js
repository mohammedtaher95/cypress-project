import homepage from "./homepage";

class LoginPage {


  elements = {
    emailField: () => cy.get("#Email"),
    passwordField: () => cy.get("#Password"),
    loginBtn: () => cy.get("button.button-1.login-button"),
    logoutLink: () => cy.get("a.ico-logout"),
  }

  userLogin(email, password)
	{
		this.elements.emailField().type(email);
		this.elements.passwordField().type(password);
		return this;
	}

	clickOnLoginButton()
	{
		this.elements.loginBtn().click();
		return this;
	}

	checkThatLogoutButtonShouldBeDisplayed()
	{
		this.elements.logoutLink().should('be.visible');
		return this;
	}

	clickOnLogoutButton()
	{
		this.elements.logoutLink().click(logoutLink);
		return homepage
	}
}

export default new LoginPage();