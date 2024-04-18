const { TextboxPage } = require("../../pageObjects/textbox.page");
const { CheckboxPage } = require("../../pageObjects/checkbox.page");
const { RadiobuttonsPage } = require("../../pageObjects/radiobuttons.page");
const { WebTablesPage } = require("../../pageObjects/webtables.page");
describe("Demoqa", () => {
    context("Text Box", () => {
        beforeEach(() => {
            TextboxPage.visit();
        });
      it("Enter text field values - positive", () => {
        TextboxPage.fullnameTextField.type("john");
        TextboxPage.CurrentAddressTextField.type("ir");
        TextboxPage.emailTextField.type("eduards@kass.lv");
        TextboxPage.permanentAddressTextField.type("nav");
        TextboxPage.submit.click();
        TextboxPage.checkName.should("have.text", "Name:john");
        TextboxPage.checkEmail.should("have.text", "Email:eduards@kass.lv");
        TextboxPage.checkCurrAdr.should(
            "contain.text",
            "Current Address :ir"
        );
        TextboxPage.CheckPermAddr.should(
            "contain.text",
            "Permananet Address :nav"
        );
        //cy.get("[placeholder='Full Name']").type("Eduards");
        //cy.get("[placeholder='name@example.com']").type("yastina@gmail.com");
        //cy.get("[placeholder='Current Address']").type("es isteniba nezinu draugi ;(");
        //cy.get("[id='permanentAddress']").type("TAGAD ES UZZINAJU ;_(");
        //cy.get("[id='submit']").click();
        //cy.get("[id='name']").should("have.text", "Name:Eduards");
        //cy.get("[id='email']").should("have.text", "Email:yastina@gmail.com");
        //cy.get("p[id='currentAddress']").should(
        //"contain.text",
        //"Current Address :es isteniba nezinu draugi ;("
        //);
        //cy.get("p[id='permanentAddress']").should(
        //"contain.text",
        //"Permananet Address :TAGAD ES UZZINAJU ;_("
        //);
      });
      it("Enter text field values - negative", () => {
        // set email in incorrect format
        // click submit button
        // validate that red border appears
        TextboxPage.emailTextField.should("not.have.class", "field-error");
        TextboxPage.emailTextField.type("aaa@bbb");
        TextboxPage.submit.click();
        TextboxPage.emailTextField.should("have.class", "field-error");
      });
    });
    
    context("Check boxes", () => {
        //
        beforeEach(() => {
            CheckboxPage.visit();
        });

        it("Check the checkboces", () => {
            CheckboxPage.expandAllButton.click();
            CheckboxPage.checkboxes.contains("Notes").click();
            CheckboxPage.checkboxes.contains("Angular").click();
            CheckboxPage.checkboxes.contains("Private").click();
            CheckboxPage.checkboxes.contains("Excel File.doc").click();
            CheckboxPage.checkedCheckboxesOutput.should(
                "have.text",
                "You have selected :notesangularprivateexcelFile"
            )
            CheckboxPage.textSuccess.should("contain.text", "notes");
            CheckboxPage.textSuccess.should("contain.text", "angular");
            CheckboxPage.textSuccess.should("contain.text", "private");
            CheckboxPage.textSuccess.should("contain.text", "excelFile");
        });
    });

    context("radio buttons", () => {
        //
        beforeEach(() => {
            RadiobuttonsPage.visit();
        });

        it("Click radio buttons - yes", () => {
            //Click Yes Radio Button
            RadiobuttonsPage.yesRadioButton.click();
            RadiobuttonsPage.resultOutput.should("have.text", "You have selected Yes"); 
            RadiobuttonsPage.radioButtons.contains("Yes").click();
            
        });

        it("Click radio buttons - impressive", () => {
            RadiobuttonsPage.findBtnLabelByName("Impressive").click();
            RadiobuttonsPage.textSuccess.should("contain.text", "Impressive");
        });

        it("Radio button is not clickable", () => {
            RadiobuttonsPage.findBtnLabelByName("No").should("have.class", "disabled");
        });
    });

    context("web tables", () => {
        
        beforeEach(() => {
           WebTablesPage.visit();
        });

        it("create new item", () => {
            WebTablesPage.addButton.click();
            WebTablesPage.firstNameTextField.type("John");
            WebTablesPage.lastNameTextField.type("Doe");
            WebTablesPage.emailTextField.type("email@gmail.com");
            WebTablesPage.ageTextField.type("25");
            WebTablesPage.salaryTextField.type("10000");
            WebTablesPage.departmentTextField.type("IT");
            WebTablesPage.submitButton.click(); 
            WebTablesPage.tableOutput.should("contain.text", "John");
            WebTablesPage.tableOutput.should("contain.text", "Doe");
            WebTablesPage.tableOutput.should("contain.text", "email@gmail.com");
            WebTablesPage.tableOutput.should("contain.text", "25");
            WebTablesPage.tableOutput.should("contain.text", "10000");
            WebTablesPage.tableOutput.should("contain.text", "IT");
            //WebTablesPage.validateRow.should("contain.text", "25");
            WebTablesPage.rows.should("contain.text", "email@gmail.com")
            
        });

        it.only("Delete all items", () => {
            WebTablesPage.deleteRowBasedOnOption("Cierra").click();
            WebTablesPage.deleteRowBasedOnOption("Alden").click();
            WebTablesPage.deleteRowBasedOnOption("Kierra").click();
            WebTablesPage.noRowsMessage.should("be.visible").and("contain.text", "No rows found");
        });
   });

  });
   