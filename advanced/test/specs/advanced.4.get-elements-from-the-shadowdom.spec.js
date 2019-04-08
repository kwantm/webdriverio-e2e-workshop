const chai = require('chai');
const expect = chai.expect;
const SimplePage = require('./pageobjects/simple.page');
const page = new SimplePage();
const path = require('path');


describe('The page I fetch', () => {

    const absPath = path.resolve('../webdriverio-e2e-workshop/advanced/src/advanced-testing.html');

    beforeEach(() => {
        page.open();
    });

    /**
    * Fetch the 5 articles (component: my-article) from the custom element my-element
    *  
    * Steps:
    *    Create a selector that selects the my-element component
    *    Create a selector that selects the ul from within my-element
    *    Create a selector that selects all my-article elements from within my-element
    *    Create a expectation to test if you have selected a of the 5 elements
    * 
    * run cmd: ./node_modules/.bin/wdio ./advanced/wdio.conf.js --spec ./advanced/test/specs/advanced.4.get-elements-from-the-shadowdom.spec.js
    * 
    */
    it('Should have found 5 articles', () => {
        done(new Error("replace this line with your selectors and expectation"));
    });

    /**
     * Fetch the first article (component: my-article) from the custom element my-element
     *  
     * Steps:
     *    Create a selector that selects the my-element component
     *    Create a selector that selects the ul from within my-element
     *    Create a selector that selects the first my-article element (not just element[0], but a true selector)
     *    Create an expectation to compare the title of the first article and match [title 1]
     * 
     * run cmd: ./node_modules/.bin/wdio ./advanced/wdio.conf.js --spec ./advanced/test/specs/advanced.4.get-elements-from-the-shadowdom.spec.js
     * 
     */
    it('Should have a first article with title title 1', () => {
        done(new Error("replace this line with your selectors and expectation"));
    });

});