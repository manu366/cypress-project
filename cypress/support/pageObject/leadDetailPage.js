class leadDetailPage{
    get fristNameDropDown(){
        return cy.get("select[name='salutationtype']")
    }
    get fristNameTextfield(){
        return cy.get("input[name='firstname']")
    }
    get lastNameTextfield(){
        return cy.get("input[name='lastname']")
    }
    get companyTextfield(){
        return cy.get("input[name='company']")
    }
    get leadsourceDropDown(){
        return cy.get("select[name='leadsource']")
    }
    get industryDropDown(){
        return cy.get("select[name='industry']")
    }
    get saveButton(){
        return cy.get("input[class='crmButton small save']")
    }
}module.exports=new leadDetailPage()