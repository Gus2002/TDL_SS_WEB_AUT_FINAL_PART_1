import BasePage from "./Base.page";

class CheckoutStepOnePage extends BasePage {
    static get url() {
        return "/checkout-step-one.html";
      }
      static get firstNameInput(){
        return cy.get("#first-name")
      }
      static get lastNameInput(){
        return cy.get("#last-name")
      }
      static get postalCodeInput(){
        return cy.get("#postal-code")
      }
      static get continueBtn(){
        return cy.get("#continue")
      }



}

export default CheckoutStepOnePage