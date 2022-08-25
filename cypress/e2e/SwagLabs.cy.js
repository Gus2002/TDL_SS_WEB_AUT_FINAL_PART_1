import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";

describe("Swag Labs", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Scenario 1 - Login with locked_out_user", () => {
    // - Enter username - “locked_out_user”
    // - Enter password
    // - Validate that user sees error - “Epic sadface: Sorry, this user has been locked out.”
    LoginPage.usernameInput.type("locked_out_user")
    LoginPage.passwordInput.type("secret_sauce")
    LoginPage.loginBtn.click()
    LoginPage.errorMsg.should("have.text", "Epic sadface: Sorry, this user has been locked out.")
  });
});
