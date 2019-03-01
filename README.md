# calculator_test
This is a demo code for testing Calculator app on iOS with Appium and WebdriverIO

## Environment
This project was tested on ***MAC***. Please prepare the test bed with the following items installed
- Nodejs (v9 or higher)
- Appium installed **globally**
- XCode installed
- Setting up environment for real device as in https://github.com/appium/appium/blob/master/docs/en/drivers/ios-xcuitest.md
- Note: need a developer account and creating available provisioning profile to test on real device.

## How to run tests
### 1. Clone code from github repository
```
git clone https://github.com/ptthuong/calculator-test.git
cd calculator-test
```
### 2. Install dependencies:
```
calculator-test$ npm install

```
### 3. Run tests:
- Open a terminal and start Appium server on port 4444 before running test:

```$ appium -p 4444```

- Export some params as environment variables (*)

```
$ export ORG_ID=<your_team_id>
$ export SIGNING_ID=iPhone Developer
$ export UDID=<UDID_of_device>
$ export PLATFORM_VERSION=<Plaform_version>
```

- Run test in same terminal with (*)

```$ npm run test```

![running_test_demo](docs/video/running_test_demo.mov)

- Open report after testing:

```$npm run report```

![opening_report_demo](docs/video/opening_report_demo.mov)
