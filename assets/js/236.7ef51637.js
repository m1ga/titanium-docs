(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{2583:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"date-time-pickers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date-time-pickers"}},[t._v("#")]),t._v(" Date Time Pickers")]),t._v(" "),s("p",[t._v("Demonstrates how to create a date/time picker using the Picker control.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Example App Source Location")]),t._v(" "),s("p",[t._v("You can find this example app in the Alloy repository under "),s("a",{attrs:{href:"https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/datetime_picker",target:"_blank",rel:"noopener noreferrer"}},[t._v("samples/apps/ui/datetime_picker"),s("OutboundLink")],1),t._v(". Check the "),s("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/"}},[t._v("instructions")]),t._v(" how to run these sample projects.")],1)]),t._v(" "),s("p",[t._v("The Picker control is used to let a user select one or more fixed values. You can set the "),s("code",[t._v("type")]),t._v(" property of a Picker to display different types of information including "),s("a",{attrs:{href:"#!/api/Titanium.UI-property-PICKER_TYPE_DATE_AND_TIME"}},[t._v("PICKER_TYPE_DATE_AND_TIME")]),t._v(" and "),s("a",{attrs:{href:"#!/api/Titanium.UI-property-PICKER_TYPE_DATE"}},[t._v("PICKER_TYPE_DATE")]),t._v(". Set the "),s("code",[t._v("type")]),t._v(" attribute to one of the date/time picker types. Then, supply the date in the XML or TSS as a string that can be parsed by the moment.js library.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(333),alt:"screenshot"}})]),t._v(" "),s("p",[t._v("The main index.xml view in the sample application sets the Picker element's "),s("code",[t._v("type")]),t._v(" property to "),s("code",[t._v("Ti.UI.PICKER_TYPE_DATE")]),t._v(", and sets the minimum and maximum dates the control will display.")]),t._v(" "),s("p",[s("strong",[t._v("app/views/index.xml")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n      The text field is included to show that its value attribute\n      will not be parsed as a date, which is how the Picker's value\n      attribute will be treated.\n    --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TextField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("July 4, 2014"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("20"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("picker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Ti.UI.PICKER_TYPE_DATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("minDate")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2013-02-08 09:30:26 Z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("maxDate")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2015,11,17"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- the value (selected date) is being set in the TSS --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Picker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Window")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("The initial time displayed by the Picker control is set in the main view's TSS file. A Picker's "),s("code",[t._v("value")]),t._v(" property can be any string that can parsed as a date by the "),s("a",{attrs:{href:"http://momentjs.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Moment.js"),s("OutboundLink")],1),t._v(" library included with Alloy projects.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("'#index': {\n    backgroundColor: '#fff',\n    fullscreen: false,\n    exitOnClose: true\n}\n\"#picker\": {\n    value: \"December 17, 2013\"\n}\n'#index[platform=android]': {\n    backgroundColor: '#000'\n}\n")])])]),s("h2",{attrs:{id:"see-also"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"#!/api/Titanium.UI.Picker"}},[t._v("Titanium.UI.Picker API reference")])])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"#!/api/Titanium.UI.Picker-property-type"}},[t._v("Titanium.UI.Picker.type property API reference")])])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://momentjs.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Moment.js"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=n.exports},333:function(t,a,e){t.exports=e.p+"assets/img/screenshot.1007416c.png"}}]);