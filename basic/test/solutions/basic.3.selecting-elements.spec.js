const chai = require('chai');
const expect = chai.expect;
 
describe('The page I fetch', () => {

    beforeEach(() => {
        browser.url('file:///Users/marcdekwant/Documents/customers/workspaces/ING/webdriverio-e2e-workshop/basic/src/basic-testing.html');
    });

    it('Should have gotten All the H1 and A elements from the page', () => {
        let elements = $$('a,h1');
        expect(elementText(elements)).to.include.members([ 'A title in the body', 'NPM', 'nodejs', 'chaijs' ]);
        expect(elementText(elements)).to.include('nodejs');
    });

});

const elementText = (elements) => elements.map((element) => element.getText());