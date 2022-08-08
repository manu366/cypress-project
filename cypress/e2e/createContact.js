///<reference types = "Cypress" />
const open=require('../support/pageObject/baseURL.js')
const loginPage=require('../support/pageObject/loginPage')
const homepage = require('../support/pageObject/homepage')
const contactPage = require('../support/pageObject/contactPage')
const contactDetailPage = require('../support/pageObject/contactDetailPage')
const contactInformationPage = require('../support/pageObject/contactInformationPage')
describe('contact',()=>{
  var data
  before(function(){
    cy.fixture('commondata').then(function(jsonData){
       data = jsonData
    })
  })
  it('createContact',()=>{
    open.url
    loginPage.usernameTextfield.should('be.visible').should('be.enabled').type(data.username)
    loginPage.passwordTextfield.should('be.visible').should('be.enabled').type(data.password)
    loginPage.submitButton.should('be.visible').click()
    homepage.contactButton.should('be.visible').click()
    contactPage.createContactIcon.should('be.visible').click()
    contactDetailPage.fristNameDropDown.should('be.visible').select("Mr.")
    contactDetailPage.fristNameTextfield.should('be.visible').should('be.enabled').type("manohara")
    contactDetailPage.lastNameTextfield.should('be.visible').should('be.enabled').type("reddy")
    contactDetailPage.saveButton.should('be.visible').click()
    contactInformationPage.lastnameTextfield.then(function (lastname) {
      expect(lastname.text()).to.contains('reddy')
    })
    homepage.adminstratorButton.should('be.visible').trigger("mouseover")
    homepage.signoutButton.should('be.visible').click()
  })
})