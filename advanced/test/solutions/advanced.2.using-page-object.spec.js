const chai = require('chai');
const expect = chai.expect;
const SimplePage = require('./pageobjects/simple.page');
const page = new SimplePage();

describe('The page I fetch', () => {

    beforeEach(() => {
        page.open();
    });

    it('Should have the right title', () => {
        expect(page.title()).to.equal('Webdriver IO - advanced testing');
    });

});