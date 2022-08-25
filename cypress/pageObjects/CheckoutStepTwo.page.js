import BasePage from "./Base.page";

class CheckoutStepTwoPage extends BasePage {
    static get url() {
        return "/checkout-step-two.html";
      }
    static get itemName(){
        return cy.get("div.inventory_item_name")
    }
    static get finishBtn(){
        return cy.get("#finish")
    }



}

export default CheckoutStepTwoPage