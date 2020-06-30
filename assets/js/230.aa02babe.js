(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{2590:function(e,t,o){"use strict";o.r(t);var a=o(21),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"alloy-test-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alloy-test-apps"}},[e._v("#")]),e._v(" Alloy Test Apps")]),e._v(" "),a("p",[e._v("The Alloy GitHub "),a("a",{attrs:{href:"https://github.com/appcelerator/alloy",target:"_blank",rel:"noopener noreferrer"}},[e._v("repository"),a("OutboundLink")],1),e._v(" includes a number of small "),a("a",{attrs:{href:"https://github.com/appcelerator/alloy/tree/master/samples/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("test applications"),a("OutboundLink")],1),e._v(" that demonstrates various Alloy features.")]),e._v(" "),a("p",[e._v("To build and run one of the test applications, do the following:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clone the Alloy project locally.")])]),e._v(" "),a("li",[a("p",[e._v("Create a new Alloy project, either using Studio or the CLI tools.")])]),e._v(" "),a("li",[a("p",[e._v("Copy the contents of the desired sample folder into the newly created Alloy project's "),a("code",[e._v("/app")]),e._v(" folder and overwrite any existing files.")])]),e._v(" "),a("li",[a("p",[e._v("Build and run the application on a device, simulator, or emulator.")])])]),e._v(" "),a("p",[e._v("The sample apps are organized in several folders representing the following categories:")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/User_Interface/"}},[e._v("User Interface")])],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/Advanced/"}},[e._v("Advanced")]),e._v(" — Samples in the advanced/ folder demonstrate advanced Alloy topics and approaches, such as advanced styling, using modules, using CommonJS modules, and more.")],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/Basics/"}},[e._v("Basics")]),e._v(" — Samples in the basics/ folder demonstrates basic Alloy concepts.")],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/Alloy_Test_Models/"}},[e._v("Alloy Test Models")]),e._v(" — Samples in the alloy/test/apps/models/ folder demonstrates using models, collections, and data binding in Alloy.")],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/Widgets/"}},[e._v("Widgets")])],1)])]),e._v(" "),a("p",[e._v("Note that some samples demonstrate platform-specific features that only run on certain platforms.")]),e._v(" "),a("h2",{attrs:{id:"importing-and-running-an-alloy-test-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-and-running-an-alloy-test-app"}},[e._v("#")]),e._v(" Importing and Running an Alloy Test App")]),e._v(" "),a("p",[e._v("To import one of the sample application, first clone the Alloy GitHub project locally:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/appcelerator/alloy\n")])])]),a("p",[e._v('Once you\'ve selected a test app to build and run, you first create a new "blank" Alloy project, and then copy the contents of the sample folder into the '),a("code",[e._v("/app")]),e._v(" folder of the newly created Alloy project. You can do this either using Appcelerator Studio or on the command line using the CLI tools, as explained below.")]),e._v(" "),a("h3",{attrs:{id:"using-the-cli-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cli-tools"}},[e._v("#")]),e._v(" Using the CLI tools")]),e._v(" "),a("p",[e._v("You can generate a new Alloy project using a test application from the Alloy Github repo. (The source code is copied from the global or local install of the Alloy npm package.)")]),e._v(" "),a("p",[e._v("To create an Alloy application based on a test application, first create a skeleton Titanium project, then run the Alloy new command with the "),a("code",[e._v("--testapp <path_to_test_app>")]),e._v(" option. Pass the option the relative path to the test application after the "),a("code",[e._v("alloy/test/apps")]),e._v(" path.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("appc new -t titanium --classic -i com.appc.picker -n AlloyPicker\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" AlloyPicker\nappc alloy new --testapp ui/picker\n")])])]),a("p",[e._v("Prior to Alloy 1.7.6, you need to manually copy the source code to the new Titanium project:.")]),e._v(" "),a("p",[a("strong",[e._v("Creating a test project")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("appc new -t titanium -n picker_test --id com.yourdomain -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -url yourdomain.com -p all\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" picker_test/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" -r "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("alloy_repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/test/apps/ui/picker/ app/\nappc run -p ios\n")])])]),a("h3",{attrs:{id:"using-appcelerator-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-appcelerator-studio"}},[e._v("#")]),e._v(" Using Appcelerator Studio")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("To build a sample using "),a("strong",[e._v("Appcelerator Studio")]),e._v(", first create a new Alloy project by selecting "),a("strong",[e._v("File")]),e._v(" > "),a("strong",[e._v("New")]),e._v(" > "),a("strong",[e._v("Mobile App Project")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:o(518),alt:"new-Alloy-project"}})])]),e._v(" "),a("li",[a("p",[e._v("Drag and drop the contents of the desired test app folder from the desktop into the new project's "),a("code",[e._v("/app")]),e._v(" folder in Project Explorer.")])]),e._v(" "),a("li",[a("p",[e._v("When prompted, select "),a("strong",[e._v("Copy file and folders")]),e._v(" option in the File and Folder Operation dialog and click OK.")])]),e._v(" "),a("li",[a("p",[e._v("Select "),a("strong",[e._v("Yes To All")]),e._v(" when asked if you want to overwrite files in the target folder.")])])]),e._v(" "),a("p",[e._v("You can now build or run the application on a target device, simulator or emulator.")])])}),[],!1,null,null,null);t.default=l.exports},518:function(e,t,o){e.exports=o.p+"assets/img/new-Alloy-project.edd394bf.png"}}]);