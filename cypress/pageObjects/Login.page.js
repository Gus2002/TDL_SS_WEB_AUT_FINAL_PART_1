import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "/";
  }

  static get usernameInput() {
    return cy.get('[data-test="username"]')
  }
  static get passwordInput(){
    return cy.get('[data-test="password"]')
  }
  static get loginBtn(){
    return cy.get('[data-test="login-button"]')
  }
  static get errorMsg(){
    return cy.get('[data-test="error"]')
  }
}

export default LoginPage;
