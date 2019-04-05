const chai = require('chai');
const expect = chai.expect;
 
describe('The page I fetch', () => {

    /**
     *  Change the url to reflect your full path to the basic-testing.html file
     */
    beforeEach(() => {
        browser.url('file://<YOUR-FULL-PATH-TO>/basic/src/basic-testing.html');
    });

    /**
     * Use a Chai expectation to test if the h1 element in the body of the html document matches
     * the given title 'A title in the body'
     * 
     * Steps:
     *   Find out how to get the h1 element from the body with webdriver.io
     *      (webdriver browser commands: https://webdriver.io/docs/api/webdriver.html)
     *   Find out how to create a chai expectation to compare the text of the h1 element
     *      (chai commands: https://www.chaijs.com/api/bdd/)
     * run cmd: ./node_modules/.bin/wdio ./basic/wdio.conf.js --spec ./basic/test/specs/basic.2.element-text.spec.js
     *
     */
    it('Should have the h1 element in the body element with the text: A title in the body', () => {
        done(new Error("replace this line with your expectation"));
    });

});