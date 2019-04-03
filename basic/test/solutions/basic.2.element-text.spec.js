const chai = require('chai');
const expect = chai.expect;
 
describe('The page I fetch', () => {

    beforeEach(() => {
        browser.url('file:///Users/marcdekwant/Documents/customers/workspaces/ING/webdriverio-e2e-workshop/basic/src/basic-testing.html');
    });

    it('Should have gotten the h1 element with the text: A title in the body', () => {
        let h1 = $('h1');
        expect(h1.getText()).to.equal('A title in the body');
    });

});