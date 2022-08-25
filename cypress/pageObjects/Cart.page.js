import BasePage from "./Base.page";

class CartPage extends BasePage {
    static get url() {
        return "/cart.html";
      }
   static get checkoutBtn(){
    return cy.get("#checkout")
   }



}

export default CartPage
