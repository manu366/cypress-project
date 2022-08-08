class HomePage{
    get contactButton(){
        return cy.contains("Contacts")
    }
    get leadButton(){
        return cy.contains('Leads')
    }
    get moreButton(){
        return cy.contains("More")
    }
    get campaignButton(){
        return cy.contains('Campaigns')
    }
    get documentButton(){
        return cy.contains('Documents')
    }
    get adminstratorButton(){
        return cy.get("img[src='themes/softed/images/user.PNG']")
    }
    get signoutButton(){
        return cy.contains("Sign Out")
    }
}module.exports=new HomePage()