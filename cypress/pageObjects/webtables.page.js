import { BasePage } from "./base.page";

export class WebTablesPage extends BasePage{
  static get url() {
    return "/webtables";
  }

  static get addButton() {
    return cy.get("#addNewRecordButton");;
  }
  static get firstNameTextField() {
    return cy.get("#firstName");
  }

  static get lastNameTextField() {
    return cy.get("#lastName");
  }

  static get emailTextField() {
    return cy.get("#userEmail");
  }

  static get ageTextField() {
    return cy.get("#age");
  }

  static get salaryTextField() {
    return cy.get("#salary");
  }

  static get departmentTextField() {
    return cy.get("#department");
  }

  static get submitButton() {
    return cy.get("#submit");
  }
  static get tableOutput() {
    return cy.get(".rt-td");
  }

  static get validateRow(){
    return cy.get(":nth-child(4).rt-td");
  }
  static get rows(){
    return cy.get("[role='row']");
  }

  static get deleteRow3(){
    return cy.get("[id='delete-record-3']");
  }
  static get deleteRow1(){
    return cy.get("[id='delete-record-1']");
  }
  static get deleteRow2(){
    return cy.get("[id='delete-record-2']");
  }
  static deleteRowBasedOnOption(opt) {
    return this.rows.contains(opt).parent().find("[title='Delete']");
  }
  static get noRowsMessage(){
    return cy.get("[class ='row']");
  }
}