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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDMUIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2IsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsWUFBWSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsZ0JBQWdCLENBQUM7U0FDaEQ7UUFDRCxNQUFNLEVBQUUsd0JBQXdCO1FBQ2hDLE1BQU0sRUFBRSxJQUFJO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDSCx3QkFBd0I7S0FDM0I7SUFDRCxpQkFBaUIsRUFBRSxDQUFDO1lBQ2hCLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFlBQVksRUFBRSxDQUFDO1lBQ2YsYUFBYSxFQUFFO2dCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQzdCO1NBQ0osQ0FBQztJQUNGLFNBQVMsRUFBRTtRQUNQLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6QiwyREFBMkQ7UUFDM0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCx5QkFBeUI7SUFDekIsT0FBTyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxtREFBbUQsQ0FBQztZQUM3RSxPQUFPLEVBQUU7Z0JBQ0wsMkJBQTJCLEVBQUUsSUFBSTtnQkFDakMsbUJBQW1CLEVBQUUsSUFBSTthQUM1QjtTQUNKLENBQUM7Q0FDTCxDQUFDIn0=