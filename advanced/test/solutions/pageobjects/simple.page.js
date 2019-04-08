const Page = require('./page');
const path = require('path');

class SimplePage extends Page {
 
    open() {
         super.open('file://' + path.resolve('../webdriverio-e2e-workshop/advanced/src/advanced-testing.html'))
    }
    
}

module.exports = SimplePage;