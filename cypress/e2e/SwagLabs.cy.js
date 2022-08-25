import CartPage from "../pageObjects/Cart.page";
import CheckoutComplete from "../pageObjects/CheckoutComplete.page";
import CheckoutStepOnePage from "../pageObjects/CheckoutStepOne.page";
import CheckoutStepTwoPage from "../pageObjects/CheckoutStepTwo.page";
import InventoryPage from "../pageObjects/Inventory.page";
import InventoryItemPage from "../pageObjects/InventoryItem.page";
import LoginPage from "../pageObjects/Login.page";

describe("Swag Labs", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Scenario 1 - Login with locked_out_user", () => {
    LoginPage.usernameInput.type("locked_out_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    LoginPage.errorMsg.should("have.text", "Epic sadface: Sorry, this user has been locked out.")
  });
  it("Scenario 2 - Login with wrong password", () => {
    
    LoginPage.usernameInput.type("standard_user")
    LoginPage.passwordInput.type("wrong_pass")
    LoginPage.loginBtn.click()
    LoginPage.errorMsg.should("have.text", "Epic sadface: Username and password do not match any user in this service")
  });
  it("Scenario 3 - Validate item amount", () => {

    LoginPage.usernameInput.type("standard_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    InventoryPage.productImages.should("have.length", 6)
  });
  it("Scenario 4 - Sort items - Price high to low", () => {

    LoginPage.usernameInput.type("standard_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    InventoryPage.productSortBtn.select("Price (high to low)")
    InventoryPage.firstProductName.should("have.text","Sauce Labs Fleece Jacket")
    InventoryPage.firstProductPrice.should("have.text","$49.99")
  });
  it("Scenario 5 - Sort items - Price low to High", () => {
  
    LoginPage.usernameInput.type("standard_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    InventoryPage.productSortBtn.select("Price (low to high)")
    InventoryPage.firstProductName.should("have.text","Sauce Labs Onesie")
    InventoryPage.firstProductPrice.should("have.text","$7.99")
  });
  it("Scenario 6 - Sort items - Name (Z to A)", () => {
  
    LoginPage.usernameInput.type("standard_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    InventoryPage.productSortBtn.select("Name (Z to A)")
    InventoryPage.firstProductName.should("have.text","Test.allTheThings() T-Shirt (Red)")
  });
  it("Scenario 7 - Validate shopping cart badge amount", () => {
    
    LoginPage.usernameInput.type("standard_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    InventoryPage.getProductNameByIndex(2).click()
    InventoryItemPage.addToCartBtn.click()
    InventoryItemPage.shoppingCartBadge.should("have.text", "1")
    InventoryItemPage.backToProductsBtn.click()
    InventoryPage.getProductNameByIndex(1).click()
    InventoryItemPage.addToCartBtn.click()
    InventoryItemPage.shoppingCartBadge.should("have.text", "2")
  });
  it("Scenario 8 - Reset App State", () => {
    
    LoginPage.usernameInput.type("standard_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    InventoryPage.getProductNameByIndex(2).click()
    InventoryItemPage.addToCartBtn.click()
    InventoryItemPage.backToProductsBtn.click()
    InventoryPage.shoppingCartBadge.should("have.text", "1")
    InventoryPage.burgerMenuBtn.click()
    InventoryPage.resetAppStateBtn.click()
    InventoryPage.shoppingCartBadge.should("not.exist")
  });
  it("Scenario 9 - Validate shopping cart remove button functionality", () => {
    
    LoginPage.usernameInput.type("standard_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    InventoryPage.getProductNameByIndex(2).click()
    InventoryItemPage.addToCartBtn.click()
    InventoryItemPage.shoppingCartBadge.should("have.text", "1")
    InventoryItemPage.removeBtn.click()
    InventoryItemPage.shoppingCartBadge.should("not.exist")
  });
  it("Scenario 10 - Buy a T-shirt", () => {
   
    LoginPage.usernameInput.type("standard_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    InventoryPage.getProductNameByIndex(5).click()
    InventoryItemPage.addToCartBtn.click()
    InventoryItemPage.shoppingCartLink.click()
    CartPage.checkoutBtn.click()
    CheckoutStepOnePage.firstNameInput.type("John")
    CheckoutStepOnePage.lastNameInput.type("James")
    CheckoutStepOnePage.postalCodeInput.type("US-1011")
    CheckoutStepOnePage.continueBtn.click()
    CheckoutStepTwoPage.itemName.should("have.text", "Test.allTheThings() T-Shirt (Red)")
    CheckoutStepTwoPage.finishBtn.click()
    CheckoutComplete.completeHeader.should("have.text","THANK YOU FOR YOUR ORDER")
  });
});
