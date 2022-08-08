class contactInformationPage{
    get lastnameTextfield(){
        return cy.get('td[id="mouseArea_Last Name"]')
    }
}module.exports=new contactInformationPage()