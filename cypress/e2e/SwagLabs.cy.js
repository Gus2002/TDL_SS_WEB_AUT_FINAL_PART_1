import HomePage from "../pageObjects/Home.page";
import InventoryPage from "../pageObjects/Inventory.page";
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
    // - Log into page with standard user credentials
    //         - Set filter to Price low to high
    //         - Validate that first item is “Sauce Labs Onesie”
    //         - Validate that the first item costs “$7.99”

    LoginPage.usernameInput.type("standard_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    InventoryPage.productSortBtn.select("Price (low to high)")
    InventoryPage.firstProductName.should("have.text","Sauce Labs Onesie")
    InventoryPage.firstProductPrice.should("have.text","$7.99")
  });
  it.only("Scenario 6 - Sort items - Name (Z to A)", () => {
    // - Log into page with standard user credentials
    //         - Set filter to Name (Z to A)
    //         - Validate that first item is “Test.allTheThings() T-Shirt (Red)”


    LoginPage.usernameInput.type("standard_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    InventoryPage.productSortBtn.select("Name (Z to A)")
    InventoryPage.firstProductName.should("have.text","Test.allTheThings() T-Shirt (Red)")
  });
});
