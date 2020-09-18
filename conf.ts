"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
let path = require('path');
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: [
            path.resolve(process.cwd(), 'src/steps/*.js')
        ],
        format: 'json:.tmp/results.json',
        strict: true
    },
    specs: [
        'src/features/*.feature'
    ],
    multiCapabilities: [{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        chromeOptions: {
            args: ['disable-infobars']
        }
    }],
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
        let chai = require('chai');
        let chaiAsPromised = require('chai-as-promised');
        // Load chai-as-promised support
        chai.use(chaiAsPromised);
        // Initialise should API (attaches as a property on Object)
        chai.should();
    },
    // Here the magic happens
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
            automaticallyGenerateReport: true,
            openReportInBrowser: true
        }
    }]
};
