(window.webpackJsonp=window.webpackJsonp||[]).push([[1077],{2308:function(e,t,o){"use strict";o.r(t);var a=o(21),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"creating-a-new-ruble"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-ruble"}},[e._v("#")]),e._v(" Creating a new Ruble")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("If you want to extend the functionality of Studio, you can do so by creating a new Ruble or extending an existing one.")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("Starting with Studio Release 3.1.0, the Ruby editor is no longer included as part of the Studio installer. To edit Rubles in Studio, install the Ruby plug-in as instructed in "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Getting_Started/Adding_PHP_Ruby_or_Python_Support/"}},[e._v("Adding PHP Ruby or Python Support")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"creating-a-new-ruble-using-the-wizard"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-ruble-using-the-wizard"}},[e._v("#")]),e._v(" Creating a new Ruble Using the Wizard")]),e._v(" "),o("p",[e._v("Studio greatly simplifies the process of creating your Ruble.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("From the menu, select "),o("strong",[e._v("File > New > Ruby Project")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("Ruble Template")]),e._v(", then click "),o("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v('Type the name of your Ruble, for example, "my.ruble".')])]),e._v(" "),o("li",[o("p",[e._v('Ensure the "I\'ll generate my own code..." radio is selected, then click '),o("strong",[e._v("Finish")]),e._v(".")])])]),e._v(" "),o("p",[e._v("The ruble is created in your workspace.")]),e._v(" "),o("h2",{attrs:{id:"a-bare-bones-ruble-from-scratch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-bare-bones-ruble-from-scratch"}},[e._v("#")]),e._v(" A bare-bones Ruble from Scratch")]),e._v(" "),o("p",[e._v("The "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/"}},[e._v("Ruble Specification")]),e._v(" lists the complete set of items that can be created, but at the bare minimum, you need a folder and a single bundle.rb file to create a ruble. The only difference is where you place the files.")],1),e._v(" "),o("p",[e._v("We list the steps to create a very simple ruble. Below these steps, we illustrate where you can place this Ruble for different effects.")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("Make sure the "),o("em",[e._v("rublename")]),e._v(" you choose below is unique to all your installed rubles, or otherwise, you will end up overriding an existing Ruble's functionality. Also note this is a tiny bit more complicated than it ought to be--we'll make this easier in future versions.")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("You want to figure out first where your Application Rubles folder lives.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Mac: $home/Documents/Aptana Rubles.")])]),e._v(" "),o("li",[o("p",[e._v("Everywhere else: ${user.home}/Aptana Rubles. On Windows, that would translate to somewhere like c:\\Users\\Username\\Aptana Rubles")])]),e._v(" "),o("li",[o("p",[e._v('If you still can\'t find the location, look for your user.home java property. Open up the "About Studio" menu, then '),o("strong",[e._v("Installation Details > Configuration")]),e._v(", and search for the user.home property.")])])])]),e._v(" "),o("li",[o("p",[e._v("Create a new Ruby project. ("),o("strong",[e._v("File > New Ruby Project")]),e._v(")")])]),e._v(" "),o("li",[o("p",[e._v("Name it "),o("em",[e._v("rublename")]),e._v('.ruble, and browse to put the location into the "Aptana Rubles" folder.')]),e._v(" "),o("ul",[o("li",[o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[o("strong",[e._v("You need to create a new")]),e._v(" "),o("strong",[o("em",[e._v("rublename")])]),e._v(" "),o("strong",[e._v(".ruble folder in the above location.")]),e._v(' Otherwise, it will create the project in the root of the "Aptana Rubles" folder.')])])]),e._v(" "),o("li",[o("p",[e._v("As an example, the result on OS X might look like:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Project name:")]),e._v(" my.ruble")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Location:")]),e._v(" /Users/username/Documents/Aptana Rubles/my.ruble")])])])])])]),e._v(" "),o("li",[o("p",[e._v("Finish the wizard")])]),e._v(" "),o("li",[o("p",[e._v("Add a bundle.rb file with the following content:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("require 'ruble'\n\nbundle do |bundle|\n  bundle.display_name = 'My Ruble'\nend\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Save and close bundle.rb")])])]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("You've not added any content yet so that you won't see your Ruble show up in the UI. You'll need to add "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Templates/Creating_a_new_template/"}},[e._v("templates")]),e._v(" or commands to see a visible change. See below for checking to ensure your bundle loaded.")],1)]),e._v(" "),o("h3",{attrs:{id:"ruble-file-locations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ruble-file-locations"}},[e._v("#")]),e._v(" Ruble file locations")]),e._v(" "),o("p",[e._v("In general, you will place your Ruble files in one of two locations.")]),e._v(" "),o("p",[e._v('A. Any top-level "bundles" directory in the active projects within the current workspace.\nB. The $USER_DOCUMENT_DIRECTORY/Aptana Rubles/, where $USER_DOCUMENT_DIRECTORY is platform dependent.')]),e._v(" "),o("p",[e._v("Project-level bundles (A) will override user-level bundles (B) if there is a conflict. (B) is the preferred approach as it makes your ruble easier to share later.")]),e._v(" "),o("h2",{attrs:{id:"checking-to-ensure-your-ruble-loaded"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#checking-to-ensure-your-ruble-loaded"}},[e._v("#")]),e._v(" Checking to ensure your Ruble loaded")]),e._v(" "),o("p",[e._v("Studio 3 includes a bundles view that shows all currently loaded Rubles. You can use it to ensure your Ruble loaded as expected.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Go to "),o("strong",[e._v("Window > Show View > Other...")])])]),e._v(" "),o("li",[o("p",[e._v("Expand the Studio category.")])]),e._v(" "),o("li",[o("p",[e._v("Select the "),o("strong",[e._v("Bundles")]),e._v(" item.\nA view appears showing all currently loaded bundles.")])]),e._v(" "),o("li",[o("p",[e._v("You should see the bundle with the name you gave above in the list.")])]),e._v(" "),o("li",[o("p",[e._v("For detailed information on selected items in the Bundles View, go to "),o("strong",[e._v("Window > Show View > Other...")])])]),e._v(" "),o("li",[o("p",[e._v("Expand the General category.")])]),e._v(" "),o("li",[o("p",[e._v("Select the "),o("strong",[e._v("Properties")]),e._v(" item.\nA view appears showing detailed information on your Bundles View selection.")])]),e._v(" "),o("li",[o("p",[e._v("If your bundle has an error, you should see the output in the Console view.")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);