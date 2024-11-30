import ForgotPasswordPage from "../../pom/forgotPassword.cy";

describe("Forgot Password", () => {
  it("Forgot Password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    ForgotPasswordPage.verifyForgotPassword().should("be.visible");
    ForgotPasswordPage.verifyForgotPassword().click();
    ForgotPasswordPage.inputUsername().type("Admin");
    ForgotPasswordPage.buttonResetPassword().click();
    ForgotPasswordPage.verifySuccessResetPassword().should(
      "be.visible",
      "have.text",
      "Reset Password link sent successfully"
    );
  });
});
