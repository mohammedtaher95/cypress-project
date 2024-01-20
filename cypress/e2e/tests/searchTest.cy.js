import homepage from "../pages/homepage";
import searchPage from "../pages/searchPage";
import productDetailsPage from "../pages/productDetailsPage";

describe('Search Tests', () => {

    const ProductName = "Apple MacBook Pro 13-inch"

    beforeEach(() => {
        homepage.visit()
    })

    it('can search for products', () => {
        searchPage.productSearch("Apple").openProductPage().checkThatProductPageShouldBeDisplayed(ProductName)
    })

    it('can search for products with auto-suggest', () => {
        searchPage.productSearchUsingAutoSuggest("Mac").checkThatProductPageShouldBeDisplayed(ProductName);
    })
})