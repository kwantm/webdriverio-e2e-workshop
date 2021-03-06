# webdriverio-e2e-workshop
Small workshop for using webdriverio in combination with e2e testing of LIT HTML and/or Polymer components

## Prerequisites
The following tools need to be installed on your system:
* nodejs
* npm cli
* chrome
* An editor (VSC or Intellij for example)

## Project installation guide
The following steps need to be performed for a working environment after cloning this repository.
* npm install
* Edit the **./advanced/wdio.conf.js** file.
    * Search for the **chromeOptions** entry and change the entry for **binary** and point it to your chrome executable.

## Workshop content
The workshop contains two parts. A basic part and an advanced part.
### Basic section
In the basic part you will learn how to create a test and use some basic Browser/Element methods and CSS selectors to retrieve information on elements. 

The following Browser/Element methods will be used:
* browser.url   
* browser.getTitle
* browser.element(s) or browser.$($) or just $($)

The following CSS selectors are used:
* element (h1)
* element,element (h1,body)
* element element (div p) or (div > p)
* #id (#myId)
* .class (.myclass)
* [attribute=value] (id=read) 
### Advanced section
In the advanced section you will learn how to create multi layered tests (suites), Page Objects, the use of some more advanced CSS selectors and obtaining elements from within the shadowroot. 

The following CSS selectors are used:
* :first-of-type (p:first-of-type) Select the first P element in the parent
* :nth-of-type(n) (p:nth-of-type(2)) Select the 2nd P element in the parent
* :optional (input:optional) Select all input elements that are do not have the required attribute
* :invalid / :valid (input:invalid) Select all input elements that are invalid
* :in-range (input:in-range) Select all input elements that have a value that is within a specific range
## Run the tests
* npm run basic
* npm run advanced

## Generating the changelog
You can generate the changelog by running the cmd: `./node_modules/.bin/auto-changelog -p -b 100`
See for more information the site (link in the reference section available)

## Reference material

* [NPM](https://docs.npmjs.com/cli/install)
* [NodeJS](https://nodejs.org/en/download/)
* [Chrome](https://www.google.com/chrome/)
* [Chromium command line switches](https://peter.sh/experiments/chromium-command-line-switches/)
* [Chromium capabilities](https://sites.google.com/a/chromium.org/chromedriver/capabilities) 
* [Visual Source Code](https://code.visualstudio.com/download)
* [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Workshop code](https://github.com/kwantm/webdriverio-e2e-workshop)
* [webdriverio](https://webdriver.io/)
* [Lit Element documentation](https://lit-element.polymer-project.org/)
* [Web api - Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
* [CSS - selectors](https://www.w3schools.com/csSref/css_selectors.asp)
* [Webdriver Offical protocol](https://w3c.github.io/webdriver/#dfn-status)
* [Webdriver commands](https://webdriver.io/docs/api/webdriver.html)
* [Chai assert framework](https://www.chaijs.com/)
* [Auto generated changelog](https://www.npmjs.com/package/auto-changelog)
