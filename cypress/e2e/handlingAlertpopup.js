describe('handling alert popup', function () {
    // test case
    it('alert popup', function (){
       cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");// launch the url
       cy.get('input[type="submit"]').click();// click on submit button to produce the alert pop up
       cy.on('window:alert',(txt)=>{  // firing window: alert event with on() method
          expect(txt).to.contains('Your full name cannot be blank.');//Mocha assertions
       })
    });
 });