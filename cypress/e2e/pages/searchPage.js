import productDetailsPage from "./productDetailsPage";

class SearchPage {

  elements = {
    searchField: () => cy.get("#small-searchterms"),
    searchButton: () => cy.get("button.button-1.search-box-button"),
    productResult: () => cy.get("div.picture"),
    productList: () => cy.get("#ui-id-1"),
  };

  productSearch(productName) {
    this.elements.searchField().type(productName);
    this.elements.searchButton().click();
    return this;
  }

  openProductPage() {
    this.elements.productResult().eq(0).click();
    return productDetailsPage
  }

  productSearchUsingAutoSuggest(searchText) {
    this.elements.searchField().type(searchText);
    this.elements.productList().eq(0).click();
    return productDetailsPage
  }
}

export default new SearchPage();
