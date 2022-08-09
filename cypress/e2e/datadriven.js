///<reference types="Cypress" />
const open=require('../support/pageObject/baseURL')
const loginPage=require('../support/pageObject/loginPage')
const read = require('xlsx')

describe('vtiger',function () {
    it('login to app',function () {
        
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/fixtures/test data.xlsx")
            .then(async(Text)=>{
                const xlsx=await read(Text)
                console.log(xlsx);
            })



        open.url
        // loginPage.usernameTextfield.type(data[0]["username"])
        // loginPage.passwordTextfield.type(data[0]["password"])
        loginPage.submitButton.click()
    })
})