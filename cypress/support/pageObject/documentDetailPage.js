class documentDetailPage{
    get titleTextfield(){
        return cy.get('[name="notes_title"]')
    }
    get sourceIcon(){
        return cy.get('[id="cke_26_label"]')
    }
    get textareafield(){
        return cy.get('[id="cke_contents_notecontent"] textarea')
    }
    get filenameButton(){
        return cy.get('[id="filename_I__"]')
    }
    get saveButton(){
        return cy.get('td[colspan="4"] div input[class="crmbutton small save"]')
    }
}module.exports=new documentDetailPage()