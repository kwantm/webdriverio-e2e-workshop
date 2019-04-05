const chai = require('chai');
const expect = chai.expect;
const SimplePage = require('./pageobjects/simple.page');
const page = new SimplePage();
const ScreenshotHelper = require('../../../utils/screenshot.helper');
const scrHelper = new ScreenshotHelper();

describe('The page I fetch', () => {

    beforeEach(() => {
        page.open();
    });

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            scrHelper.save(browser, this.currentTest);
        }
    });

    it('Should have the right title', () => {
        expect(page.title()).to.equal('Webdriver IO - advanced testingg');
    });

});