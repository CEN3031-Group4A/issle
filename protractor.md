##setting up protractor tests
# run first time
npm install -g protractor
webdriver-manager update

# run every time seperate terminals
webdriver-manager start
node server.js
protractor conf.js