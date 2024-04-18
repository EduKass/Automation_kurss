import { BasePage } from "./base.page";
 
export class TextboxPage extends BasePage {
  static get url() {
    return "/text-box";
  }
  static get fullnameTextField(){
    return cy.get("[placeholder='Full Name']");
  }
  static get emailTextField(){
    return cy.get("[placeholder='name@example.com']"); 
  }
  static get CurrentAddressTextField(){
    return cy.get("[placeholder='Current Address']");
  }
  static get permanentAddressTextField(){
    return cy.get("[id='permanentAddress']");
  }  
  static get checkName(){
    return cy.get("[id='name']");
  }  
  static get checkEmail(){
    return cy.get("[id='email']");
  }  
  static get checkCurrAdr(){
    return cy.get("p[id='currentAddress']");
  }  
  static get CheckPermAddr(){
    return cy.get("p[id='permanentAddress']");
  }  
  static get submit(){
    return cy.get("[id='submit']").click();
  }  
}