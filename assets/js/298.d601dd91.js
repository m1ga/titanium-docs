(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1993:function(e,t,o){"use strict";o.r(t);var r=o(21),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"ruby-development"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ruby-development"}},[e._v("#")]),e._v(" Ruby Development")]),e._v(" "),r("p",[e._v("Aptana Studio is shipped with built-in support for Ruby editing. To add Ruby editing support in Titanium and Appcelerator Studio, see "),r("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Getting_Started/Adding_PHP_Ruby_or_Python_Support/"}},[e._v("Adding PHP Ruby or Python Support")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"preparing-for-ruby-development"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preparing-for-ruby-development"}},[e._v("#")]),e._v(" Preparing for Ruby development")]),e._v(" "),r("p",[e._v("Studio will not attempt to install Ruby for you. Please be sure that Ruby is installed, working, and is on your PATH before using Ruby features in Studio 3. For Windows, we recommend the "),r("a",{attrs:{href:"http://railsinstaller.org/en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rails Installer"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Studio attempts to maintain the same environment used and seen inside your terminal. As a result, we use the PATH to find the applicable Ruby executable, libraries, gems, and bin scripts. We also respect RVM's settings and use of .rvmrc files. Please be sure to test out the environment inside our embedded Terminal view or editor to see if it matches your expectations.")]),e._v(" "),r("p",[r("strong",[e._v("If you plan to make use of the debugger")]),e._v(", you may also want to consult "),r("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Ruby_Development/Ruby_Debugger/#pre-requisites"}},[e._v("Ruby Debugger Pre-requisites")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"creating-importing-a-ruby-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-importing-a-ruby-project"}},[e._v("#")]),e._v(" Creating/Importing a Ruby project")]),e._v(" "),r("h3",{attrs:{id:"creating-a-project-using-the-new-project-wizard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-project-using-the-new-project-wizard"}},[e._v("#")]),e._v(" Creating a project using the new project wizard")]),e._v(" "),r("p",[e._v("The Ruby project wizard can be accessed through multiple locations in the workspace.\nA project can be created through the "),r("strong",[e._v("File")]),e._v(" > "),r("strong",[e._v("New")]),e._v(" > "),r("strong",[e._v("Ruby Project")]),e._v(", or by right-clicking the "),r("strong",[e._v("Project Explorer")]),e._v(" or the "),r("strong",[e._v("App Explorer")]),e._v(" and select "),r("strong",[e._v("New")]),e._v(" > "),r("strong",[e._v("Ruby Project")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:o(807),alt:"ruby_project_wizard"}})]),e._v(" "),r("p",[e._v("While importing a Ruby project, the wizard also gives you the option to use git to clone a URI to generate the project.")]),e._v(" "),r("p",[e._v('If you have a project that already exists on disk, you can use the new project wizard to "import" the project as well. Just point the Location at the existing project root.')]),e._v(" "),r("h2",{attrs:{id:"editing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#editing"}},[e._v("#")]),e._v(" Editing")]),e._v(" "),r("p",[e._v("The Ruby editor provides specialized features for editing Ruby code.")]),e._v(" "),r("p",[e._v("Associated with the editor is a Ruby-specific Outline view, which shows the structure of the active Ruby script. It is updated as the user edits the script.")]),e._v(" "),r("p",[e._v("The editor includes the following features:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Syntax Coloring according to the selected theme in the preferences")])]),e._v(" "),r("li",[r("p",[e._v("Content/code assist")])]),e._v(" "),r("li",[r("p",[e._v("Code formatting")])]),e._v(" "),r("li",[r("p",[e._v("Auto Indentation")])]),e._v(" "),r("li",[r("p",[e._v("Integrated debugging features")])])]),e._v(" "),r("p",[e._v("The most common way to invoke the Ruby editor is to open a Ruby file from the App Explorer or Project Explorer using pop-up menus or by double-clicking the file.")]),e._v(" "),r("p",[e._v("Paste in your files, import them, or create new ones using the new file wizard.")]),e._v(" "),r("p",[e._v("When in the 'App Explorer', the new file wizard will offer you to create a file from a template as an option on the 'Next' page. These file-templates are contributed by the \"Ruby Ruble\".")]),e._v(" "),r("h3",{attrs:{id:"syntax-coloring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntax-coloring"}},[e._v("#")]),e._v(" Syntax coloring")]),e._v(" "),r("p",[e._v("Like with any other Studio-contributed editor, the syntax highlighting settings are controlled by the 'Theme' preference page in the Studio's preferences.")]),e._v(" "),r("p",[e._v("The following list displays the keys supported by the Ruby Editor: "),r("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/#themes-in-rubles"}},[e._v("Themes#ThemesinRubles")]),e._v(".")],1),e._v(" "),r("h3",{attrs:{id:"code-completion-content-assist"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#code-completion-content-assist"}},[e._v("#")]),e._v(" Code completion / content assist")]),e._v(" "),r("p",[e._v("Code Assist does not automatically appear for Ruby, unlike HTML/CSS/JS. If you press "),r("strong",[e._v("Ctrl")]),e._v(" + "),r("strong",[e._v("Space")]),e._v(" in the ruby editor, Content Assist will be invoked.")]),e._v(" "),r("p",[e._v("The Ruby content assist is special in that it is implemented entirely in (J)Ruby code inside the ruby ruble: "),r("a",{attrs:{href:"https://github.com/aptana/ruby.ruble",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/aptana/ruby.ruble"),r("OutboundLink")],1),e._v(".\nWe strongly encourage users to fork and contribute additions/bugfixes/etc. (For details on rubles, see "),r("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/"}},[e._v("Ruble Specification")]),e._v(").")],1),e._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),r("p",[e._v("The content assist relies on an "),r("strong",[e._v("indexing")]),e._v(" process that is performed on the workspace and the edited files. Inconsistent index state, like the one that may occur when turning off the 'Auto Building' option, may result in wrong or no accurate assistance.")])]),e._v(" "),r("h3",{attrs:{id:"auto-indentation-and-code-formatting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#auto-indentation-and-code-formatting"}},[e._v("#")]),e._v(" Auto indentation and code formatting")]),e._v(" "),r("p",[e._v("Auto indentation is done as you type and move to a new line. For example, when starting an "),r("code",[e._v("if")]),e._v(" block and hitting the 'Return' key, the next edit position in the new line will be indented under that "),r("code",[e._v("if")]),e._v(".")]),e._v(" "),r("p",[e._v("Code formatting is an advanced feature that allows you to format your entire file as a post-editing action. The formatter is triggered by clicking Ctrl + Shift + F, or by selecting "),r("strong",[e._v("Source")]),e._v(" > "),r("strong",[e._v("Format")]),e._v(" in the editor's pop-up menu or top menu-bar.")]),e._v(" "),r("p",[e._v("The code formatter settings can be tweaked through the Studio's preferences. You can create your formatting profile and edit it to your needs.")]),e._v(" "),r("p",[e._v("The Ruby code formatter provides control over the indentation-levels, blank-lines comments.")]),e._v(" "),r("p",[e._v("As of version 3.0.4, the formatter also provides an ability to turn off and turn on formatting for specific sections of code.")]),e._v(" "),r("p",[e._v("For example:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# @formatter:off\ncase a % 2\n  when 1\n    puts "odd"\n  when 0\n    puts "even"\nend\n# @formatter:on\n')])])]),r("p",[e._v("Note that the 'off' and 'on' tags are also customizable through the formatter preferences.")]),e._v(" "),r("h2",{attrs:{id:"related-topics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[e._v("#")]),e._v(" Related topics")]),e._v(" "),r("ul",[r("li",[r("p",[r("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Ruby_Development/Ruby_Debugger/"}},[e._v("Ruby Debugger")])],1)]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Ruby_Development/Ruby_Outline_View/"}},[e._v("Ruby Outline View")])],1)])])])}),[],!1,null,null,null);t.default=i.exports},807:function(e,t,o){e.exports=o.p+"assets/img/ruby_project_wizard.580abee5.png"}}]);