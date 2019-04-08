const chai = require('chai');
const expect = chai.expect;
const path = require('path');

describe('The page I fetch', () => {

    const absPath = path.resolve('../webdriverio-e2e-workshop/basic/src/basic-testing.html');

    beforeEach(() => {
        browser.url('file://' + absPath);
    });

    it('Should have the right title', () => {
        expect(browser.getTitle()).to.equal('Webdriver IO - basic testing');
    });

});