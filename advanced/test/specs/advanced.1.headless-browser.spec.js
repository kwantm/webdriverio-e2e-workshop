const chai = require('chai');
const expect = chai.expect;
 
describe('The page I fetch', () => {

    beforeEach(() => {
        browser.url('file:///Users/marcdekwant/Documents/customers/workspaces/ING/webdriverio-e2e-workshop/advanced/src/advanced-testing.html');
    });

    /**
     * In this first assignment you must configure webdriver.io in such a manner that the browser window will not be shown (headless)
     * while running the test.
     * 
     * Tip: The options should be passed as arguments to Chrome in your wdio.conf.js
     *      (chrome argument options: https://peter.sh/experiments/chromium-command-line-switches/)
     * 
     * run cmd: ./node_modules/.bin/wdio ./advanced/wdio.conf.js --spec ./advanced/test/specs/advanced.1.headless-browser.spec.js
     */

    it('Should have the right title and the test should run headless (not showing a browser window', () => {
        expect(browser.getTitle()).to.equal('Webdriver IO - advanced testing');
    });

});