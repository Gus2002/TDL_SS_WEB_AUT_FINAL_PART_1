import BasePage from "./Base.page";

class CheckoutComplete extends BasePage {
    static get url() {
        return "/checkout-complete.html";
      }
    static get completeHeader(){
        return cy.get("h2.complete-header")
    }



}

export default CheckoutComplete