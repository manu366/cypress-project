class open{
    get url(){
        return cy.visit("http://localhost:8888/")
    }
}module.exports=new open()