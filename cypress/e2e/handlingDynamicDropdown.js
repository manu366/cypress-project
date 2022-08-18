/// <reference types='cypress' />
describe('handling dynamic dropdown',function () {
    it('dynamic dropdown',function () {
        cy.visit('https://www.tutorialspoint.com/videotutorials/index.php')
        cy.get("#search-strings").type("Java");
        cy.wait(3000)
        cy.get('.clsHeadQuestion'). should('have.length',13);
        cy.get('.clsHeadQuestion').each(($el, index, $list) => {
            if($el.text() ==="Java"){
               $el.click();
            }
         })
         cy.get('#search-strings').should('have.value','Java');
    })
})