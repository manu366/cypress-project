class leadInformationPage{
    get fristnameTextfield(){
        return cy.get('td[id="mouseArea_First Name"]')
    }
}module.exports=new leadInformationPage()