import LoginPage from "../../pom/login.cy.js";

describe("negativeLogin", () => {
  it("Login with invalid credentials", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    LoginPage.verifyLogin().should("have.text", "Login");
    LoginPage.inputUsername().type("Admin");
    LoginPage.inputPassword().type("passwordSalah"); //wrong password
    LoginPage.buttonLogin().click();
    LoginPage.verifyLoginFailed().should("be.visible");
  });
});
