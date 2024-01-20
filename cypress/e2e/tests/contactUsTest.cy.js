import UserFormData from "../pages/UserFormData"
import homepage from "../pages/homepage"

describe('Contact Us Test', () => {

    const fullName = UserFormData.getFullName();
    const email = UserFormData.getEmail();
    const enquiry = UserFormData.getMessage();

    it('can contact Website owner', () => {
        homepage.navigateToContactUsPage().fillContactInfoForm(fullName, email, enquiry)
        .clickOnSubmitButton().checkThatSuccessMessageShouldBeDisplayed();
    })
})