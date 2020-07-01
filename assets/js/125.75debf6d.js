(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1274:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"build-test-and-deploy-a-titanium-cross-platform-app-with-fastlane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-test-and-deploy-a-titanium-cross-platform-app-with-fastlane"}},[t._v("#")]),t._v(" Build Test and Deploy a Titanium Cross-Platform App with Fastlane")]),t._v(" "),s("p",[t._v("Developing a mobile app is just the beginning. What follows – signing, packaging, managing app meta data, testing, and deploying to the App Stores, can arguably be just as tedious and challenging.This document will demonstrate one way to configure your environment to manage several build, test, and deployment tasks when developing apps with Titanium using Appium and Fastlane.We'll use "),s("a",{attrs:{href:"http://appium.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Appium (Local Server)"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://www.npmjs.com/package/mocha",target:"_blank",rel:"noopener noreferrer"}},[t._v("mocha"),s("OutboundLink")],1),t._v(" (npm package) for testing and "),s("a",{attrs:{href:"https://fastlane.tools/",target:"_blank",rel:"noopener noreferrer"}},[t._v("fastlane"),s("OutboundLink")],1),t._v(" for automation.")]),t._v(" "),s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),s("h3",{attrs:{id:"set-up-appium-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-appium-server"}},[t._v("#")]),t._v(" Set up Appium Server")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://appium.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Appium"),s("OutboundLink")],1),t._v(" is an open source test automation framework for use with native, hybrid, and mobile web apps. There are several options here that range from cloud-based, to local node package, and even a simple ‘Appium Desktop’ GUI app for Mac. For this document, we are going to use the simple GUI-based app, as it does everything we need it to do.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Download the free "),s("a",{attrs:{href:"https://github.com/appium/appium-desktop/releases/tag/v1.5.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Appium Desktop App"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Validate all required Appium dependencies.")])]),t._v(" "),s("li",[s("p",[t._v("Install and run "),s("code",[t._v("Appium Doctor")]),t._v(". This wizard will validate and advise of any additional steps or dependencies that may be needed for your environment. More info can be found "),s("a",{attrs:{href:"https://appium.io/docs/en/about-appium/getting-started/?lang=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".\n"),s("code",[t._v("npm install -g appium-doctor``appium-doctor")])]),t._v(" "),s("ol",[s("li",[t._v("Follow any steps to install any packages that your environment may be missing.")])])]),t._v(" "),s("li",[s("p",[t._v("Launch the Appium (Server) app and start the “Simple” Server using the defaults.")])])]),t._v(" "),s("h3",{attrs:{id:"install-mocha"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-mocha"}},[t._v("#")]),t._v(" Install Mocha")]),t._v(" "),s("p",[t._v("Since most developers manage multiple mobile applications, you should chose to manage tests for each app in a single JavaScript file and all app JavaScript files within a single folder outside of the Appcelerator Project directory. There are numerous ways you can manage this and there is no right or wrong just more of a preference. One example structure may look like this:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Documents")])]),t._v(" "),s("li",[s("p",[t._v("Appium_Tests")])]),t._v(" "),s("li",[s("p",[t._v("firstapp_test.js")])]),t._v(" "),s("li",[s("p",[t._v("anotherapp_test.js")])]),t._v(" "),s("li",[s("p",[t._v("...")])])]),t._v(" "),s("p",[t._v("Depending on your preference, install mocha either globally or locally in your tests directory (‘Appium_Tests’ in this example):")]),t._v(" "),s("p",[s("code",[t._v("npm install --global mocha")])]),t._v(" "),s("h3",{attrs:{id:"create-mocha-test-file-for-your-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-mocha-test-file-for-your-app"}},[t._v("#")]),t._v(" Create Mocha Test File for Your App")]),t._v(" "),s("p",[t._v("This file will use an “appium client” to connect to your Appium Server to run the automated tests. There are several clients to use and each have their own pros and cons. The general consensus is that "),s("code",[t._v("webdriver io")]),t._v(" is the preferred client. If you’d like to see the other options and/or see more complex examples, check out "),s("a",{attrs:{href:"https://github.com/appium/sample-code/tree/master/sample-code/examples/node",target:"_blank",rel:"noopener noreferrer"}},[t._v("this repo of examples"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("First, create a test file and name it "),s("code",[t._v("firstapp_test.js")]),t._v(".")]),t._v(" "),s("p",[t._v("Next, copy the following block of code into your file:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("port# must match your Appium Server Port.")])]),t._v(" "),s("li",[s("p",[t._v("Simulator can be customized to match your needs, but the same choice will need to be used when we build from fastlane (set up later in this document).")])]),t._v(" "),s("li",[s("p",[t._v("Update the path to your built app. "),s("strong",[t._v("Note")]),t._v(": In this document, we are pointing to the app built for the simulator. You can also test against physical devices, but we aren’t covering that here.")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4723")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  desiredCapabilities"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"platformName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iOS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"platformVersion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11.2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deviceName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iPad Pro (12.9-inch) (2nd generation)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/{USERDIR}/Documents/Appcelerator_Studio_Workspace/DASH/build/iphone/build/Products/Debug-iphonesimulator/MyAppName.app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"automationName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XCUITest"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noReset"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webdriverio"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FIRST APP TEST"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" allPassed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    driver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remote")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" driver\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    allPassed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" allPassed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'passed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Should Login"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" driver\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("element")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~Enter Username"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testusername"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("element")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~Enter Password"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testpassword"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~Attempting to Log In"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Should Do Something else"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" driver\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Do another test here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("While it is possible to write these tests using node without mocha, the structure that mocha uses may be a matter of personal preference. using mocha and the sample script (above), you should see these results:")]),t._v(" "),s("p",[s("img",{attrs:{src:e(798),alt:"2.mocha_results"}})]),t._v(" "),s("p",[t._v("Write test commands for your app. This is where "),s("code",[t._v("webdriver io")]),t._v(" stands apart form the rest. Their syntax is shorter and more streamlined than other clients. The "),s("code",[t._v("webdriver io")]),t._v(" API doc can be found "),s("a",{attrs:{href:"http://webdriver.io/api/action/setValue.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("blockquote",[s("p",[t._v('Note: The ~ is a unique Appium character that gets attributed to the AccessibilityId used within your Appcelerator app. This one line will find the UI component with AccessibilityId = “Enter Username” and sets its value:\n.element("~Enter Username").setValue("testusername")')]),t._v(" "),s("p",[t._v("You can refer to the Appium commands "),s("a",{attrs:{href:"http://appium.io/docs/en/commands/element/find-element/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(" if you want more info.")])]),t._v(" "),s("p",[t._v("Update your Appcelerator UI components with Accessibility Features (in this example, this would be the TextField used for the username). See "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/Accessibility/"}},[t._v("Appcelerator and Accessibility")]),t._v(" for more information.")],1),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TextField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("accessibilityLabel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Enter Username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("Now, you should have mocha configured and a sample test script using "),s("code",[t._v("webdriver io")]),t._v(" as the client to interface with your Titanium App (keying off of the "),s("code",[t._v("AccessibilityId")]),t._v("). Before continuing to the final piece (automation) you should ensure your test runs successfully on its own: "),s("code",[t._v("mocha firstapp_test.js")])]),t._v(" "),s("h2",{attrs:{id:"automation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automation"}},[t._v("#")]),t._v(" Automation")]),t._v(" "),s("h3",{attrs:{id:"install-fastlane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-fastlane"}},[t._v("#")]),t._v(" Install Fastlane")]),t._v(" "),s("p",[t._v("Review Fastlane’s "),s("a",{attrs:{href:"https://docs.fastlane.tools/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started Guide"),s("OutboundLink")],1),t._v(" to install and init.")]),t._v(" "),s("p",[t._v("For each mobile app, you will have a "),s("code",[t._v("fastlane")]),t._v(" folder in the root with a few config files.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-  fastlane (folder)\n  - Pluginfile (this gets created automatically for you)\n  - Fastfile (this file you create and define the required steps)\n")])])]),s("p",[t._v("As a way to jump start the process, copy the following into your "),s("code",[t._v("Fastfile")]),t._v(" file of your app:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("default_platform :ios\n\nplatform :ios "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n\n    before_all "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    end\n\n    desc "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Build App for Simulator Tests"')]),t._v("\n    lane :buildapp "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n      ti_build_app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    appc_cli: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"appc run build --platform ios --target dist-adhoc --distribution-name 'implicitli, LLC. (G52GS5PAND)' --pp-uuid c6ea530d-70ea-5661-b013-beb4d25b2a7b --output-dir /dist\"")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    end\n\n    desc "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Runs the tests of the iOS App"')]),t._v("\n    lane :test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n      ti_build_app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          appc_cli: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appc run -f -T simulator -p ipad -i 11.2 --device-id 6945AC80-7F29-4A5A-8256-49467E9D1A7D --build-only"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      mocha_run_tests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        mocha_js_file_name: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/{USERDIR}/Appium_Tests/dash_test.js'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    end\n\nend\n")])])]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("The Fastfile file doesn't use file extensions.")])]),t._v(" "),s("h3",{attrs:{id:"configure-fastlane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-fastlane"}},[t._v("#")]),t._v(" Configure Fastlane")]),t._v(" "),s("p",[t._v("Fastlane runs on what they call ‘lanes’. These lanes allow you to break out building, testing, deploying, and so on. Each lane can be run by itself or all together in succession. This is a rather hefty topic and this document only touches on a portion of it. To read more about it, visit "),s("a",{attrs:{href:"https://docs.fastlane.tools/advanced/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.fastlane.tools/advanced/"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("In your Titanium project, run this from terminal: "),s("code",[t._v("fastlane add_plugin ti_build_app")])]),t._v(" "),s("p",[t._v("This plugin leverages the full Appcelerator CLI.")]),t._v(" "),s("p",[t._v("To add simple runs to your mocha test JavaScript file: "),s("code",[t._v("fastlane add_plugin mocha_run_tests")])]),t._v(" "),s("h3",{attrs:{id:"customize-your-fastfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customize-your-fastfile"}},[t._v("#")]),t._v(" Customize Your Fastfile")]),t._v(" "),s("p",[t._v("In the first lane, "),s("code",[t._v("buildapp")]),t._v(", does just that: It only builds. This defines the distribution type (adhoc) and what cert and provisioning profile to use.")]),t._v(" "),s("p",[t._v("One could even go a step further and install the plugin "),s("code",[t._v("ftp")]),t._v(" to automate the upload process. Visit "),s("a",{attrs:{href:"https://docs.fastlane.tools/plugins/available-plugins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.fastlane.tools/plugins/available-plugins/"),s("OutboundLink")],1),t._v(" for a list of available plugins.")]),t._v(" "),s("p",[t._v("The second lane, "),s("code",[t._v("test")]),t._v(" has 2 actions:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Build the app to simulator,")])]),t._v(" "),s("li",[s("p",[t._v("test the app.")])])]),t._v(" "),s("p",[t._v("In this example, it uses different Appcelerator CLI commands so that the app is built to a specific simulator and "),s("code",[t._v("--build-only")]),t._v(" prevents it from launching (mocha will launch the simulator and attach to the correct session on its own). Then, the next step executes the mocha test file.")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("The simulator defined in Fastlane MUST match the simulator defined in my mocha test file.")])]),t._v(" "),s("h3",{attrs:{id:"execute-fastlane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-fastlane"}},[t._v("#")]),t._v(" Execute Fastlane")]),t._v(" "),s("p",[t._v("To run the "),s("code",[t._v("test")]),t._v(" lane, all one has to do is execute this command: "),s("code",[t._v("bundle exec fastlane test")])]),t._v(" "),s("p",[t._v("You will see Appcelerator CLI commands flash across the screen as it builds the app to simulator, then mocha executes, simulator opens, and webdriver io performs all your UI interactions.")]),t._v(" "),s("p",[t._v("Example fastlane output:")]),t._v(" "),s("p",[s("img",{attrs:{src:e(799),alt:"3.-fastlane_testlane"}})])])}),[],!1,null,null,null);a.default=n.exports},798:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVEAAABoCAIAAADHFlTEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFGQ0M4QkZEMzQ1QTExRThCMTcwRjAwRTE1MDNCQ0VBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFGQ0M4QkZFMzQ1QTExRThCMTcwRjAwRTE1MDNCQ0VBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUZDQzhCRkIzNDVBMTFFOEIxNzBGMDBFMTUwM0JDRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUZDQzhCRkMzNDVBMTFFOEIxNzBGMDBFMTUwM0JDRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7OFc/lAAAYIElEQVR42uydB1xU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"},799:function(t,a,e){t.exports=e.p+"assets/img/3.-fastlane_testlane.7cf0ac6b.png"}}]);