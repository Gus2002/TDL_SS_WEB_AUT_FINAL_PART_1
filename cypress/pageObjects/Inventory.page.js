import BasePage from "./Base.page";

class InventoryPage extends BasePage {
    static get url() {
        return "/inventory";
      }
    static get productImages(){
        return cy.get(".inventory_item_img > a > img")
    }
    static get productSortBtn(){
        return cy.get('[data-test="product_sort_container"]')
    }
    static get firstProductName(){
        return cy.get('#item_5_title_link > .inventory_item_name')
    }
    static get firstProductPrice(){
        return cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price')
    }




}

export default InventoryPage;
