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
        return cy.get('div.inventory_item_label > a > div.inventory_item_name').eq(0)
    }
    static get firstProductPrice(){
        return cy.get('div.pricebar > div.inventory_item_price').eq(0)
    }




}

export default InventoryPage;
