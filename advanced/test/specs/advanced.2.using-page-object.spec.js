const chai = require('chai');
const expect = chai.expect;

/**
 * MAKE THE TEST WORK with the Page Object Pattern
 * In the 'beforeEach' and 'it' you see the usage of the page object.
 * This is a custom class according to the Page Object Pattern.
 * 
 * Steps:
 *     Implement the Page Object and import it using require
 *     add 2 methods to it:
 *        title() -> returns the title of the current loaded html in the browser
 *        open() -> open a html file in the browser.
 * 
 * const SimplePage = require('./pageobjects/simple.page');
 * const page = new SimplePage();
 * 
 * run cmd: ./node_modules/.bin/wdio ./advanced/wdio.conf.js --spec ./advanced/test/specs/advanced.2.using-page-object.spec.js
 * 
 */
describe('The page I fetch', () => {

    beforeEach(() => {
        page.open();
    });

    it('Should have the right title', () => {
        expect(page.title()).to.equal('Webdriver IO - advanced testing');
    });

});