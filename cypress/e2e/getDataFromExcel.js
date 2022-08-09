///<reference types="Cypress" />
const open=require('../support/pageObject/baseURL.js')
const loginPage=require('../support/pageObject/loginPage')
describe('gatdatafromexcel',function(){
var username,password
    before(function(){
    cy.parseXlsx('cypress/fixtures/testdata/test data.xlsx').then((jsondata) =>{
        username=jsondata[0].data[1][0]
        password=jsondata[0].data[1][1]
    })
})
    it('createContact',function(){
        open.url
        loginPage.usernameTextfield.should('be.visible').should('be.enabled').type(username)
        loginPage.passwordTextfield.should('be.visible').should('be.enabled').type(password)
        loginPage.submitButton.should('be.visible').click()
    })
    
})
