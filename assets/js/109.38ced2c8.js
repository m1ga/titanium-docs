(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1042:function(t,e,a){t.exports=a.p+"assets/img/WindowsPhonePackage.6ad8484f.png"},1043:function(t,e,a){t.exports=a.p+"assets/img/PackageWindowsStore.2611e0b6.png"},1044:function(t,e,a){t.exports=a.p+"assets/img/WindowsStoreConfig.32577f21.png"},1468:function(t,e,a){"use strict";a.r(e);var s=a(21),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"distributing-windows-applications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distributing-windows-applications"}},[t._v("#")]),t._v(" Distributing Windows Applications")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),s("p",[t._v("As of Titanium 9.0.0, building Windows apps is no longer supported.")])]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),s("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("To distribute an application on the Windows Store (for x86-based applications) and Windows Phone Store (for ARM-based applications), you need to:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create an application in the Windows Dev Center.")])]),t._v(" "),s("li",[s("p",[t._v("Update information in your "),s("code",[t._v("tiapp.xml")]),t._v(" file based on the IDs and fields from the Windows Dev Center.")])]),t._v(" "),s("li",[s("p",[t._v("Generate APPX file(s) of your Titanium projects.")])]),t._v(" "),s("li",[s("p",[t._v("Start an application submission and upload your APPX file(s) with the submission.")])])]),t._v(" "),s("h2",{attrs:{id:"create-an-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-application"}},[t._v("#")]),t._v(" Create an Application")]),t._v(" "),s("p",[t._v("To submit an application to the Windows Store or Windows Phone Store, you need to create an application project in the Windows Dev Center.")]),t._v(" "),s("p",[t._v("If you have not created an application yet:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Log into "),s("a",{attrs:{href:"https://dev.windows.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dev.windows.com"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Dashboard")]),t._v(" in the top-right corner.")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Create a new app")]),t._v(" in the left navigation.")])]),t._v(" "),s("li",[s("p",[t._v("Enter a name for your application and click "),s("strong",[t._v("Reserve app name")]),t._v(".")])])]),t._v(" "),s("p",[t._v("The Windows Dev Center will create a new application in your dashboard. The process will generate IDs and other fields that will need to be updated in the "),s("code",[t._v("tiapp.xml")]),t._v(" file.")]),t._v(" "),s("h2",{attrs:{id:"update-the-tiapp-xml-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-the-tiapp-xml-file"}},[t._v("#")]),t._v(" Update the tiapp.xml File")]),t._v(" "),s("p",[t._v("Titanium uses the settings in the "),s("code",[t._v("tiapp.xml")]),t._v(" file to package your project. Some of these settings must match the settings generated by the Windows Dev Center. Specifically, the "),s("code",[t._v("<name/>")]),t._v(", "),s("code",[t._v("<id/>,``<publisher/>")]),t._v(" and the "),s("code",[t._v("ti.windows.publishername")]),t._v(" app property elements.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open the project's "),s("code",[t._v("tiapp.xml")]),t._v(" file.")])]),t._v(" "),s("li",[s("p",[t._v("Locate the "),s("code",[t._v("<name>")]),t._v(" element. The node text of the element must match the name of the application in the Windows Dev Center.")])]),t._v(" "),s("li",[s("p",[t._v("Locate the "),s("code",[t._v("<publisher>")]),t._v(" element. The node text of the element must match the "),s("em",[t._v("Publisher display name")]),t._v(" of your Microsoft Developer account.")])]),t._v(" "),s("li",[s("p",[t._v("Locate the "),s("code",[t._v('<property name="ti.windows.publishername">')]),t._v(" element. If you do not have the element in your "),s("code",[t._v("tiapp.xml")]),t._v(" file, add it. The node text for the element must match the "),s("em",[t._v("Windows publisher ID")]),t._v(" of your Microsoft Developer account (or the Package/Identity/Publisher of the application) .")])]),t._v(" "),s("li",[s("p",[t._v("Add the "),s("code",[t._v("<id>")]),t._v(" element to the "),s("code",[t._v("<windows>")]),t._v(" element. The node text of the element must match the "),s("code",[t._v("Package/Identity/Name")]),t._v(" of the application, which was generated when you created the application in the Windows Dev Center Dashboard.")])])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Prior to Release 5.1.0")]),t._v(" "),s("p",[t._v("Prior to Release 5.1.0, set the "),s("code",[t._v("Package/Identity/Name")]),t._v(" of the application to the "),s("code",[t._v("<id>")]),t._v(" element under the "),s("code",[t._v("<ti:app>")]),t._v(" element rather than the "),s("code",[t._v("<windows>")]),t._v(" element.")])]),t._v(" "),s("p",[s("strong",[t._v("To retrieve your Windows publisher ID and Publisher display name:")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Log into "),s("a",{attrs:{href:"https://dev.windows.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dev.windows.com"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Dashboard")]),t._v(" in the top-right corner.")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Account settings")]),t._v(" in the left navigation.")])])]),t._v(" "),s("p",[t._v("The publisher ID will be under the "),s("strong",[t._v("Account details")]),t._v(" section as the "),s("strong",[t._v("Windows publisher ID")]),t._v(" field, and the publisher display name will be under the "),s("strong",[t._v("Contact info")]),t._v(" section as the "),s("strong",[t._v("Publisher display name")]),t._v(" field.")]),t._v(" "),s("p",[s("strong",[t._v("To retrieve the "),s("code",[t._v("Package/Identity/Name")]),t._v(" and "),s("code",[t._v("Package/Identity/Publisher")]),t._v(" fields:")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Log into "),s("a",{attrs:{href:"https://dev.windows.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dev.windows.com"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Dashboard")]),t._v(" in the top-right corner.")])]),t._v(" "),s("li",[s("p",[t._v("Click the application project in the left navigation.")])]),t._v(" "),s("li",[s("p",[t._v("Expand "),s("strong",[t._v("App management")]),t._v(" and click "),s("strong",[t._v("App identity")]),t._v(".")])])]),t._v(" "),s("p",[s("strong",[t._v("tiapp.xml")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("FooApp"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Prior to Release 5.1.0, set the Package/Identity/Name of the application to the top-level id element --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- <id>12345FooInc.FooApp</id> --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("publisher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("FooInc"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("publisher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ti.windows.publishername"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("CN=11111111-2222-3333-4444-555555555555"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("windows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Since Release 5.1.0, set the Package/Identity/Name of the application to the windows id element --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("12345FooInc.FooApp"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("windows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"package-for-windows-phone-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-for-windows-phone-store"}},[t._v("#")]),t._v(" Package for Windows Phone Store")]),t._v(" "),s("p",[t._v("Before creating an APPX file for the Windows Phone Store, you need to set your publisher ID in either the CLI or Studio.")]),t._v(" "),s("h3",{attrs:{id:"set-the-publisher-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-the-publisher-id"}},[t._v("#")]),t._v(" Set the Publisher ID")]),t._v(" "),s("h3",{attrs:{id:"package-for-windows-phone-store-with-studio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-for-windows-phone-store-with-studio"}},[t._v("#")]),t._v(" Package for Windows Phone Store with Studio")]),t._v(" "),s("p",[t._v("To package with Studio:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Select the project in the "),s("strong",[t._v("Project Explorer")]),t._v(" view.")])]),t._v(" "),s("li",[s("p",[t._v("In the global tool bar, select "),s("strong",[t._v("Package")]),t._v(" from the "),s("strong",[t._v("Launch Mode")]),t._v(" drop-down list.")])]),t._v(" "),s("li",[s("p",[t._v("Select "),s("strong",[t._v("Windows > Windows Phone")]),t._v(" from the "),s("strong",[t._v("Target")]),t._v(" drop-down list.")])]),t._v(" "),s("li",[s("p",[t._v("If the "),s("strong",[t._v("Launch Automatically")]),t._v(" option is enabled under the "),s("strong",[t._v("Target")]),t._v(" drop-down list, the application will be automatically launched after the device is selected. If not, you need to click the "),s("strong",[t._v("Launch")]),t._v(" button to start the build process.")])])]),t._v(" "),s("p",[t._v("Studio will prompt you to enter a location to copy the generated APPX file to.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1042),alt:"WindowsPhonePackage"}})]),t._v(" "),s("h3",{attrs:{id:"package-for-windows-phone-store-with-the-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-for-windows-phone-store-with-the-cli"}},[t._v("#")]),t._v(" Package for Windows Phone Store with the CLI")]),t._v(" "),s("p",[t._v("To package an APPX file for the Windows Phone Store, run:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("appc run -p windows -T dist-phonestore -O "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OUTPUT_DIRECTORY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"package-for-windows-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-for-windows-store"}},[t._v("#")]),t._v(" Package for Windows Store")]),t._v(" "),s("p",[t._v("Before creating an APPX file for Windows Store, you need to create a signing certificate in PFX format. The CLI will prompt you to create one if you do not specify one in the command options. Studio will prompt you to either create or select a PFX file.")]),t._v(" "),s("h3",{attrs:{id:"package-for-windows-store-with-studio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-for-windows-store-with-studio"}},[t._v("#")]),t._v(" Package for Windows Store with Studio")]),t._v(" "),s("p",[t._v("To package with Studio:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Select the project in the "),s("strong",[t._v("Project Explorer")]),t._v(" view.")])]),t._v(" "),s("li",[s("p",[t._v("In the global tool bar, select "),s("strong",[t._v("Package")]),t._v(" from the "),s("strong",[t._v("Launch Mode")]),t._v(" drop-down list.")])]),t._v(" "),s("li",[s("p",[t._v("Select "),s("strong",[t._v("Windows > Windows Store")]),t._v(" from the "),s("strong",[t._v("Target")]),t._v(" drop-down list.")])]),t._v(" "),s("li",[s("p",[t._v("If the "),s("strong",[t._v("Launch Automatically")]),t._v(" option is enabled under the "),s("strong",[t._v("Target")]),t._v(" drop-down list, the build process will automatically start. If not, you need to click the "),s("strong",[t._v("Launch")]),t._v(" button to start the build process.")])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(1043),alt:"PackageWindowsStore"}})]),t._v(" "),s("p",[t._v("Studio will prompt you to enter a location to copy the generated APPX file to and to either create or specify a PFX file for signing the package.")]),t._v(" "),s("p",[t._v("To create a new certificate, select "),s("strong",[t._v("Create New")]),t._v(" and enter a password for the certificate. During the certificate creation process, the Certificate Import wizard will be launched. You will be prompted to enter the same password in subsequent dialogs. Click "),s("strong",[t._v("OK")]),t._v(" or "),s("strong",[t._v("Next")]),t._v(" when prompted.")]),t._v(" "),s("p",[t._v("To specify a certificate to use, select "),s("strong",[t._v("Use Existing")]),t._v(", enter the location of the certificate and enter the password used to create the certificate.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1044),alt:"WindowsStoreConfig"}})]),t._v(" "),s("h3",{attrs:{id:"package-for-windows-store-with-the-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-for-windows-store-with-the-cli"}},[t._v("#")]),t._v(" Package for Windows Store with the CLI")]),t._v(" "),s("p",[t._v("If you need to generate a certificate, run the following CLI command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("JoeUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Documents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Appcelerator_Studio_Workspace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WindowsApp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" appc run -p windows -T dist-winstore -O dist\nAppcelerator Command-Line Interface, version "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.1")]),t._v(".0\nCopyright "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2014")]),t._v("-2015, Appcelerator, Inc.  All Rights Reserved.\nWhere is the pfx "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" used to sign the app? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leave blank to generate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\nWhat is "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("or will be"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" your PFX password?: ****\n")])])]),s("p",[t._v("The CLI will launch the Windows certificate tools in the background and prompt you to create a password for the certificate.")]),t._v(" "),s("p",[t._v("You will be prompted to enter the same password in subsequent dialogs and to generate some files. Click "),s("strong",[t._v("OK")]),t._v(" or "),s("strong",[t._v("Next")]),t._v(" when prompted. The CLI will generate three files in the project directory:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("generated.cer")]),t._v(": public certificate")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("generated.pfx:")]),t._v("PFX file for signing the package")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("generated.pkv")]),t._v(": private key")])])]),t._v(" "),s("p",[t._v("After the certificate is generated, the CLI will automatically create and sign the APPX file.")]),t._v(" "),s("p",[t._v("To package an APPX file for the Windows Store after you have generated the certificate, run:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("appc run -p windows -T dist-winstore -R "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PFX_CERTIFICATE_FILE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -P "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PFX_PASSWORD"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -O "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OUTPUT_DIRECTORY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"submit-an-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submit-an-application"}},[t._v("#")]),t._v(" Submit an Application")]),t._v(" "),s("p",[t._v("Once you have created your APPX file(s), start the application submission process.")]),t._v(" "),s("p",[t._v("In the Windows Dev Center Dashboard:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Click your application.")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Submission")]),t._v(" in the left navigation.")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Start your Submission")]),t._v(".")])])]),t._v(" "),s("p",[t._v("Complete the following fields in each category, then click "),s("strong",[t._v("Submit to the Store")]),t._v(" to start the certification process.")]),t._v(" "),s("p",[t._v("For more information about the submission and certification process, see "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/apps/hh694062.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows Dev Center: App submissions"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"pricing-and-availability"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pricing-and-availability"}},[t._v("#")]),t._v(" Pricing and availability")]),t._v(" "),s("p",[t._v("The only required field is to select the price of your application.")]),t._v(" "),s("p",[t._v("You may optionally select or change the default values for which countries your application are available in, the application visibility in the store and when the application can be available in the store.")]),t._v(" "),s("h3",{attrs:{id:"app-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-properties"}},[t._v("#")]),t._v(" App properties")]),t._v(" "),s("p",[t._v("You are required to select a category and subcategory.")]),t._v(" "),s("p",[t._v("You may optionally select or change the defaults for the age range, game ratings, hardware requirements and app declaration.")]),t._v(" "),s("h3",{attrs:{id:"packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#packages"}},[t._v("#")]),t._v(" Packages")]),t._v(" "),s("p",[t._v("Upload your APPX file(s). The APPX file(s) will be validated. If you receive any validation errors, you may need to update the settings in your "),s("code",[t._v("tiapp.xml")]),t._v(" file.")]),t._v(" "),s("p",[t._v("For Windows Store app, you have the option of setting minimum system requirements")]),t._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("You are required to enter a description and upload one screenshot of your application. All other fields are optional.")]),t._v(" "),s("p",[t._v("The following table describes the image assets you may upload with your application. Only the screenshots are required for application submission.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Dimensions (pixels)")]),t._v(" "),s("th",[t._v("File Type")]),t._v(" "),s("th",[t._v("File Size")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Desktop screenshot")]),t._v(" "),s("td",[t._v("* 1366 x 768 or larger"),s("br"),t._v(" "),s("br"),t._v("* 768 x 1366 or larger")]),t._v(" "),s("td",[t._v("PNG")]),t._v(" "),s("td",[t._v("< 2MB")]),t._v(" "),s("td",[t._v("May submit up to 9")])]),t._v(" "),s("tr",[s("td",[t._v("Mobile screenshot")]),t._v(" "),s("td",[t._v("* 768 x 1280"),s("br"),t._v(" "),s("br"),t._v("* 720 x 1280"),s("br"),t._v(" "),s("br"),t._v("* 480 x 800"),s("br"),t._v(" "),s("br"),t._v("* 1280 x 768"),s("br"),t._v(" "),s("br"),t._v("* 1280 x 720"),s("br"),t._v(" "),s("br"),t._v("* 800 x 480")]),t._v(" "),s("td",[t._v("PNG")]),t._v(" "),s("td",[t._v("< 2 MB")]),t._v(" "),s("td",[t._v("May submit up to 8")])]),t._v(" "),s("tr",[s("td",[t._v("App tile icon")]),t._v(" "),s("td",[t._v("300 x 300")]),t._v(" "),s("td",[t._v("PNG")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("For Windows Phone and earlier")])]),t._v(" "),s("tr",[s("td",[t._v("Promotional artwork")]),t._v(" "),s("td",[t._v("* 358 x 173 (wide icon)"),s("br"),t._v(" "),s("br"),t._v("* 358 x 358 (square icon)"),s("br"),t._v(" "),s("br"),t._v("* 1000 x 800 (background image)"),s("br"),t._v(" "),s("br"),t._v("* 414 x 180"),s("br"),t._v(" "),s("br"),t._v("* 414 x 468"),s("br"),t._v(" "),s("br"),t._v("* 558 x 558"),s("br"),t._v(" "),s("br"),t._v("* 558 x 756"),s("br"),t._v(" "),s("br"),t._v("* 846 x 468"),s("br"),t._v(" "),s("br"),t._v("* 2400 x 1200 (recommended)")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Used to showcase your application in the store."),s("br"),s("br"),t._v("May submit only one image per file size."),s("br"),s("br"),t._v("It is highly recommended to submit a 2400 x 1200 image, which the Microsoft team will resize and crop for promotional layouts.")])])])]),t._v(" "),s("p",[t._v("For more information about screenshot and app icons, see also "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/uwp/publish/app-screenshots-and-images",target:"_blank",rel:"noopener noreferrer"}},[t._v("App screenshots, images, and trailers"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Notes for certification")]),t._v(" "),s("p",[t._v("This category is optional.")])])}),[],!1,null,null,null);e.default=o.exports}}]);