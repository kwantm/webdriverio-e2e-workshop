const chai = require('chai');
const expect = chai.expect;
 
describe('The page I fetch', () => {

    /**
     *  Change the url to reflect your full path to the basic-testing.html file
     */
    beforeEach(() => {
        browser.url('file://<YOUR-FULL-PATH-TO>/basic/src/basic-testing.html');
    });

    /**
     * Use a Chai expectation to test if the current title of the html document matches
     * the given title 'Webdriver IO - basic testing'
     * 
     * Steps:
     *   Find out how to get the title from the browser object with webdriver.io
     *      (webdriver browser commands: https://webdriver.io/docs/api/webdriver.html)
     *   Find out how to create a chai expectation to compare the titles
     *      (chai commands: https://www.chaijs.com/api/bdd/)
     */
    it('Should have the title: Webdriver IO - basic testing', () => {
        done(new Error("replace this line with your expectation"));
    });

});