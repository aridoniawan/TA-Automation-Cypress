export default class LoginPage {
  static verifyLogin() {
    return cy.get("h5").contains("Login");
  }

  static inputUsername() {
    return cy.get("input[name='username']");
  }

  static inputPassword() {
    return cy.get("input[name='password']");
  }

  static buttonLogin() {
    return cy.get("button[type='submit']");
  }

  static verifyLoginSuccess() {
    return cy.get("h6").contains("Dashboard");
  }

}
