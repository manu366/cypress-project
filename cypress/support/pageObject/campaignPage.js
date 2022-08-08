class campaignPage{
    get createCampaignIcon(){
        return cy.get('img[title="Create Campaign..."]')
    }
}module.exports=new campaignPage()