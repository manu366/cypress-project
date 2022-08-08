class leadPage{
    get createLeadIcon(){
        return cy.get("img[title='Create Lead...']")
    }
}module.exports=new leadPage()