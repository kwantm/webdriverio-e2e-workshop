const fs = require('fs');

class ScreenshotHelper {

     save(browser, currentTest) {
        const fileName = new Date().toISOString() + '.png';
        const path = currentTest.file.substring(0,currentTest.file.lastIndexOf('/')) + '/screenshots/' + currentTest.title + '/';
        fs.mkdir(path, { recursive: true }, e => {
            if (e) {
                console.error(e);
            } else {
                browser.saveScreenshot(path + fileName);
            }
         });
     }
}

module.exports = ScreenshotHelper;