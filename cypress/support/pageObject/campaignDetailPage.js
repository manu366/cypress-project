class campaignDetailPage{
    get campaignnameTextfield(){
        return cy.get('input[name="campaignname"]')
    }
    get groupRedioButton(){
        return cy.get('input[value="T"]')
    }
    get assignedToGroupIdDropDown(){
        return cy.get('select[name="assigned_group_id"]')
    }
    get saveButton(){
        return cy.get('input[class="crmButton small save"]')
    }
}module.exports=new campaignDetailPage()