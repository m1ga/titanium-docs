(window.webpackJsonp=window.webpackJsonp||[]).push([[1116],{2241:function(e,t,i){"use strict";i.r(t);var n=i(21),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"adding-new-command-line-options"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-command-line-options"}},[e._v("#")]),e._v(" Adding new Command-Line Options")]),e._v(" "),i("p",[e._v("If you wish a user to have additional control over their environment, you can implement properties to modify the application's behavior from the command line or configuration files.")]),e._v(" "),i("h2",{attrs:{id:"setting-properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-properties"}},[e._v("#")]),e._v(" Setting Properties")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Reference "),i("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Adding_Command-Line_Options/"}},[e._v("Adding Command-Line Options")]),e._v(". These are all considered VM arguments.")],1)]),e._v(" "),i("li",[i("p",[e._v("A full list of default Eclipse properties may be found "),i("a",{attrs:{href:"http://help.eclipse.org/indigo/index.jsp?topic=/org.eclipse.platform.doc.isv/reference/misc/runtime-options.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(".")])])]),e._v(" "),i("h2",{attrs:{id:"creating-a-new-property"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-property"}},[e._v("#")]),e._v(" Creating a New Property")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Create a new Interface of the form I*SystemProperties, where * is derived from the name of the plugin. See "),i("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Source_Code_Conventions/"}},[e._v("here")]),e._v(" for naming conventions")],1),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('package com.appcelerator.titanium.ui;\n\n/**\n * Various options that can be passed on the command line to control Studio behavior\n *\n * @author ingo\n */\npublic interface ITitaniumUISystemProperties\n{\n  /**\n   * The url of the Titanium dashboard\n   */\n  public static String DASHBOARD_URL = "titanium.dashboardUrl"; //$NON-NLS-1$\n\n}\n')])])])]),e._v(" "),i("li",[i("p",[e._v("Create a new string for the system property. Note the following naming convention:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("titanium.camelCasedString for items in the Titanium set of plugins")])]),e._v(" "),i("li",[i("p",[e._v("studio.camelCasedName for items that affect the Aptana set of plugins")])])])]),e._v(" "),i("li",[i("p",[e._v("Use EclipseUtils.isSystemPropertyEnabled() and EclipseUtils.getSystemProperty() to check if the specified option is defined, or the value in question")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);