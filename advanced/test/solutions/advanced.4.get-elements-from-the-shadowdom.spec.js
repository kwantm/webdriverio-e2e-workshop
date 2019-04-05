const chai = require('chai');
const expect = chai.expect;
 
describe('The page I fetch', () => {

    beforeEach(() => {
        browser.url('file:///Users/marcdekwant/Documents/customers/workspaces/ING/webdriverio-e2e-workshop/advanced/src/advanced-testing.html');
    });

    it('Should have found 5 articles', () => {
        const elem = $('my-element');
        const shadowElem = elem.shadow$('ul');
        browser.waitUntil(() => {
            const articles = shadowElem.$$('my-article');
            return articles.length > 0;
        })
        const shadowArticles = shadowElem.$$('my-article');
        const firstArticle = shadowElem.$(':first-of-type my-article');
        expect(shadowArticles.length).to.equal(5);
        expect(firstArticle.shadow$('li h5').getText()).to.equal('title 1');
    });

    it('Should have a first article with title title 1', () => {
        const elem = $('my-element');
        const shadowElem = elem.shadow$('ul');
        browser.waitUntil(() => {
            const articles = shadowElem.$$('my-article');
            return articles.length > 0;
        })
        const firstArticle = shadowElem.$(':first-of-type my-article');
        expect(firstArticle.shadow$('li h5').getText()).to.equal('title 1');
   
    });

});