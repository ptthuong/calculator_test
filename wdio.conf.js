exports.config = {
  host: 'localhost',
  port: 4444,
  specs: [
    'src/test_scripts/operation/TestOperationPrecedence_01.js',
    'src/test_scripts/operation/TestClearing_01.js'
  ],
  capabilities: [{
    deviceName: 'iPhone',
    udid: process.env.UDID,
    platformVersion: process.env.PLATFORM_VERSION,
    automationName: 'XCUITest',
    bundleId: 'com.apple.calculator',
    platformName: 'iOS',
    wdaLocalPort: 8101,
    xcodeOrgId: process.env.ORG_ID,
    xcodeSigningId: process.env.SIGNING_ID,
    maxInstances: 1
  }],
  sync: true,
  logLevel: 'info',
  waitforTimeout: 15000,
  outputDir: 'logs/',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 900000,
    compilers: ['js:@babel/register']
  },
  reporters: [['allure', {
    outputDir: 'Report',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: true,
  }]],
  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
  }
};
