class ContactdetailPage{
    get fristNameDropDown(){
        return cy.get("select[name='salutationtype']")
    }
    get fristNameTextfield(){
        return cy.get("input[name='firstname']")
    }
    get lastNameTextfield(){
        return cy.get("input[name='lastname']")
    }
    get saveButton(){
        return cy.get("input[class='crmButton small save']")
    }
}module.exports=new ContactdetailPage()