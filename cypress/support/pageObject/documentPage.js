class documentPage{
    get createDocumentIcon(){
        return cy.get('img[title="Create Document..."]')
    }
}module.exports=new documentPage()