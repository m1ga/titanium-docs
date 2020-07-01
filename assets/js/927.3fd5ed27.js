(window.webpackJsonp=window.webpackJsonp||[]).push([[927],{2204:function(e,t,a){"use strict";a.r(t);var s=a(21),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"source-code-conventions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-code-conventions"}},[e._v("#")]),e._v(" Source Code Conventions")]),e._v(" "),a("p",[e._v("For those contributing to the Aptana source code base, we follow a few conventions.")]),e._v(" "),a("h2",{attrs:{id:"code-submission-checklist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-submission-checklist"}},[e._v("#")]),e._v(" Code Submission Checklist")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("License header at top of file")])]),e._v(" "),a("li",[a("p",[e._v("Code passes all Checkstyle checks")])]),e._v(" "),a("li",[a("p",[e._v("Code passes all PMD tests")])]),e._v(" "),a("li",[a("p",[e._v("Code is formatted according to Aptana conventions")])]),e._v(" "),a("li",[a("p",[e._v("Strings are externalized")])]),e._v(" "),a("li",[a("p",[e._v("Code is spell-checked")])]),e._v(" "),a("li",[a("p",[e._v("Code has class/method and field-level Java Docs for public and protected members")])]),e._v(" "),a("li",[a("p",[e._v("There is at least one unit test for the checked-in code, preferably that does not need to run as a plugin.. Comments should be "),a("em",[e._v("relevant")])])])]),e._v(" "),a("h2",{attrs:{id:"basic-coding-guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-coding-guidelines"}},[e._v("#")]),e._v(" Basic Coding Guidelines")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Hint")]),e._v(" "),a("p",[e._v("Above all, the code should be "),a("strong",[e._v("elegant")]),e._v(". It should be well-spaced and easy to follow.")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("There are no empty try/catch blocks")])]),e._v(" "),a("li",[a("p",[e._v("Don't call abstract methods in constructors (See here for an explanation: "),a("a",{attrs:{href:"http://www.artima.com/forums/flat.jsp?forum=226&thread=113723",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.artima.com/forums/flat.jsp?forum=226&thread=113723"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("Many of these rules are encapsulated by PMD tests")])]),e._v(" "),a("li",[a("p",[e._v("Private variables may begin with an underscore, but we specifically do not follow the Eclipse 'f' prefix convention. You should be consistent within your class.")])])]),e._v(" "),a("h2",{attrs:{id:"naming-conventions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#naming-conventions"}},[e._v("#")]),e._v(" Naming Conventions")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Interfaces begin with 'I'")])]),e._v(" "),a("li",[a("p",[e._v("Plugin Activator names are derived from the plugin package name.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v('Strip the first two segments from the plugin (generally "com.aptana" or "com.appcelerator" assuming a reverse domain name naming system)')])]),e._v(" "),a("li",[a("p",[e._v("Initial case the rest of the segments")])]),e._v(" "),a("li",[a("p",[e._v("Strip the periods")])]),e._v(" "),a("li",[a("p",[e._v('Add the word "Plugin" at the end. Some examples:')]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("com.aptana.scripting")]),e._v(" -> ScriptingPlugin")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("com.appcelerator.titanium.branding")]),e._v(" -> TitaniumBrandingPlugin")])])])])])]),e._v(" "),a("li",[a("p",[e._v("Plugin-specific classes (like I*SystemProperties, I*DebugScopes, I*PreferenceConstants) also follow the same convention for the creation of the * section as plugin activators")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("com.appcelerator.titanium.core")]),e._v(" -> ITitaniumCoreSystemProperties")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("com.aptana.editor.epl")]),e._v(" -> IEditorEplDebugScopes")])])])])]),e._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[e._v("Please ensure that the following header is at the top of each Studio file, or at least an equivalent header. We must have code which is EPL-compatible for the EPL plugins, and GPL compatable for all other Aptana plugins:")]),e._v(" "),a("h3",{attrs:{id:"gpl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpl"}},[e._v("#")]),e._v(" GPL")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n * Aptana Studio\n * Copyright (c) 2005-2011 by Appcelerator, Inc. All Rights Reserved.\n * Licensed under the terms of the GNU Public License (GPL) v3 (with exceptions).\n * Please see the license.html included with this distribution for details.\n * Any modifications to this file must keep this entire header intact.\n */\n")])])]),a("h3",{attrs:{id:"epl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#epl"}},[e._v("#")]),e._v(" EPL")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n * Copyright (c) 2005-2011 by Appcelerator, Inc. All Rights Reserved.\n * Licensed under the terms of the Eclipse Public License (EPL).\n * Please see the license.txt included with this distribution for details.\n * Any modifications to this file must keep this entire header intact.\n */\n")])])]),a("h3",{attrs:{id:"private-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-code"}},[e._v("#")]),e._v(" Private Code")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n * Appcelerator Titanium Studio\n * Copyright (c) 2011 by Appcelerator, Inc. All Rights Reserved.\n * Proprietary and Confidential - This source code is not for redistribution\n */\n")])])]),a("h2",{attrs:{id:"pmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pmd"}},[e._v("#")]),e._v(" PMD")]),e._v(" "),a("p",[e._v("We use PMD to check code consistency.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Within Eclipse go to Help->Software Updates->Find and Install")])]),e._v(" "),a("li",[a("p",[e._v("Choose Search for new features to install and press Next")])]),e._v(" "),a("li",[a("p",[e._v("Create a New Remote Site...")])]),e._v(" "),a("li",[a("p",[e._v("Input a name to your liking (for instance PMD Plug-in) and input the following URL: "),a("a",{attrs:{href:"http://pmd.sf.net/eclipse",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://pmd.sf.net/eclipse"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Click your way through the following pages to install the plug-in.")])])]),e._v(" "),a("p",[e._v("For those interested, our PMD file is located at: "),a("a",{attrs:{href:"https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana_pmd_rules.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana_pmd_rules.xml"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("You will need to download that file, set PMD preferences, clear out the existing rule set, and import the new one from this file. You can then manually run PMD on a file or package from the right-click menu.")]),e._v(" "),a("h2",{attrs:{id:"java-formatting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-formatting"}},[e._v("#")]),e._v(" Java Formatting")]),e._v(" "),a("p",[e._v("Our Java formatting conventions are relatively easy going, though we do add braces, always.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Download the file from "),a("a",{attrs:{href:"https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana_java_formatter_preferences.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana_java_formatter_preferences.xml"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Within Eclipse go to Window->Preferences->Java->Code Style->Formatter")])]),e._v(" "),a("li",[a("p",[e._v('Click on "Import..." and choose the file you just downloaded')])])]),e._v(" "),a("h2",{attrs:{id:"externalized-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#externalized-strings"}},[e._v("#")]),e._v(" Externalized Strings")]),e._v(" "),a("ol",[a("li",[a("p",[e._v('Right-click on a file, choose "Source", "Externalize Strings". Make sure the "Use Eclipse\'s String Mechanism" is checked. (See how this has been done this elsewhere, with a Messages class and a messages.properties file)')]),e._v(" "),a("ol",[a("li",[a("p",[e._v("This will require you to change the \"Common Prefix\". Just replace the '.' with a '"),a("em",[e._v("'. i.e. FileExplorerView. becomes FileExplorerView")])])]),e._v(" "),a("li",[a("p",[e._v('You will need to manually rename the keys that are to be externalized from the auto-numbers it creates. Just type something useful, like a pascal-cased shorthand for the original string: "ThisIsAnErrorMessage".')])])])]),e._v(" "),a("li",[a("p",[e._v("Do the externalization per-package, not per-plugin.")]),e._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("❗️ Warning")]),e._v(" "),a("p",[a("strong",[e._v("Make sure you add the messages.properties file to the build.properties file.")]),e._v(" You want to make sure that message.properties file is included in the binary build.")])])]),e._v(" "),a("li",[a("p",[e._v("Exclude "),a("em",[e._v("all")]),e._v(" strings in any unit testing plugins, or any case where it does not make sense to translate that piece of text.")]),e._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("❗️ Warning")]),e._v(" "),a("p",[a("strong",[e._v('Use StringUtils.format() instead of "string " + variable.')]),e._v(' Again, take a look at how we use this elsewhere. The easiest way to do this is to try and run the externalization wizard. Notice where you have "constructed" strings. Cancel out of the wizard, and then fix them. Then run the wizard again.')])])]),e._v(" "),a("li",[a("p",[e._v("Make sure you add the messages.properties file to source control")])]),e._v(" "),a("li",[a("p",[e._v("Also ensure that you comment all the methods in the messages file to remove any generated warnings")])])]),e._v(" "),a("h2",{attrs:{id:"unit-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-testing"}},[e._v("#")]),e._v(" Unit Testing")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Ensure that the current set of unit tests run before submitting your code, especially if it is a high-risk addition")])]),e._v(" "),a("li",[a("p",[e._v("Make sure you've added new unit tests for the new items you've added. If you can't unit test it, write a unit test for something else.")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);