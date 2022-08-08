///<reference types = "Cypress" />
const open=require('../support/pageObject/baseURL.js')
const loginPage=require('../support/pageObject/loginPage')
const homepage = require('../support/pageObject/homepage')
const campaignPage = require('../support/pageObject/campaignPage')
const campaignDetailPage = require('../support/pageObject/campaignDetailPage')
const campagainInformationPage = require('../support/pageObject/campaignInformationPage')
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
        loginPage.submitButton.should('be.visible').should('be.enabled').click()
        homepage.moreButton.should('be.visible').trigger("mouseover")
        homepage.campaignButton.should('be.visible').click()
        campaignPage.createCampaignIcon.should('be.visible').click()
        campaignDetailPage.campaignnameTextfield.should('be.visible').should('be.enabled').type("TYC")
        campaignDetailPage.groupRedioButton.should('be.visible').check()
        campaignDetailPage.assignedToGroupIdDropDown.should('be.visible').select("Support Group")
        campaignDetailPage.saveButton.should('be.visible').click()
        campagainInformationPage.campaignTextfield.then(function (name) {
            expect(name.text()).to.contains("TYC")            
        })
        homepage.adminstratorButton.should('be.visible').trigger("mouseover")
        homepage.signoutButton.should('be.visible').click()
    })
})