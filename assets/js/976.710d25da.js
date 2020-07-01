(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{2086:function(e,t,a){"use strict";a.r(t);var s=a(21),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"documenting-your-code-using-scriptdoc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documenting-your-code-using-scriptdoc"}},[e._v("#")]),e._v(" Documenting Your Code Using ScriptDoc")]),e._v(" "),a("p",[e._v("Using Studio's ScriptDoc system to document your code enables Content Assist to work for your code in addition to built-in support the core JavaScript language. This page gives some of the guidelines to think about when adding ScriptDoc blocks to your code.")]),e._v(" "),a("p",[e._v("A "),a("a",{attrs:{href:"http://www.scribd.com/doc/10040039/ScriptDoc-Cheatsheet-v01",target:"_blank",rel:"noopener noreferrer"}},[e._v("nice one-page cheat sheet"),a("OutboundLink")],1),e._v(" for ScriptDoc on Scribd is posted.")]),e._v(" "),a("h2",{attrs:{id:"basic-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-instructions"}},[e._v("#")]),e._v(" Basic Instructions")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Add a documentation block immediately before each function or class. The ScriptDoc parser automatically associates the documentation block with the function or class following it.")])]),e._v(" "),a("li",[a("p",[e._v("Enclose each documentation block within a slash-asterisk-asterisk")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(/**)\n")])])])]),e._v(" "),a("p",[e._v("and asterisk-slash")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(*/)\n")])])])]),e._v(" "),a("p",[e._v("comment set.")])]),e._v(" "),a("li",[a("p",[e._v("The first line in the block, except for file overviews, should be a short description of the function or class.")])]),e._v(" "),a("li",[a("p",[e._v("After the description, add "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Specifications/ScriptDoc_(SDOC)_2.0_Specification/"}},[e._v("tags")]),e._v(" that explain the function, including a description, what parameters it takes, and its return type. You can also use the "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/ScriptDoc_tag_quick_reference/"}},[e._v("ScriptDoc tag quick reference")]),e._v(" to quickly lookup a tag once you are familiar with the syntax for each tag.")],1)])]),e._v(" "),a("h2",{attrs:{id:"example-a-basic-documentation-block-for-a-getfoo-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-a-basic-documentation-block-for-a-getfoo-function"}},[e._v("#")]),e._v(" Example: A basic documentation block for a getFoo() function")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * Gets the current foo\n * @param {String} fooId  The unique identifier for the foo.\n * @return {Object}          Returns the current foo.\n */")]),e._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getFoo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("fooID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"ordering-your-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ordering-your-tags"}},[e._v("#")]),e._v(" Ordering your tags")]),e._v(" "),a("p",[e._v("Add your tags in the following order, as appropriate:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("@classDescription (constructors only)")])]),e._v(" "),a("li",[a("p",[e._v("@param (classes, interfaces, functions, and constructors only)")])]),e._v(" "),a("li",[a("p",[e._v("@return (functions only)")])]),e._v(" "),a("li",[a("p",[e._v("@type (functions only)")])]),e._v(" "),a("li",[a("p",[e._v("@author (classes and interfaces only, required)")])]),e._v(" "),a("li",[a("p",[e._v("@version (classes and interfaces only, required)")])]),e._v(" "),a("li",[a("p",[e._v("@see")])]),e._v(" "),a("li",[a("p",[e._v("@since")])]),e._v(" "),a("li",[a("p",[e._v("@deprecated")])])]),e._v(" "),a("h2",{attrs:{id:"guidelines-for-ordering-multiple-versions-of-the-same-tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guidelines-for-ordering-multiple-versions-of-the-same-tag"}},[e._v("#")]),e._v(" Guidelines for ordering multiple versions of the same tag")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("@author - List @author tags chronologically, starting with the author who created the file or function.")])]),e._v(" "),a("li",[a("p",[e._v("@param - List @param tags in argument declaration order.")])]),e._v(" "),a("li",[a("p",[e._v("@see - List @see tags from nearest to furthest access, shown below:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@see #Constructor(Type, Type...)\n @see #Constructor(Type id, Type id...)\n @see #method(Type, Type,...)\n @see #method(Type id, Type, id...)\n @see Class\n @see Class#field\n @see Class#Constructor(Type, Type...)\n @see Class#Constructor(Type id, Type id)\n @see Class#method(Type, Type,...)\n @see Class#method(Type id, Type id,...)\n @see package.Class\n @see package.Class#field\n @see package.Class#Constructor(Type, Type...)\n @see package.Class#Constructor(Type id, Type id)\n @see package.Class#method(Type, Type,...)\n @see package.Class#method(Type id, Type, id)\n @see package\n")])])]),a("h2",{attrs:{id:"related-topics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[e._v("#")]),e._v(" Related Topics")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Content_Assist/About_Content_Assist/"}},[e._v("About Content Assist")])],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Specifications/ScriptDoc_(SDOC)_2.0_Specification/"}},[e._v("ScriptDoc (SDOC) 2.0 Specification")])],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/ScriptDoc_tag_quick_reference/"}},[e._v("ScriptDoc tag quick reference")])],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);