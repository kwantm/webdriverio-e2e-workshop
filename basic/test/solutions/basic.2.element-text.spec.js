const chai = require('chai');
const expect = chai.expect;
const path = require('path');
 
describe('The page I fetch', () => {

    const absPath = path.resolve('../webdriverio-e2e-workshop/basic/src/basic-testing.html');

    beforeEach(() => {
        browser.url('file://' + absPath);
    });

    it('Should have gotten the h1 element with the text: A title in the body', () => {
        let h1 = $('h1');
        expect(h1.getText()).to.equal('A title in the body');
    });

});