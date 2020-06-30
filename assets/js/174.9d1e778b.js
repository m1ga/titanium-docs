(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1769:function(e,t,o){"use strict";o.r(t);var a=o(21),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"windows-platform-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-platform-overview"}},[e._v("#")]),e._v(" Windows Platform Overview")]),e._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("❗️ Warning")]),e._v(" "),a("p",[e._v("As of Titanium 9.0.0, building Windows apps is no longer supported.")])]),e._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("❗️ Warning")]),e._v(" "),a("p",[e._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA")])]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("The Titanium SDK allows you to develop ARM-based or x86-based applications for Windows, which will be referred to as Windows Phone and Windows Store apps, respectively. Windows Phone applications run on Windows Phone devices, while Windows Store apps run on tablets.")]),e._v(" "),a("p",[e._v("Both Windows Phone and Store apps share common APIs, UI elements and design. The main difference between the two platforms are the device's form factor. The table below provides some generalized specifications.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Form Factor")]),e._v(" "),a("th",[e._v("Phone")]),e._v(" "),a("th",[e._v("Tablet")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Display type/Resolution")]),e._v(" "),a("td",[e._v("1080p, 720p, WXGA, WVGA")]),e._v(" "),a("td",[e._v("1024 x 768 and larger")])]),e._v(" "),a("tr",[a("td",[e._v("Screen Size")]),e._v(" "),a("td",[e._v('4" - 6"')]),e._v(" "),a("td",[e._v('> 10"')])]),e._v(" "),a("tr",[a("td",[e._v("Default Orientation")]),e._v(" "),a("td",[e._v("Portrait")]),e._v(" "),a("td",[e._v("Landscape")])])])]),e._v(" "),a("p",[e._v("More details about each platform are provided in the sections below.")]),e._v(" "),a("h2",{attrs:{id:"windows-phone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-phone"}},[e._v("#")]),e._v(" Windows Phone")]),e._v(" "),a("p",[e._v("Windows Phone is a mobile operating system developed by Microsoft. The Windows Phone OS contains many features common in most modern mobile operating systems, such as a virtual keyboard, multimedia capabilities, web browsing, voice search, email, contacts, multitasking, and so forth.")]),e._v(" "),a("p",[e._v("The OS is based on Microsoft's Metro design language, which relies more heavily on typography rather than graphics. The Start screen is a collection of live tiles that link to applications or other functionality. The tiles are updated regularly to show the user current application information and are customizable by the user. Swiping left on the right edge of the screen reveals the "),a("strong",[e._v("All apps")]),e._v(" screen. Use the "),a("strong",[e._v("All apps")]),e._v(" screen to launch an application not in the Start screen.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(884),alt:"windowsUI"}})]),e._v(" "),a("h3",{attrs:{id:"hardware-buttons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-buttons"}},[e._v("#")]),e._v(" Hardware buttons")]),e._v(" "),a("p",[e._v("Windows Phone devices may have three hardware buttons for navigation:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Start")]),e._v(": Returns the user to the Start screen.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Back")]),e._v(": Allows the user to go to the previous screen.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Search")]),e._v(": Allows the user to search for content.")])])]),e._v(" "),a("h3",{attrs:{id:"user-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-interface"}},[e._v("#")]),e._v(" User interface")]),e._v(" "),a("p",[e._v("A Windows Phone application is divided into three parts:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Navigation elements")]),e._v(": Commonly located at the top of the application, the navigation elements help the user find the content they want to display. For example, the pivot control (similar to a tab bar) is located here and guides the user through the application's content.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Content")]),e._v(": Information or controls to present to the user.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Command elements")]),e._v(": Commonly located at the bottom of the application, the command elements provide the user alternative ways to interact with your application. For example, the command bar can be used to provide additional functionality.")])])]),e._v(" "),a("p",[e._v("If the phone is in landscape mode, the navigation and command elements will appear on the sides.")]),e._v(" "),a("h2",{attrs:{id:"windows-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-store"}},[e._v("#")]),e._v(" Windows Store")]),e._v(" "),a("p",[e._v("To support tablet form factors, build and deploy Windows Store apps. Windows Store apps are applications that run on the Windows OS as opposed to the Windows Phone OS. Windows Store and Windows Phone apps share similar APIs, design and user interface elements, such as the Start screen, navigation elements and command elements. The list below notes some of the differences between the two types of applications:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The content of Windows Store apps use the entire screen. To display some command and navigation elements, such as the command bar, you need to click the More icon ("),a("strong",[a("code",[e._v("[...]")])]),e._v(") located in one of the corners of the application.")])]),e._v(" "),a("li",[a("p",[e._v("The only hardware button a Windows tablet provides is the Start button. You will need to build the back navigation into your application if you need to use that feature.")])]),e._v(" "),a("li",[a("p",[e._v("To get to the "),a("strong",[e._v("All apps")]),e._v(" screen, from the bottom edge of the screen, swipe up.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:o(885),alt:"ws_tablet"}})]),e._v(" "),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further reading")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://dev.windows.com/en-us/design/design-basics",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Dev Center: Design basics"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports},884:function(e,t,o){e.exports=o.p+"assets/img/windowsUI.d18e4776.png"},885:function(e,t,o){e.exports=o.p+"assets/img/ws_tablet.8c48f410.png"}}]);