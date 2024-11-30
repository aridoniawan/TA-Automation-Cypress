import LoginPage from "../../pom/login.cy.js";
import DirectoryFormPage from "../../pom/directoryForm.cy.js";

describe("Directory Form", () => {
  it("Directory Form", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    LoginPage.inputUsername().type("Admin");
    LoginPage.inputPassword().type("admin123");
    cy.intercept("GET", "**/action-summary").as("actionSummary");
    LoginPage.buttonLogin().click();
    cy.wait("@actionSummary");
    LoginPage.verifyLoginSuccess().should("be.visible");
    cy.intercept("GET", "**/employees?limit=14&offset=0").as("directory");
    DirectoryFormPage.buttonDirectory().click();
    cy.wait("@directory");
    DirectoryFormPage.verifyDirectory().should("be.visible");
    DirectoryFormPage.insertName().type("Rebecca");
    cy.intercept("GET", "**/employees?nameOrId=Rebecca").as("searchName");
    DirectoryFormPage.clickName().click();
    cy.wait("@searchName");
    DirectoryFormPage.select().click();
    DirectoryFormPage.selectTitle().click();
    DirectoryFormPage.select().click();
    DirectoryFormPage.selectLocation().click();
    // cy.intercept("GET", "**/employees?limit=14&offset=0").as("searchDirectory");
    DirectoryFormPage.searchButton().click();
    // cy.wait("@searchDirectory");
  });
});
