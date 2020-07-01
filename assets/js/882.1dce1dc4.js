(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{2130:function(e,t,a){"use strict";a.r(t);var n=a(21),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"interacting-with-eclipse-or-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-eclipse-or-java"}},[e._v("#")]),e._v(" Interacting with Eclipse or Java")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("In this recipe, we show how a Ruble command can interact with Eclipse or Java code. For specific questions, see the "),a("a",{attrs:{href:"https://github.com/jruby/jruby/wiki/CallingJavaFromJRuby",target:"_blank",rel:"noopener noreferrer"}},[e._v("Calling Java from JRuby"),a("OutboundLink")],1),e._v(" document.")]),e._v(" "),a("h2",{attrs:{id:"interacting-with-an-editor-folding-code-in-the-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-an-editor-folding-code-in-the-editor"}},[e._v("#")]),e._v(" Interacting with an Editor: Folding code in the editor")]),e._v(" "),a("p",[e._v("Here, we interact with the current editor to collapse all folding markers.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("require 'ruble'\nrequire 'java'\n\ncommand 'Fold All Code' do |cmd|\n  cmd.scope = 'source'\n  cmd.invoke do |context|\n      # Toggle all levels. context.editor.editor_part is the current IEditorPart\n      context.editor.editor_part.source_viewer.doOperation(org.eclipse.jface.text.source.projection.ProjectionViewer::COLLAPSE_ALL)\n  end\nend\n")])])]),a("h2",{attrs:{id:"interacting-with-an-editor-increasing-the-editor-s-font-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-an-editor-increasing-the-editor-s-font-size"}},[e._v("#")]),e._v(" Interacting with an Editor: increasing the editor's font size")]),e._v(" "),a("p",[e._v("Here, we up the current font size in all editors by 2.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("require 'ruble'\nrequire 'java'\n\ncommand 'Increase Font Size' do |cmd|\n  cmd.scope = 'source'\n  cmd.invoke do |context|\n      step = 2;\n      font_name = org.eclipse.jface.resource.JFaceResources::TEXT_FONT\n      font_registry = org.eclipse.ui.PlatformUI.workbench.theme_manager.current_theme.font_registry\n      data = font_registry.get_font_data(font_name)\n      new_data = data.map {|d| org.eclipse.swt.graphics.FontData.new(d.getName(), d.height + step, d.style) }\n      font_registry.put(font_name, new_data.to_java(:\"org.eclipse.swt.graphics.FontData\"))\n  end\nend\n")])])]),a("h2",{attrs:{id:"gui-a-simple-input-dialog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gui-a-simple-input-dialog"}},[e._v("#")]),e._v(" GUI: A simple input dialog")]),e._v(" "),a("p",[e._v("We create a simple dialog to prompt the user for input. Note we have one file for the dialog class, and another file for calling the class in a command.")]),e._v(" "),a("p",[a("strong",[e._v("in /lib/multi_input_dialog.rb:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("require 'java'\n\nclass MultiInputDialog < org.eclipse.jface.dialogs.InputDialog\n\n  def getInputTextStyle\n    org.eclipse.swt.SWT::MULTI | org.eclipse.swt.SWT::BORDER | org.eclipse.swt.SWT::V_SCROLL\n  end\n\n  def createDialogArea(parent)\n    control = super(parent)\n    getText.getLayoutData.heightHint = 100;\n    control\n  end\nend\n")])])]),a("p",[a("strong",[e._v("in /commands/commands.rb:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("require 'ruble'\nrequire 'java'\n\ncommand 'Multi-Input Dialog' do |cmd|\n  cmd.scope = 'source'\n  cmd.invoke do |context|\n    require 'multi_input_dialog'\n    dialog =  MultiInputDialog.new(nil, \"Title\", \"Description\", \"initial_value\", nil)\n    status = dialog.open\n\n    # Check the status once the dialog has closed\n    if status != 0\n      Ruble::Logger.log_error \"Status '#{status}'\"\n      return\n    end\n\n    Ruble::Logger.log_error \"Status '#{status}', Value: '#{dialog.getValue}'\"\n  end\nend\n")])])]),a("h2",{attrs:{id:"code-equivalents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-equivalents"}},[e._v("#")]),e._v(" Code Equivalents")]),e._v(" "),a("p",[e._v("Some examples of calling code in Ruby and Java.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Ruby")]),e._v(" "),a("th",[e._v("Java")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Grabbing an IFile from the current editor.")]),e._v(" "),a("td",[a("code",[e._v("<br />context.editor.editor_input.file<br />")])]),e._v(" "),a("td",[a("code",[e._v("<br />IFile editorInput = editor.getEditorInput().getFile();<br />")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);