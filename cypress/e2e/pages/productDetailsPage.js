class ProductDetailsPage {
    
  elements = {
    productNameBreadCrumb: () => cy.get("strong.current-item"),
    emailButton: () => cy.get("button.button-2.email-a-friend-button"),
    productPriceLabel: () => cy.get("#price-value-4"),
    reviewHyperlink: () => cy.get('[href="/productreviews/4"]').eq(2),
  };

  checkThatProductPageShouldBeDisplayed(productName) {
    this.elements.productNameBreadCrumb().should("contain", productName);
    return this;
  }

  emailFriend() {
    this.elements.emailButton().click();
  }

  addReview() {
    this.elements.reviewHyperlink().click();
  }

  checkCurrency(currency) {
    this.elements.productPriceLabel().should("contain", currency);
  }
}

export default new ProductDetailsPage();
