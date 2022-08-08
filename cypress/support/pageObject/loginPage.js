class loginPage{
    get usernameTextfield(){
        return cy.get("input[type=text]")
    }
    get passwordTextfield(){
        return cy.get("input[type=password]")
    }
    get submitButton(){
        return cy.get('#submitButton')
    }
}module.exports=new loginPage()