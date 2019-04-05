const chai = require('chai');
const expect = chai.expect;
 
describe('The page I fetch', () => {

    /**
     *  Change the url to reflect your full path to the basic-testing.html file
     * 
     *      
     * run cmd: ./node_modules/.bin/wdio ./basic/wdio.conf.js --spec ./basic/test/specs/basic.3.selecting-elements.spec.js
     *
     */
    beforeEach(() => {
        browser.url('file://<YOUR-FULL-PATH-TO>/basic/src/basic-testing.html');
    });

   /**
     * Use a Chai expectation to test if the list of (A and H1) elements in the body of the html document matches
     * the given array of texts of the elements [ 'A title in the body', 'NPM', 'nodejs', 'chaijs', 'Lit Element']
     * 
     * Note: Ignore any A or H1 elements in the shadowdom(s)
     * 
     * Steps:
     *   Find out how to get the A and H1 elements from the body with webdriver.io
     *      (webdriver browser commands: https://webdriver.io/docs/api/webdriver.html)
     *   Find out how to create a chai expectation to compare 2 arrays (do not need to be in the same order)
     *      (chai commands: https://www.chaijs.com/api/bdd/)
     *   Find out how to create a chai expectation to test if a given string is present in the elements
     *      (chai commands: https://www.chaijs.com/api/bdd/)
     * 
     */
    it('Should have gotten All the H1 and A elements from the page', () => {
        done(new Error("replace this line with your selectors and expectation"));
    });

   /**
     * Use a Chai expectation to test if the list of (A) elements in the BODY -> DIV of the html document matches
     * the given array of texts of the elements ['Lit Element'] and not the elements [ 'A title in the body', 'NPM', 'nodejs', 'chaijs']
     * 
     * Steps:
     *   Find out how to get the A elements from the body -> div with webdriver.io
     *      (webdriver browser commands: https://webdriver.io/docs/api/webdriver.html)
     *   Find out how to create a chai expectation to check if the elements array contains ONLY the single value ['Lit Element']
     *      (chai commands: https://www.chaijs.com/api/bdd/)
     * 
     */
    it('Should have gotten ONLY the A element from the DIV element from the page', () => {
        done(new Error("replace this line with your selectors and expectation"));
    });

   /**
     * Use 3 Chai expectations to test if the custom element 'my-element' exists in 3 different webdriverio expressions.
     * 
     * Steps:
     *   Find out how to get the custom my-element element from the body with webdriver.io
     *      (webdriver browser commands: https://webdriver.io/docs/api/webdriver.html)
     *   Find out how to create a chai expectation to check if the name of the tag is my-element using 2 different methods of retrieving the tagName with webdriver.io
     *      (chai commands: https://www.chaijs.com/api/bdd/)
     *   Find out how to create a chai expectation to check if my-element element exists on the page.
     *      (chai commands: https://www.chaijs.com/api/bdd/)
     * 
     */
    it('Should have gotten the custom "my-element" element from the page', () => {
        done(new Error("replace this line with your selectors and expectation"));
    });

    /**
     * Use a Chai expectation to test if the H1 exists while using the class selector style with webdriver.io
     * 
     * Steps:
     *   Find out how to get the H1 element from the body with a class selector with webdriver.io
     *      (webdriver browser commands: https://webdriver.io/docs/api/webdriver.html)
     *   Find out how to create a chai expectation to check if h1 element exists with body as parent.
     *      (chai commands: https://www.chaijs.com/api/bdd/)
     * 
     */
    it('Should have gotten the h1 element by class from the page', () => {
        done(new Error("replace this line with your selectors and expectation"));
    });

    /**
     * Use 2 Chai expectation to test if the you have the 2 A elements with target="_blank" while using the attribute selector style with webdriver.io
     * 
     * Steps:
     *   Find out how to get the H1 element from the body with a attribute selector with webdriver.io
     *      (webdriver browser commands: https://webdriver.io/docs/api/webdriver.html)
     *   Find out how to create a chai expectation to check if you have found 2 A elements. And if they have the correct text ['nodejs', 'chaijs'].
     *      (chai commands: https://www.chaijs.com/api/bdd/)
     * 
     */
    it('Should have gotten the A elements with target="_blank" from the page', () => {
        done(new Error("replace this line with your selectors and expectation"));
    });

});
