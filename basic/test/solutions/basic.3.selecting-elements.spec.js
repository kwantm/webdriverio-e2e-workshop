const chai = require('chai');
const expect = chai.expect;
 
describe('The page I fetch', () => {

    beforeEach(() => {
        browser.url('file:///Users/marcdekwant/Documents/customers/workspaces/ING/webdriverio-e2e-workshop/basic/src/basic-testing.html');
    });

    it('Should have gotten All the H1 and A elements from the page', () => {
        const elements = $$('a,h1');
        expect(elements.length).to.equal(5);
        expect(elementText(elements)).to.have.members([ 'A title in the body', 'NPM', 'nodejs', 'chaijs','Lit Element']);
        expect(elementText(elements)).to.include('nodejs');
    });

    it('Should have gotten ONLY the A element from the DIV element from the page', () => {
        const elements = $$('div > a');
        expect(elements.length).to.equal(1);
        expect(elementText(elements)).to.have.members(['Lit Element']);
    });

    it('Should have gotten the custom "my-element" element from the page', () => {
        const selector = '#myCustomElement';
        const tagName = 'my-element';
        const element = $(selector);
        expect(browser.getElementTagName(element.ELEMENT)).to.equal(tagName);
        expect(element.getTagName()).to.equal(tagName);
        expect($(selector).isExisting()).to.be.true;
    });

    it('Should have gotten the h1 element by class from the page', () => {
        const element = $('.myClass');
        expect(element.isExisting()).to.be.true;
    });

    it('Should have gotten the A elements with target="_blank" from the page', () => {
        const selector = '[target=_blank]';
        const elements = $$(selector);
        expect(elements.length).to.equal(2);
        expect(elementText(elements)).to.have.members(['nodejs', 'chaijs']);
    });

});

const elementText = (elements) => elements.map((element) => element.getText());