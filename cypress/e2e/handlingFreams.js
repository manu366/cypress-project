/// <reference types = "Cypress"/>
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
describe('handling frames', function () {
   // test case
   it('frames', function (){
      cy.visit("https://jqueryui.com/draggable/") // launch the application
      cy.frameLoaded('.demo-frame'); // load the frame
      cy.iframe().find("#draggable") //shift the focus to frame
      .then(function(txt){
         const txtframe = txt.text();
         expect(txtframe).to.contains('Drag me around'); //assertion to verify text
         cy.log(txtframe);
      })
   });
});
