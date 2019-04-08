const chai = require('chai');
const expect = chai.expect;
const SimplePage = require('./pageobjects/simple.page');
const page = new SimplePage();
const path = require('path');

/**
 * The test fails. Create a function that saves a screenshot.
 *  
 * Steps:
 *   create a function that saves a screenshot in:
 *        <folder for current test>/screenshots/<name of the it test>/
 *   create a unique name for the screenshot. This way the screenshot should not be overwritten when the test runs again
 * 
 * run cmd: ./node_modules/.bin/wdio ./advanced/wdio.conf.js --spec ./advanced/test/specs/advanced.3.save-screenshot-on-failure.spec.js
 * 
 */
describe('The page I fetch', () => {

    const absPath = path.resolve('../webdriverio-e2e-workshop/advanced/src/advanced-testing.html');

    beforeEach(() => {
        page.open();
    });

    it('Should have the right title', () => {
        // this expectation will fail
        expect(page.title()).to.equal('Webdriver IO - advanced testingg');
    });

});