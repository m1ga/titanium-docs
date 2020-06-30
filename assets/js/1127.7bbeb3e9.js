(window.webpackJsonp=window.webpackJsonp||[]).push([[1127],{2227:function(e,a,t){"use strict";t.r(a);var s=t(21),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"eclipse-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-commands"}},[e._v("#")]),e._v(" Eclipse Commands")]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("The examples on this page use the "),t("em",[t("strong",[e._v("Prototype")])]),e._v(" library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("Eclipse has a "),t("em",[e._v("Command Handling")]),e._v(" system that is invoked through an internal "),t("em",[e._v("Command Service")]),e._v(". Those commands are contributed via Eclipse extensions and can be called using the portal.")]),e._v(" "),t("p",[e._v("To invoke a specific command, a command ID, and optional command arguments, need to be provided to the Portal's "),t("em",[e._v("dispatch")]),e._v(" call. These IDs are, in some cases, hidden deep inside Eclipse, so an Eclipse knowledge is needed to find out what they are. We list at the bottom of this page a few common ID's and their usage with the "),t("em",[e._v("dispatch")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"invocation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invocation"}},[e._v("#")]),e._v(" Invocation")]),e._v(" "),t("p",[e._v("This command is executed immediately in a synchronous way.")]),e._v(" "),t("h2",{attrs:{id:"a-generic-eclipse-command-handler-invocation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-generic-eclipse-command-handler-invocation"}},[e._v("#")]),e._v(" A generic Eclipse command-handler invocation")]),e._v(" "),t("p",[e._v("Executing an Eclipse command that does not require any arguments:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('dispatch($H({\n  controller: \'portal.commands\',\n  action: "execute",\n  args: ["org.eclipse.ui.help.aboutAction"].toJSON()\n}).toJSON());\n')])])]),t("h2",{attrs:{id:"an-eclipse-command-that-accepts-arguments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-eclipse-command-that-accepts-arguments"}},[e._v("#")]),e._v(" An Eclipse command that accepts arguments")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('dispatch($H({\n controller: \'portal.commands\',\n action: "execute",\n args: ["org.eclipse.ui.views.showView", {"org.eclipse.ui.views.showView.viewId": "org.eclipse.debug.ui.BreakpointView"}].toJSON()\n}).toJSON());\n')])])]),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"open-studio-s-new-web-project-wizard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-studio-s-new-web-project-wizard"}},[e._v("#")]),e._v(' Open Studio\'s "New Web Project Wizard"')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('dispatch($H({\n  controller: \'portal.commands\',\n  action: "execute",\n  args: ["org.eclipse.ui.newWizard", {"newWizardId": "com.aptana.ui.wizards.NewWebProject"}].toJSON()\n}).toJSON());\n')])])]),t("h3",{attrs:{id:"open-titanium-studio-new-mobile-app-project-wizard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-titanium-studio-new-mobile-app-project-wizard"}},[e._v("#")]),e._v(' Open Titanium Studio "New Mobile App Project Wizard"')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('dispatch($H({\n  controller: \'portal.commands\',\n  action: "execute",\n  args: ["org.eclipse.ui.newWizard", {"newWizardId": "com.appcelerator.titanium.mobile.project_wizard"}].toJSON()\n}).toJSON());\n')])])]),t("h3",{attrs:{id:"open-titanium-studio-new-desktop-project-wizard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-titanium-studio-new-desktop-project-wizard"}},[e._v("#")]),e._v(' Open Titanium Studio "New Desktop Project Wizard"')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('dispatch($H({\n  controller: \'portal.commands\',\n  action: "execute",\n  args: ["org.eclipse.ui.newWizard", {"newWizardId": "com.appcelerator.titanium.desktop.project_wizard"}].toJSON()\n}).toJSON());\n')])])])])}),[],!1,null,null,null);a.default=i.exports}}]);