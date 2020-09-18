"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_2 = require("protractor");
const { defineSupportCode } = require('cucumber');
defineSupportCode(function ({ After }) {
    After(function (scenario) {
        var world = this;
        if (scenario.isFailed()) {
            return protractor_2.browser.takeScreenshot().then(function (screenShot) {
                // screenShot is a base-64 encoded PNG
                world.attach(screenShot, 'image/png');
            });
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFtQztBQUVuQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFHaEQsaUJBQWlCLENBQUMsVUFBVSxFQUFDLEtBQUssRUFBQztJQUVsQyxLQUFLLENBQUMsVUFBVSxRQUFRO1FBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN4QixPQUFPLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsVUFBVTtnQkFDeEQsc0NBQXNDO2dCQUN0QyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9