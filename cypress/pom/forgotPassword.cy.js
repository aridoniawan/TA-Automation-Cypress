export default class ForgotPasswordPage {
  static verifyForgotPassword() {
    return cy.get("p.oxd-text.oxd-text--p.orangehrm-login-forgot-header");
  }
  static inputUsername() {
    return cy.get("input[name='username']");
  }
  static buttonResetPassword() {
    return cy.get(
      "button.orangehrm-forgot-password-button--reset[type='submit']"
    );
  }

  static verifySuccessResetPassword() {
    return cy.get("h6.orangehrm-forgot-password-title");
  }
}
