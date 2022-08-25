import BasePage from "./Base.page";

class InventoryItemPage extends BasePage {
    static get url() {
        return "/inventory-item.html";
      }
   static get addToCartBtn(){
    return cy.get("div.inventory_details_desc_container > button")
   }
   static get backToProductsBtn(){
    return cy.get("button[name='back-to-products']")
   }
   static get removeBtn(){
    return cy.get("div.inventory_details_desc_container > button")
   }



}

export default InventoryItemPage;
