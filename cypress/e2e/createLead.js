///<reference types = "Cypress" />
const open=require('../support/pageObject/baseURL.js')
const loginPage=require('../support/pageObject/loginPage')
const homepage = require('../support/pageObject/homepage')
const leadPage = require('../support/pageObject/leadPage')
const leadDetailPage = require('../support/pageObject/leadDetailPage')
const leadInformationPage = require('../support/pageObject/leadInformationPage')
describe('lead',()=>{
    var data
    before(function () {
        cy.fixture('commondata').then(function (jsonData) {
          data=jsonData  
        })
    })
    it('crateLead',()=>{
        open.url
        loginPage.usernameTextfield.should('be.visible').should('be.enabled').type(data.username)
        loginPage.passwordTextfield.should('be.visible').should('be.enabled').type(data.password)
        loginPage.submitButton.should('be.visible').click()
        homepage.leadButton.should('be.visible').click()
        leadPage.createLeadIcon.should('be.visible').click()
        leadDetailPage.fristNameDropDown.should('be.visible').select("Mr.")
        leadDetailPage.fristNameTextfield.should('be.visible').should('be.enabled').type("manohara")
        leadDetailPage.lastNameTextfield.should('be.visible').should('be.enabled').type("reddy")
        leadDetailPage.companyTextfield.should('be.visible').should('be.enabled').type("TYC")
        leadDetailPage.leadsourceDropDown.should('be.visible').select("Employee")
        leadDetailPage.industryDropDown.should('be.visible').select("Banking")
        leadDetailPage.saveButton.should('be.visible').click()
        leadInformationPage.fristnameTextfield.should('be.visible').then(function(name){
            expect(name.text()).to.contains('manohara')
            
        })
        homepage.adminstratorButton.should('be.visible').trigger("mouseover")
        homepage.signoutButton.should('be.visible').click()
    })
})