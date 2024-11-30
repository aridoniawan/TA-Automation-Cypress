export default class DirectoryFormPage {
  static buttonDirectory() {
    return cy
      .get("span.oxd-text.oxd-text--span.oxd-main-menu-item--name")
      .contains("Directory");
  }
  static verifyDirectory() {
    return cy.get("h6").contains("Directory");
  }

  static insertName() {
    return cy.get('input[placeholder="Type for hints..."]');
  }

  static clickName() {
    return cy.get("div.oxd-autocomplete-dropdown").contains("Rebecca");
  }

  static select() {
    return cy.get("div.oxd-select-text-input").contains("-- Select --");
  }

  static selectTitle() {
    return cy
      .get("div.oxd-select-dropdown[role='listbox']")
      .contains("QA Engineer");
  }

  static selectLocation() {
    return cy
      .get("div.oxd-select-dropdown[role='listbox']")
      .contains("Texas R&D");
  }

  static searchButton() {
    return cy
      .get("button.orangehrm-left-space[type='submit']")
      .contains(" Search ");
  }

  static verifySearch() {
    return cy.get("p.orangehrm-directory-card-header").contains("Rebecca");
  }
}
