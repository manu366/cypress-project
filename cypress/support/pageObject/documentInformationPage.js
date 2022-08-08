class documentInformationPage{
    get titleTextfield(){
        return cy.get('td[id="mouseArea_Title"]')
    }
}module.exports=new documentInformationPage()