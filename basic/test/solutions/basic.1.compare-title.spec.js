const chai = require('chai');
const expect = chai.expect;
 
describe('The page I fetch', () => {

    beforeEach(() => {
        browser.url('file:///Users/marcdekwant/Documents/customers/workspaces/ING/webdriverio-e2e-workshop/basic/src/basic-testing.html');
    });

    it('Should have the right title', () => {
        expect(browser.getTitle()).to.equal('Webdriver IO - basic testing');
    });

});