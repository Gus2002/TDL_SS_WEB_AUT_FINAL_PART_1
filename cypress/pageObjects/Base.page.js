class BasePage {
  static get url() {
    return "";
  }

  static visit() {
    cy.visit(this.url, { failOnStatusCode: false });
  }
  static get shoppingCartBadge(){
    return cy.get("span.shopping_cart_badge")
  }
  static get burgerMenuBtn(){
    return cy.get("#react-burger-menu-btn")
  }
  static get resetAppStateBtn(){
    return cy.get("#reset_sidebar_link")
  }
  static get shoppingCartLink(){
    return cy.get("a.shopping_cart_link")
  }
}

export default BasePage;
