(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{1326:function(e,t,a){"use strict";a.r(t);var n=a(21),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"modules-safaridialog-authenticationsession"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-safaridialog-authenticationsession"}},[e._v("#")]),e._v(" Modules.SafariDialog.AuthenticationSession")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("AuthenticationSession")]),e._v(" puts the user in control of whether they want to use\ntheir existing logged-in session from Safari. The app provides a URL that points\nto the authentication webpage. The page will be loaded in a secure view controller.\nFrom the webpage, the user can authenticate herself and grant access to the app.\nOn completion, the service will send a callback URL with an authentication token,\nand this URL will be passed to the app by the "),a("code",[e._v("callback")]),e._v(".")]),e._v(" "),a("p",[e._v("The callback URL usually has a custom URL scheme. For the app to receive the\ncallback URL, it needs to either register the custom URL scheme in its Info.plist,\nor set the scheme to "),a("code",[e._v("scheme")]),e._v(" argument in the initializer.")]),e._v(" "),a("p",[e._v("If the user has already logged into the web service in Safari or other apps via\nthe "),a("code",[e._v("AuthenticationSession")]),e._v(", it is possible to share the existing login information.\nAn alert will be presented to get the user's consent for sharing their existing login\ninformation. If the user cancels the alert, the session will be canceled, and\nthe callback will be called.")]),e._v(" "),a("p",[e._v("If the user taps Cancel when showing the login webpage for the web service,\nthe session will be canceled, and the callback will be called as well.")]),e._v(" "),a("p",[e._v("The app can cancel the session by calling "),a("code",[e._v("cancel()")]),e._v(". This will also dismiss\nthe window that is showing the web service's login page.")]),e._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("The AuthenticationSession API is available with the Titanium SDK starting with Release 6.3.0.\nThis module only works with devices running iOS 11.0 and later.\nPlease make sure you have at least Xcode 9 to build to the required sources.")]),e._v(" "),a("h3",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("Create a new authentication session by providing a "),a("code",[e._v("url")]),e._v(" and "),a("code",[e._v("scheme")]),e._v(", create an event-listener and start:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("var Safari = require('ti.safaridialog');\n\nvar authSession = Safari.createAuthenticationSession({\n  url: 'https://example.com/oauth?callbackURL=myapp://',\n  scheme: 'myapp://'\n});\n\nauthSession.addEventListener('callback', function(e) {\n  if (!e.success) {\n      Ti.API.error('Error authenticating: ' + e.error);\n      return;\n  }\n  \n  Ti.API.info('Callback URL: ' + e.callbackURL);\n});\n\nauthSession.start(); // Or cancel() to cancel it manually.\n")])])]),a("ApiDocs")],1)}),[],!1,null,null,null);t.default=i.exports}}]);