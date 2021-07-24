const args = require('minimist')(process.argv.slice(2));
import { Config, browser } from "protractor";
import * as reporter from "cucumber-html-reporter";
import {​​​ GenerateCustomReport }​​​ from'./TestReport/GenerateCustomReport'

var moment = require("moment");
var fse = require("fs-extra");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
declare var environment: string;
export let config: Config = {
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {

    'browserName': args.browser,
    chromeOptions:

    {
      args: [args.Options]
    },
  },

  params: {
    env: "",
    url: ""
  },
  onPrepare: async function () {
    await browser.waitForAngularEnabled(false);
    await browser.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(100000);
    globalThis.environment = browser.params.env;
  },
  specs: [
    '../Features/*/*.feature',
  ],
  cucumberOpts: {

    format: 'json:./TestReport/cucumberreport.json',
    tags: "",
    require: [
      '../JSFiles/Step_Definitions/*/*.js',
      '../JSFiles/support/hook.js',
      '../support/timeout.js'
    ]
  },


  onComplete: () => {
    var options = {
      brandTitle: 'Ideabytes',
      name: 'Automation Test Report',
      theme: 'bootstrap',
      jsonFile: './TestReport/cucumberreport.json',
      output: './TestReport/Test_Report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": " 7.3 © 2021 UST",
        "Test Environment": "STAGING",
        "Browser": "Chrome  91.0.4472.77",
        "Platform": "Windows 10 Pro",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };

    // reporter.generate(options);
    let generateCustomReport = new GenerateCustomReport();
    generateCustomReport.readJson();
    // var reportDir = "../TestReport"
    // if (fse.existsSync(reportDir)) {

    //   fse.copySync(reportDir,
    //     reportDir + "_" + moment().format("YYYYMMDD_HHmmss"), { overwrite: true }, function (err) {
    //       if (err) {
    //         console.error(err);
    //       } else {
    //         console.log("success!");
    //       }
    //     });

    // }
    // fse.mkdirsSync(reportDir);

  },
  jasmineNodeOpts: {
    showColors: true,
  }

};
