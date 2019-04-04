const chai = require('chai');
const expect = chai.expect;
 
describe('The page I fetch', () => {

    /**
     * The test should only show cmdline output and no browser window if the settings in the wdio.conf.js in de advanced/src folder
     * are set correctly.
     * 
     * In the capabilities array add in the chromeOptions:
        
        args: ['--headless', '--disable-gpu', '--window-size=1280,800']

     */

    beforeEach(() => {
        browser.url('file:///Users/marcdekwant/Documents/customers/workspaces/ING/webdriverio-e2e-workshop/advanced/src/advanced-testing.html');
    });

    it('Should have the right title', () => {
        expect(browser.getTitle()).to.equal('Webdriver IO - advanced testing');
    });

});