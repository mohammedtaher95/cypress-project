import UserFormData from '../pages/UserFormData'
import homepage from '../pages/homepage'
import registrationPage from '../pages/registrationPage'
import loginPage from '../pages/loginPage'
import myAccountPage from '../pages/myAccountPage'

describe ('My Account Registration and Login Tests', () => {

    const email = UserFormData.getEmail()
    const password = UserFormData.getOldPassword()
    const newPassword = UserFormData.getNewPassword()

    it('can register to Nopcommerce website', () => {
        homepage.navigateToRegistrationPage()
        .fillUserRegistrationForm(UserFormData.getFirstName(), UserFormData.getLastName(), email, password)
        .clickOnRegisterButton()
        .validateThatSuccessMessageIsDisplayed()
    })

    it('can login to Nopcommerce website and change password', () => {
        homepage.navigateToLoginPage().userLogin(email, password)
        .clickOnLoginButton().checkThatLogoutButtonShouldBeDisplayed()

        homepage.navigateToMyAccountPage()
        .openChangePasswordpage()
        .changePassword(password, newPassword)
        .clickOnConfirm()
        .checkThatChangeMessageShouldBeDisplayed()
        .closeMessage().clickOnLogoutButton()
    })

    it('can login with the new password', () => {
        homepage.navigateToLoginPage().userLogin(email, newPassword)
        .clickOnLoginButton().checkThatLogoutButtonShouldBeDisplayed()
    })

})
