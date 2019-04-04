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
     * Use a Chai expectation to test if the list of (A and H1) elements in the body of the html document matches
     * the given array of texts of the elements [ 'A title in the body', 'NPM', 'nodejs', 'chaijs']
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
        done(new Error("replace this line with your expectation"));
    });

});
