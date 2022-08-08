class contactPage{
    get createContactIcon(){
        return cy.get("img[title='Create Contact...']")
    }
}module.exports=new contactPage()