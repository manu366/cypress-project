///<reference types = "Cypress" />
const open=require('../support/pageObject/baseURL.js')
const loginPage=require('../support/pageObject/loginPage')
const homepage = require('../support/pageObject/homepage')
const documentPage = require('../support/pageObject/documentPage')
const documentDetailPage = require('../support/pageObject/documentDetailPage')
const documentInformationPage = require('../support/pageObject/documentInformationPage')
describe('document',()=>{
    var data
    before(function(){
      cy.fixture('commondata').then(function(jsonData){
         data = jsonData
      })
    })
    it('createDocument',()=>{
        open.url
        loginPage.usernameTextfield.should('be.visible').should('be.enabled').type(data.username)
        loginPage.passwordTextfield.should('be.visible').should('be.enabled').type(data.password)
        loginPage.submitButton.should('be.visible').click()
        homepage.documentButton.should('be.visible').click()
        documentPage.createDocumentIcon.should('be.visible').click()
        documentDetailPage.titleTextfield.should('be.visible').should('be.enabled').type("resume")
        documentDetailPage.sourceIcon.should('be.visible').click()
        documentDetailPage.textareafield.should('be.visible').should('be.enabled').type('manohara')
        documentDetailPage.sourceIcon.should('be.visible').click()
        documentDetailPage.filenameButton.should('be.visible').selectFile("C:/Users/user/Desktop/manohara resume.docx")
        documentDetailPage.saveButton.eq(1).should('be.visible').click()
        documentInformationPage.titleTextfield .then((title)=>{
          expect(title.text()).to.contains('resume')
        })
        homepage.adminstratorButton.should('be.visible').trigger("mouseover")
        homepage.signoutButton.should('be.visible').click()
    })
})