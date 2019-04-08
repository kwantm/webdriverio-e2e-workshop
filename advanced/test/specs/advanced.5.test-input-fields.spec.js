const chai = require('chai');
const expect = chai.expect;
const path = require('path');

/**
 * Create a html file with some input fields and test the following selectors
 *     optional (input:optional) Select all input elements that are do not have the required attribute
 *     :invalid / :valid (input:invalid) Select all input elements that are invalid
 *     :in-range (input:in-range) Select all input elements that have a value that is within a specific range
 *
 * run cmd: ./node_modules/.bin/wdio ./advanced/wdio.conf.js --spec ./advanced/test/specs/advanced.5.test-input-fields.spec.js
 * 
 */

describe('The page I fetch', () => {

    const absPath = path.resolve('../webdriverio-e2e-workshop/advanced/src/<URL TO YOUR INPUT HTML>');

    beforeEach(() => {
        browser.url('file://' + absPath);
    });

    it('Should have one input element that is optional', () => {
        done(new Error("replace this line with your selectors and expectation"));
    });

    it('Should have two input elements that are required', () => {
        done(new Error("replace this line with your selectors and expectation"));
    });

    it('Should have two input elements that are valid', () => {
        done(new Error("replace this line with your selectors and expectation"));
    });

    it('Should have one input element that is invalid', () => {
        done(new Error("replace this line with your selectors and expectation"));
    });

});