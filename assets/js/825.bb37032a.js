(window.webpackJsonp=window.webpackJsonp||[]).push([[825],{1987:function(e,t,o){"use strict";o.r(t);var a=o(21),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"crashes-and-freezes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#crashes-and-freezes"}},[e._v("#")]),e._v(" Crashes and Freezes")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("Studio does its best not to crash, but when it does, there are helpful pieces of information you can send to the developers.")]),e._v(" "),o("h2",{attrs:{id:"freezes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#freezes"}},[e._v("#")]),e._v(" Freezes")]),e._v(" "),o("p",[e._v("A freeze is likely caused by either a deadlock in code or an infinite loop. To diagnose:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v('If you are on OS X or have the JDK installed on Windows, you can use the "jps" command')])]),e._v(" "),o("li",[o("p",[e._v('To check, try typing "jps" on the command line, or you may need to look in "c:\\Program Files\\Java\\jdk_directory\\bin" or wherever your Java is installed. If you do not have a directory with "JDK" in the name, you won\'t be able to use JPS.')])])]),e._v(" "),o("h3",{attrs:{id:"using-jps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-jps"}},[e._v("#")]),e._v(" Using JPS")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v('On Unix, you may need to run the following commands as "sudo"')])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open a command prompt.")])]),e._v(" "),o("li",[o("p",[e._v("Type "),o("strong",[e._v("jps -v")]),e._v(" shows you a list of jvm process ids. You should see one referencing Eclipse.")])]),e._v(" "),o("li",[o("p",[e._v("Type "),o("strong",[e._v("jstack "),o("pid",[e._v(" >> logfile.log")])],1),e._v("to dump the stack trace for the specified VM process id. Copy this into a file and attach it to the JIRA ticket. You may need to pipe the output to a location where you have write permissions, i.e.:")]),e._v(" "),o("ol",[o("li",[e._v('c:\\Program Files\\Java\\jdk1.6.0_29\\bin>jstack 2616 >> "C:\\Users\\Username\\Desktop\\test2.log"')])])])]),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Machine$ jps -v\n9528 Jps -Dapplication.home=/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home -Xms8m\n8455  -Dorg.eclipse.swt.internal.carbon.smallFonts -Xms40m -Xmx1024m -Declipse.p2.unsignedPolicy=allow -Declipse.log.size.max=10000 -Declipse.log.backup.max=5 -Xdock:icon=../Resources/titanium.icns -XstartOnFirstThread -Dorg.eclipse.swt.internal.carbon.smallFonts -XX:MaxPermSize=256m\nMachine$ jstack 8455 >> logfile.log\n")])])]),o("h3",{attrs:{id:"without-jps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#without-jps"}},[e._v("#")]),e._v(" Without JPS")]),e._v(" "),o("p",[e._v("Unfortunately, the easiest way requires restarting Studio on the command line. If that's not possible for some reason, you can use this free tool (though it requires registration: "),o("a",{attrs:{href:"http://www.adaptj.com/main/tracehowtos",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.adaptj.com/main/tracehowtos"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("p",[e._v("To use the command line:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Start Studio on the command line:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("On Windows: "),o("strong",[e._v("Appcelerator****Studio.exe -consolelog,")]),e._v(" "),o("strong",[e._v("TitaniumStudio.exe -consolelog")]),e._v(" or "),o("strong",[e._v("AptanaStudio.exe -consolelog")])])]),e._v(" "),o("li",[o("p",[e._v("On OS X: "),o("strong",[e._v("/Applications/Appcelerator\\ Studio/AppceleratorStudio.app/Contents/MacOS/AppceleratorStudio,")]),e._v(" "),o("strong",[e._v("/Applications/Titanium\\ Studio/TitaniumStudio.app/Contents/MacOS/TitaniumStudio")]),e._v(" or "),o("strong",[e._v("/Applications/Aptana\\ Studio\\ 3/AptanaStudio3.app/Contents/MacOS/AptanaStudio3")])])])])]),e._v(" "),o("li",[o("p",[e._v("You may wish to adjust the buffer size of your console")]),e._v(" "),o("ol",[o("li",[e._v("On Windows, right-click in the console window and choose "),o("strong",[e._v("Properties")]),e._v(". Set the buffer size to 3000.")])])]),e._v(" "),o("li",[o("p",[e._v('Enter the key sequence "'),o("ctrl",[e._v(' + \\" in the console window.')])],1)]),e._v(" "),o("li",[o("p",[e._v("Copy and paste the resulting output information into a document, and attach it to the JIRA ticket")])])]),e._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 Hint")]),e._v(" "),o("p",[e._v("If you have additional questions, you can see "),o("a",{attrs:{href:"http://wiki.eclipse.org/How_to_report_a_deadlock",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://wiki.eclipse.org/How_to_report_a_deadlock"),o("OutboundLink")],1),e._v(" for more information.")])]),e._v(" "),o("h2",{attrs:{id:"jvm-terminated"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jvm-terminated"}},[e._v("#")]),e._v(" JVM Terminated")]),e._v(" "),o("p",[e._v("When this happens, you'll see a rectangular dialog with a title of "),o("strong",[e._v("JVM Terminate")]),e._v(" on your screen and Studio will disappear. This indicates Java itself has crashed, but it creates a log file in the process.")]),e._v(" "),o("p",[e._v("By default, the crash file should be in either the Studio installation directory, or in the system temp directory, most likely with a file name of hs_err_pid*.log. If you still could not locate it, follow the directions here:")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/felog-138657.html#gbwcy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Finding your Error Log"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("On OS X, the location is ~/Library/Logs/Java/*.crash.log or ~/Library/Logs/CrashReporter, and the file will have the word java in its name.")])])]),e._v(" "),o("p",[e._v("Please attach this log if you submit a support ticket.")])])}),[],!1,null,null,null);t.default=i.exports}}]);