class campagainInformationPage{
    get campaignTextfield(){
        return cy.get('td[id="mouseArea_Campaign Name"]')
    }
}module.exports=new campagainInformationPage()