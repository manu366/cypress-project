/// <reference types='cypress' />
describe('handling child window', function () {
    it('child window', function (){
       cy.visit("http://localhost:8888/");
       cy.get(':nth-child(1) > a').then(function(l){
          const txt = l.prop('href');
          cy.log(txt);
          cy.visit(txt);
       })
    });
 });
 