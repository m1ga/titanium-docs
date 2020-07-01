(window.webpackJsonp=window.webpackJsonp||[]).push([[881],{2129:function(t,e,i){"use strict";i.r(e);var a=i(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"filtering-ruble-items-per-platform"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#filtering-ruble-items-per-platform"}},[t._v("#")]),t._v(" Filtering Ruble Items Per-Platform")]),t._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),i("p",[t._v("Sometimes you want a snippet, command, sample, or another item to only appear on certain platforms. To do so, you can use some platform specifiers.")]),t._v(" "),i("h2",{attrs:{id:"wrapping-an-item-in-a-per-platform-conditional"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-an-item-in-a-per-platform-conditional"}},[t._v("#")]),t._v(" Wrapping an item in a per-platform conditional")]),t._v(" "),i("p",[t._v("In the example below, we only want the sample to appear on OSX.")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('require \'ruble\'\n\nif Ruble.is_mac?\n  project_sample "Kitchen Sink" do |s|\n    s.id = "com.appcelerator.titanium.mobile.samples.kitchensink"\n    s.category = "com.appcelerator.titanium.mobile.samples.category"\n    s.location = "git://github.com/appcelerator/KitchenSink.git"\n    s.description = "A sample Titanium Mobile project that demonstrates a variety of APIs available in Titanium Mobile"\n    s.natures = ["com.appcelerator.titanium.mobile.nature", "com.aptana.projects.webnature"]\n    s.icon = "http://preview.appcelerator.com/dashboard/img/icons/icon_kitchen_sink.png"\n  end\nend\n')])])]),i("table",[i("thead",[i("tr",[i("th",[t._v("Platform")]),t._v(" "),i("th",[t._v("Test")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Windows")]),t._v(" "),i("td",[t._v("is_windows?")])]),t._v(" "),i("tr",[i("td",[t._v("Windows XP")]),t._v(" "),i("td",[t._v("is_windows_xp?")])]),t._v(" "),i("tr",[i("td",[t._v("Windows Vista")]),t._v(" "),i("td",[t._v("is_windows_7?")])]),t._v(" "),i("tr",[i("td",[t._v("Windows 7")]),t._v(" "),i("td",[t._v("is_windows_vista?")])]),t._v(" "),i("tr",[i("td",[t._v("OS X")]),t._v(" "),i("td",[t._v("is_mac?")])]),t._v(" "),i("tr",[i("td",[t._v("Unix (includes Linux)")]),t._v(" "),i("td",[t._v("is_unix?")])])])]),t._v(" "),i("h2",{attrs:{id:"specifying-per-platform-options"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specifying-per-platform-options"}},[t._v("#")]),t._v(" Specifying per-platform options")]),t._v(" "),i("p",[t._v("Sometimes, you want an item to be bound to a different key per-platform. That can be done by using the "),i("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/#platform_specifier"}},[t._v("PLATFORM_SPECIFIER")]),t._v(". However, you could accomplish the same thing by conditionally setting the property using the same syntax as above with "),i("code",[t._v("Ruble.is_mac")]),t._v(", for example.")],1),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("require 'ruble'\n\ncommand 'Add to multifile Gist' do |cmd|\n  cmd.key_binding.mac = 'CONTROL+OPTION+COMMAND+G' # aka M1+M3+M4+G\n  cmd.key_binding = 'M1+M3+G'\n  cmd.output = :show_as_tooltip\n  cmd.input = :selection, :document\n  cmd.invoke do\n    require \"gist\"\n\n    Gist.process_selection\n  end\nend\n")])])]),i("p",[t._v("Currently, only the following properties support platform specifiers:")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("key_binding")])]),t._v(" "),i("li",[i("p",[t._v("invoke")])])]),t._v(" "),i("p",[t._v("Alternatively, you could also wrap the setting of various properties in conditionals that test the platform using the calls from the previous section.")])])}),[],!1,null,null,null);e.default=n.exports}}]);