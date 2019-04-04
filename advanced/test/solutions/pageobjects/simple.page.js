const Page = require('./page');

class SimplePage extends Page {

    open() {
        super.open('file:///Users/marcdekwant/Documents/customers/workspaces/ING/webdriverio-e2e-workshop/advanced/src/advanced-testing.html')
    }
    
}

module.exports = SimplePage;