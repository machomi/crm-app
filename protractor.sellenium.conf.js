// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  framework: 'jasmine2',
  specs: [ './e2e/**/*.e2e-spec.ts'],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 5
  },
  baseUrl: 'http://490249de.ngrok.io/',
  getPageTimeout: 180000,
  allScriptsTimeout: 180000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  },
  onPrepare() {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
