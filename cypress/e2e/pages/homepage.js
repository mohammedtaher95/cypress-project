import contactUs from "./contactUsPage"
import loginPage from "./loginPage"
import myAccountPage from "./myAccountPage"
import registrationPage from "./registrationPage"

class HomePage {

    elements = {
        myAccountLink: () => cy.get('.ico-account')
    }
    visit(){
        cy.visit('/')
        return this
    }

    navigateToRegistrationPage() {
        cy.visit('/register')
        return registrationPage
    }

    navigateToLoginPage() {
        cy.visit('/login')
        return loginPage
    }

    navigateToMyAccountPage() {
        // this.elements.myAccountLink().click();
        cy.visit('/customer/info')
        return myAccountPage
        // 
    }

    navigateToContactUsPage() {
        cy.visit('/contactus')
        return contactUs
    }

}

export default new HomePage();