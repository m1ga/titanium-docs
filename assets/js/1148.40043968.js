(window.webpackJsonp=window.webpackJsonp||[]).push([[1148],{2199:function(e,t,r){"use strict";r.r(t);var s=r(21),p=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"jff-1-0-specification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jff-1-0-specification"}},[e._v("#")]),e._v(" JFF 1.0 Specification")]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("This is a brief description of the JFF file format. This JSON-based format is used to describe the structure of other JSON files.")]),e._v(" "),r("h2",{attrs:{id:"top-level-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#top-level-properties"}},[e._v("#")]),e._v(" Top-Level Properties")]),e._v(" "),r("p",[e._v("The JFF file format consists of a single top-level object with the following properties: name, version, description, and types. Below is a description of each of these properties")]),e._v(" "),r("h3",{attrs:{id:"name-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#name-property"}},[e._v("#")]),e._v(" Name Property")]),e._v(" "),r("p",[e._v("This property names the format the JFF file describes.")]),e._v(" "),r("h3",{attrs:{id:"version-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version-property"}},[e._v("#")]),e._v(" Version Property")]),e._v(" "),r("p",[e._v("This property provides a version number for the format the JFF file describes.")]),e._v(" "),r("h3",{attrs:{id:"description-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-property"}},[e._v("#")]),e._v(" Description Property")]),e._v(" "),r("p",[e._v("This property gives a brief description of the format the JFF file describes.")]),e._v(" "),r("h3",{attrs:{id:"result-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#result-property"}},[e._v("#")]),e._v(" Result Property")]),e._v(" "),r("p",[e._v("This property indicates the top-level type that is returned when processing the format the JFF file describes.")]),e._v(" "),r("h3",{attrs:{id:"types-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#types-property"}},[e._v("#")]),e._v(" Types Property")]),e._v(" "),r("p",[e._v('This property lists all types used within the format the JFF file describes. The type referenced in the "result" property must be in this list and all types referenced by that type must also exist, excluding the built-in types: Boolean, Number, Null, Object, and String.')]),e._v(" "),r("h2",{attrs:{id:"types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),r("p",[e._v("Below is a list of types declared in the JFF file. These types are what are used to describe the format being described by the JFF file.")]),e._v(" "),r("h3",{attrs:{id:"schema-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#schema-type"}},[e._v("#")]),e._v(" Schema Type")]),e._v(" "),r("p",[e._v("This is the top-level type that encapsulates metadata about the format being described. A Schema types consists of the following properties: name, version, description, result, and types.")]),e._v(" "),r("h4",{attrs:{id:"name-property-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#name-property-2"}},[e._v("#")]),e._v(" Name Property")]),e._v(" "),r("p",[e._v("The name property names the format the JFF file describes This property is required.")]),e._v(" "),r("h4",{attrs:{id:"version-property-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version-property-2"}},[e._v("#")]),e._v(" Version Property")]),e._v(" "),r("p",[e._v("This property provides a version number for the format the JFF file describes. This property is required.")]),e._v(" "),r("h4",{attrs:{id:"description-property-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-property-2"}},[e._v("#")]),e._v(" Description Property")]),e._v(" "),r("p",[e._v("This property gives a brief description of the format the JFF file describes. This property is optional.")]),e._v(" "),r("h4",{attrs:{id:"result-property-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#result-property-2"}},[e._v("#")]),e._v(" Result Property")]),e._v(" "),r("p",[e._v("This property indicates the top-level type that is returned when processing the format the JFF file describes. This property is required.")]),e._v(" "),r("h4",{attrs:{id:"types-property-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#types-property-2"}},[e._v("#")]),e._v(" Types Property")]),e._v(" "),r("p",[e._v('This property lists all types used within the format the JFF file describes. The type referenced in the "result" property must be in this list and all types referenced by that type must also exist, excluding the built-in types: Boolean, Number, Null, Object, and String. This property is optional.')]),e._v(" "),r("h3",{attrs:{id:"type-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#type-type"}},[e._v("#")]),e._v(" Type Type")]),e._v(" "),r("p",[e._v("A Type type captures the structure of a given item in the structure being described by the JFF file. A Type consists of the following properties: name, description, and properties.")]),e._v(" "),r("h4",{attrs:{id:"name-property-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#name-property-3"}},[e._v("#")]),e._v(" Name Property")]),e._v(" "),r("p",[e._v("This property gives the type a unique name. This property is required.")]),e._v(" "),r("h4",{attrs:{id:"description-property-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-property-3"}},[e._v("#")]),e._v(" Description Property")]),e._v(" "),r("p",[e._v("This property briefly describes what this type encapsulates. This property is optional.")]),e._v(" "),r("h4",{attrs:{id:"properties-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties-property"}},[e._v("#")]),e._v(" Properties Property")]),e._v(" "),r("p",[e._v("This property lists all properties that make up this type. This property is optional.")]),e._v(" "),r("h3",{attrs:{id:"property-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#property-type"}},[e._v("#")]),e._v(" Property Type")]),e._v(" "),r("p",[e._v("The Property Type captures information about each property on a Type. A Property consists of the following properties: name, type, description, and example.")]),e._v(" "),r("h4",{attrs:{id:"name-property-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#name-property-4"}},[e._v("#")]),e._v(" Name Property")]),e._v(" "),r("p",[e._v("The name property names the Property instance of a type. This property is required.")]),e._v(" "),r("h4",{attrs:{id:"type-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#type-property"}},[e._v("#")]),e._v(" Type Property")]),e._v(" "),r("p",[e._v("The type property specifies the type of the Property. This property is required.")]),e._v(" "),r("h4",{attrs:{id:"description-property-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-property-4"}},[e._v("#")]),e._v(" Description Property")]),e._v(" "),r("p",[e._v("This property gives a brief description of the Property. This property is optional.")]),e._v(" "),r("h4",{attrs:{id:"example-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-property"}},[e._v("#")]),e._v(" Example Property")]),e._v(" "),r("p",[e._v("This property provides examples of the Property in use. This property is optional.")]),e._v(" "),r("h4",{attrs:{id:"optional-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-property"}},[e._v("#")]),e._v(" Optional Property")]),e._v(" "),r("p",[e._v("The optional property is a flag indicating if this property is required or not. This property is optional.")])])}),[],!1,null,null,null);t.default=p.exports}}]);