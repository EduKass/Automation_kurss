import { BasePage } from "./base.page";

export class RadiobuttonsPage extends BasePage{
    static get url() {
        return "/radio-button";
      }

    static get yesRadioButton(){
        return cy.get("[for='yesRadio']");
    }  
    static get resultOutput(){
        return cy.get("[class='mt-3']");
    } 
    static get radioButtons(){
        return cy.get(".custom-radio");
    } 
    static get textSuccess() {
        return cy.get(".text-success");
    }   
    static findBtnLabelByName(name) {
        return cy.get(".custom-radio>label").contains(name);
    }
}
