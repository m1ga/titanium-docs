(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{2009:function(e,t,n){"use strict";n.r(t);var o=n(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"pydev-interpreter-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pydev-interpreter-configuration"}},[e._v("#")]),e._v(" PyDev Interpreter Configuration")]),e._v(" "),o("h2",{attrs:{id:"configure-interpreter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-interpreter"}},[e._v("#")]),e._v(" Configure Interpreter")]),e._v(" "),o("p",[e._v("After installing it, the first thing you must do is configure the "),o("strong",[e._v("Python and Jython and IronPython")]),e._v(" interpreter. To configure the interpreter:")]),e._v(" "),o("p",[e._v("1. Go to: "),o("strong",[e._v("window > preferences > PyDev > Interpreter - (Python/Jython/IronPython)")]),e._v(".")]),e._v(" "),o("p",[e._v("2. Choose the interpreter you have installed on your computer (such as python.exe, jython.jar, or ipy.exe).")]),e._v(" "),o("p",[e._v("Note that the "),o("strong",[e._v("Auto-Config")]),e._v(" will try to find it in your PATH, but it can fail if it's not there (or if you want to configure a different interpreter).")]),e._v(" "),o("p",[e._v("On "),o("strong",[e._v("Windows,")]),e._v(" it'll also search the registry and provide a choice based on the multiple interpreters available on your computer (searching in the registry).")]),e._v(" "),o("p",[e._v("On "),o("strong",[e._v("Mac")]),e._v(", usually, you can do a 'which python' to know where the python executable is located.")]),e._v(" "),o("p",[e._v("On "),o("strong",[e._v("Mac")]),e._v(" it's usually at someplace resembling the image below (so, if you want to configure a different version of the interpreter manually, that's where you'd want to search):")]),e._v(" "),o("p",[o("img",{attrs:{src:n(781),alt:"interpreter_mac"}}),e._v("\n3. Select the paths that will be in your "),o("strong",[e._v("SYSTEM PYTHONPATH")]),e._v(".")]),e._v(" "),o("div",{staticClass:"danger custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("❗️ Warning")]),e._v(" "),o("p",[e._v("Select only folders that will "),o("strong",[e._v("NOT be used as source folders for any project")]),e._v(" of yours (those should be later configured as source folders in the project).")])]),e._v(" "),o("div",{staticClass:"danger custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("❗️ IMPORTANT for Mac users")]),e._v(" "),o("p",[e._v("The Python version that usually ships with Mac doesn't seem to have the .py source files available, which are required for PyDev, so using a different interpreter is recommended (for example, download it from "),o("a",{attrs:{href:"http://python.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://python.org"),o("OutboundLink")],1),e._v("). If you don't want to use a different interpreter, get the source files for the Python '/Lib' folder and add those to the system installation.")])]),e._v(" "),o("p",[e._v("After those steps, you should have a screen as presented below:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(782),alt:"interpreter"}})]),e._v(" "),o("h2",{attrs:{id:"how-to-check-if-the-information-was-correctly-gotten"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-check-if-the-information-was-correctly-gotten"}},[e._v("#")]),e._v(" How to check if the information was correctly gotten")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("System libs")]),e._v(" must contain at least the Lib and the Lib/site-packages directory.")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("Forced builtin libs")]),e._v(" must contain the modules built into the interpreter (and others whose analysis should be done dynamically. See: "),o("a",{attrs:{href:"#ForcedBuiltins"}},[e._v("#Forced Builtins")]),e._v(").")]),e._v(" "),o("h2",{attrs:{id:"what-if-it-is-not-correct"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-if-it-is-not-correct"}},[e._v("#")]),e._v(" What if it is not correct?")]),e._v(" "),o("p",[e._v("The most common error is having a problem in the environment variables used from the shell that spawned Eclipse in a way that, for some reason, when getting the variables of one interpreter, it gathers the info from another interpreter (thus mixing the interpreter and the actual libraries).")]),e._v(" "),o("p",[e._v("Usually running (from the command prompt) the file that gives that info for PyDev can help you discover the problem in your configuration (interpreterInfo.py):")]),e._v(" "),o("p",[e._v("That file is usually located at: eclipse\\plugins\\org.python.pydev_$version$\\PySrc\\interpreterInfo.py, but it can be at other locations depending on how you installed it.")]),e._v(" "),o("p",[e._v("python.exe interpreterInfo.py")]),e._v(" "),o("p",[e._v("java.exe -cp c:\\path\\to\\jython.jar org.python.util.jython interpreterInfo.py")]),e._v(" "),o("p",[e._v("ipy.exe interpreterInfo.py")]),e._v(" "),o("p",[e._v("If you're unable to find out what's going on, please ask in the user's forum (giving the output obtained from executing interpreterInfo.py in your machine).")]),e._v(" "),o("h2",{attrs:{id:"what-if-i-add-something-new-in-my-system-pythonpath-after-configuring-it"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-if-i-add-something-new-in-my-system-pythonpath-after-configuring-it"}},[e._v("#")]),e._v(" What if I add something new in my System PYTHONPATH after configuring it?")]),e._v(" "),o("p",[e._v("If you add something to your python installation, you need to either\nadd it manually as a 'new folder' in the System PYTHONPATH (if it's still not under a folder in the PYTHONPATH)\nor "),o("strong",[e._v("(recommended) remove your interpreter and add it again")]),e._v(", then, press apply.")]),e._v(" "),o("p",[e._v("Note that if you added a library that's already under a folder in the PYTHONPATH, you have to at least go to\nthe interpreter preferences and press apply so that it clears its internal caches (after the configuration\nis done, things are set in stone for PyDev)")]),e._v(" "),o("h2",{attrs:{id:"libraries"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#libraries"}},[e._v("#")]),e._v(" Libraries")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("System libs")]),e._v(" are the libraries that will be added to the PYTHONPATH of any project that is using this interpreter.")]),e._v(" "),o("p",[e._v("For "),o("strong",[e._v("Python and IronPython")]),e._v(", it's composed of "),o("strong",[e._v("folders, zip files, and egg files")]),e._v(". Note that if dlls should be added to the PYTHONPATH, the folders containing those dlls should be added, and they must have the same name to be imported in the code (the case is important). For example, if you want to import iTextDll, it "),o("strong",[e._v("must")]),e._v(" be called iTextDll.dll (note that .pyd and .so extensions are also accepted).")]),e._v(" "),o("p",[e._v("For "),o("strong",[e._v("Jython")]),e._v(", it's composed of "),o("strong",[e._v("folders and jars")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"forced-builtins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#forced-builtins"}},[e._v("#")]),e._v(" Forced Builtins")]),e._v(" "),o("p",[e._v("The Forced builtin libs are the libraries that are built-in the interpreter, such as "),o("strong",[e._v("_"),o("em",[e._v("builtin")]),e._v("_, sha, and so forth")]),e._v(" or libraries that should forcefully be analyzed through a shell (in other words, to analyze modules in this list, PyDev will spawn a shell and do a dir() on the module to get the available tokens for completions and code-analysis) – still, sometimes even that is not always possible, in which case, "),o("a",{attrs:{href:"#PredefinedCompletions"}},[e._v("#Predefined Completions")]),e._v(" may be used to let PyDev know about the structure of the code.")]),e._v(" "),o("p",[e._v("For "),o("strong",[e._v("Python")]),e._v(", you should have around "),o("strong",[e._v("50")]),e._v(" entries.")]),e._v(" "),o("p",[e._v("For "),o("strong",[e._v("Jython")]),e._v(" around "),o("strong",[e._v("30")]),e._v(" entries.")]),e._v(" "),o("p",[e._v("For "),o("strong",[e._v("IronPython")]),e._v(" more than "),o("strong",[e._v("100")]),e._v(" entries. All the packages built into .NET should be included here – e.g.: Microsoft, Microsoft.Windows.Themes, System, System.IO, etc.")]),e._v(" "),o("p",[e._v("Additionally, you may add other libraries that you want to treat as builtins, such as "),o("strong",[e._v("os, wxPython, OpenGL, etc")]),e._v(". This is very important because PyDev works on the java side only with static information, but some modules don't have much information when analyzed statically, so, PyDev creates a shell to get information on those. Another important thing is that they "),o("strong",[e._v("must")]),e._v(" be on your system python path (otherwise, the shell will be unable to get that information).")]),e._v(" "),o("p",[o("img",{attrs:{src:n(783),alt:"interpreter_forced_builtins"}})]),e._v(" "),o("h2",{attrs:{id:"predefined-completions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#predefined-completions"}},[e._v("#")]),e._v(" Predefined Completions")]),e._v(" "),o("p",[e._v("Predefined completions are completions acquired from sources that provide only the interfaces for a given Python module (with Python 3.0 syntax).")]),e._v(" "),o("p",[e._v('A predefined completion module may be created by having a module with the extension ".pypredef" with regular Python 3.0 contents, but with attributes having assigned to its type and methods having as the body a sole return statement – and the docstring may have anything.')]),e._v(" "),o("p",[e._v("Example of "),o("strong",[e._v("my.source.module")]),e._v(" (must be declared in the "),o("strong",[e._v("my.source.module.pypredef")]),e._v(" file):")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("MyConstantA = int\nMyConstantB = int\n\nclass MyClass:\n\n    instanceAttribute = QObject\n\n    def __init__(self, parent=None):\n        '''\n\n        @type parent: QObject\n        '''\n\n    def registerTimer(interval, object):\n        '''\n\n        @type interval: int\n        @type object: QObject\n        '''\n        return int\n")])])]),o("p",[o("strong",[e._v("Note 1")]),e._v(": the name of the file is the exact name of the module")]),e._v(" "),o("p",[o("strong",[e._v("Note 2")]),e._v(": .pypredef files are not searched in subfolders")]),e._v(" "),o("p",[o("strong",[e._v("Optionally a QScintilla .api file may be added")]),e._v(". When this is done, PyDev will try to create .pypredef files from that .api file and will add the folder containing those to the PYTHONPATH. Note that this conversion is still in beta, and the file may not be correctly generated, so, keep an eye for errors logged when a code-completion that would use those modules (while it will not fail, those completions won't be shown using the .pypredef files). In those situations, please create a bug report with the .api file that generated incorrect code.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(784),alt:"interpreter_predefined"}})]),e._v(" "),o("h2",{attrs:{id:"environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),o("p",[e._v("The variables defined at the environment will be set as environment variables when running a script that uses the given interpreter (note that it can still be overridden in the run configuration)")]),e._v(" "),o("h2",{attrs:{id:"string-substitution-variables"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#string-substitution-variables"}},[e._v("#")]),e._v(" String substitution variables")]),e._v(" "),o("p",[e._v("Strings defined here may be used in:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("project configuration for source folders and external libraries")])]),e._v(" "),o("li",[o("p",[e._v("launch configuration for the main module")])])]),e._v(" "),o("p",[e._v("They can be used in those places in the format: ${DECLARED_VARIABLE}")]),e._v(" "),o("h2",{attrs:{id:"cygwin-users"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cygwin-users"}},[e._v("#")]),e._v(" Cygwin users")]),e._v(" "),o("p",[e._v("PyDev currently has no support for Cygwin. Currently, you'll be able to configure the interpreter with Cygwin, but there are still other related problems (mostly on converting between windows and Cygwin paths as needed).")])])}),[],!1,null,null,null);t.default=r.exports},781:function(e,t,n){e.exports=n.p+"assets/img/interpreter_mac.9305fb44.png"},782:function(e,t,n){e.exports=n.p+"assets/img/interpreter.71bc6ba8.png"},783:function(e,t,n){e.exports=n.p+"assets/img/interpreter_forced_builtins.ba4baf7a.png"},784:function(e,t){e.exports="data:image/png;base64,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"}}]);