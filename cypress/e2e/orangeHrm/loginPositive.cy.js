/// <reference types="cypress" />
import LoginPage from "../../pom/login.cy.js";

describe("Login", () => {
  it("Login with valid credentials", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    LoginPage.inputUsername().type("Admin");
    LoginPage.inputPassword().type("admin123");
    cy.intercept("GET", "**/action-summary").as("actionSummary");
    LoginPage.buttonLogin().click();
    cy.wait("@actionSummary");
    LoginPage.verifyLoginSuccess().should("be.visible");
  });
});

