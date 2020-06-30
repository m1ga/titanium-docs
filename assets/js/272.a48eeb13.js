(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{2190:function(t,e,a){"use strict";a.r(e);var r=a(21),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),r("p",[t._v("Aptana Studio 3 is shipped with a built-in support for Git source control.")]),t._v(" "),r("h2",{attrs:{id:"getting-started-with-git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-git"}},[t._v("#")]),t._v(" Getting Started with Git")]),t._v(" "),r("p",[t._v("It may be helpful to review tutorials on getting started with Git outside the IDE as a general primer on how it works and how to get it installed.")]),t._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"http://help.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://help.github.com/"),r("OutboundLink")],1),t._v(" - Github's help docs, which are a great starting place.")])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://cworth.org/hgbook-git/tour/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://cworth.org/hgbook-git/tour/"),r("OutboundLink")],1)])])]),t._v(" "),r("h3",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),r("p",[t._v("For Mac OS X, you can install via "),r("a",{attrs:{href:"http://macports.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("macports"),r("OutboundLink")],1),t._v(" as the 'git-core' package, or just grab the binaries at "),r("a",{attrs:{href:"http://code.google.com/p/git-osx-installer/downloads/list?can=3",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://code.google.com/p/git-osx-installer/downloads/list?can=3"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h4",{attrs:{id:"windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),r("p",[t._v("We pre-package Portable Git with Studio 3 for Windows. We recommend that you use the pre-packaged Portable Git, as we've ensured it works properly with our git support and also works with our embedded Terminal view/editor. If you have installed Rails using "),r("a",{attrs:{href:"http://railsinstaller.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rails Installer"),r("OutboundLink")],1),t._v(", it also installs a version of PortableGit that you can use instead.")]),t._v(" "),r("h4",{attrs:{id:"re-installing-portable-git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#re-installing-portable-git"}},[t._v("#")]),t._v(" Re-Installing Portable Git")]),t._v(" "),r("p",[t._v("If you happen to have skipped the git installation to begin with, and now need to install it after the fact:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Open up the file WORKSPACE_DIR\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings\\com.aptana.git.ui (it may be something like: C:\\Users\\username\\Documents\\Aptana Studio 3 Workspace\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings)")])]),t._v(" "),r("li",[r("p",[t._v('Delete the line "ignore_no_git=true"')])]),t._v(" "),r("li",[r("p",[t._v("Restart Studio")])])]),t._v(" "),r("h2",{attrs:{id:"importing-an-existing-git-repository"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#importing-an-existing-git-repository"}},[t._v("#")]),t._v(" Importing an existing Git repository")]),t._v(" "),r("p",[t._v("To clone (or \"import\") a git repository, select File > Import... or right-click in the Project or App Explorer and Choose Import... Then select the Git > Git Repository as New Project entry. This will present a very basic dialog asking you to enter the Git source URI and the destination. The source URI is the same you'd pass in the command line as the first argument to 'git clone'.")]),t._v(" "),r("h2",{attrs:{id:"importing-and-forking-a-github-repository"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#importing-and-forking-a-github-repository"}},[t._v("#")]),t._v(" Importing and forking a Github repository")]),t._v(" "),r("p",[t._v("To fork and clone a Github project, select File > Import... or right-click in the Project or App Explorer and Choose Import... Then select the Git > Fork Github repository entry.")]),t._v(" "),r("h2",{attrs:{id:"creating-a-new-git-repo-for-an-existing-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-git-repo-for-an-existing-project"}},[t._v("#")]),t._v(" Creating a new Git repo for an existing project")]),t._v(" "),r("h3",{attrs:{id:"project-explorer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#project-explorer"}},[t._v("#")]),t._v(" Project Explorer")]),t._v(" "),r("p",[t._v('Inside the Project Explorer, Git actions live under the right-click "Team" menu.')]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Click "),r("strong",[t._v("Team > Share Project...")])])]),t._v(" "),r("li",[r("p",[t._v("Select location and click "),r("strong",[t._v("Create")])])])]),t._v(" "),r("h3",{attrs:{id:"app-explorer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#app-explorer"}},[t._v("#")]),t._v(" App Explorer")]),t._v(" "),r("p",[t._v("Inside the App Explorer, the git actions generally live under the gear toolbar menu. Click the arrow to the right of the gear menu and choose Initialize Git Repository. This will run 'git init .' inside the project and then attach our git support to the project.")]),t._v(" "),r("h2",{attrs:{id:"git-actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-actions"}},[t._v("#")]),t._v(" Git Actions")]),t._v(" "),r("p",[t._v("Studio provides a number of elements in the user interface to ease working with Git")]),t._v(" "),r("h3",{attrs:{id:"staging-unstaging-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#staging-unstaging-files"}},[t._v("#")]),t._v(" Staging/Unstaging files")]),t._v(" "),r("p",[t._v("Staging changes will cue up the changes for commit. Unstaging removes the change from this list and won't be committed.")]),t._v(" "),r("h3",{attrs:{id:"reverting-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reverting-files"}},[t._v("#")]),t._v(" Reverting files")]),t._v(" "),r("p",[t._v("Reverting will discard any unstaged changed to a file.")]),t._v(" "),r("h3",{attrs:{id:"committing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#committing"}},[t._v("#")]),t._v(" Committing")]),t._v(" "),r("p",[t._v("When committing, a dialog will apear that allows you to easily stage/unstage files and enter a commit message.")]),t._v(" "),r("p",[t._v('In the context of the commit dialog, Ctrl+Enter (or Cmd+Enter on Mac) will invoke the "commit" action. If there are still unstaged files left, committing will not close the dialog.')]),t._v(" "),r("h3",{attrs:{id:"push-pull"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#push-pull"}},[t._v("#")]),t._v(" Push/Pull")]),t._v(" "),r("p",[t._v("These specific actions will run and open a console view to show output, whereas most other commands will run silently. Files mentioned (by a non-truncated path) in pull output will have hyperlinks added which will open the mentioned file in the IDE.")]),t._v(" "),r("h3",{attrs:{id:"branch-related-actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#branch-related-actions"}},[t._v("#")]),t._v(" Branch-related actions")]),t._v(" "),r("p",[t._v("If you're running a branch-related git command that requires you to choose a branch (i.e. merge, switch, delete), a menu will appear next to your mouse cursor allowing you to select the branch, or use the 1-9 keyboard shortcut to choose the corresponding branch.")]),t._v(" "),r("h3",{attrs:{id:"tag-actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tag-actions"}},[t._v("#")]),t._v(" Tag actions")]),t._v(" "),r("p",[t._v('In the Create Tag dialog, the "commit to tag" field allows users to input any valid ref to tag. Typically a user would want to tag HEAD, which is the default. However, this field also has a pulldown to select commits from the history. It also supports Ctrl+Space (Cmd+Space on Mac) to invoke content assist to search commits based on the prefix. This allows you to enter a word or words in the subject line of a past commit (the first line of the commit message), hit Ctrl+Space and get suggested any commits where that string exists.')]),t._v(" "),r("h2",{attrs:{id:"git-ui-modifications"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-ui-modifications"}},[t._v("#")]),t._v(" Git UI modifications")]),t._v(" "),r("p",[t._v('Our Git support will make git-specific modifications to the UI for related projects and files. In particular, unstaged files will typically be shown with a red background color in Project and App Explorer; staged will show with a green BG. Files with any uncommitted changes will show with a * (asterisk) "dirty" indicator, and folders will show the dirty indicator when any file inside it\'s hierarchy is dirty. Projects will show the current branch inside square brackets to the right of the project name inside the Project Explorer. The branch name will be followed by a + or - and number if there are committed changes to be pushed or pulled from a corresponding remote.')]),t._v(" "),r("p",[t._v("To control the colors used for staged/unstaged files, please see "),r("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/#TokenNames"}},[t._v("Themes#TokenNames")])],1),t._v(" "),r("h2",{attrs:{id:"preferences"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preferences"}},[t._v("#")]),t._v(" Preferences")]),t._v(" "),r("p",[t._v("Preferences for the git support can be found under "),r("strong",[t._v("Preferences > Team > Git")]),t._v(". This allows you to explicitly override the detected git executable location, as well as turn off auto-attaching our git support to new/imported projects with git repos attached (typically disabled if users prefer to use egit). You can also turn off our calculation of pull indicators in the App Explorer for branches if there are performance issues, or you use a passphrase for your SSH key and keep getting prompted.")]),t._v(" "),r("h3",{attrs:{id:"keyboard-shortcuts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-shortcuts"}},[t._v("#")]),t._v(" Keyboard shortcuts")]),t._v(" "),r("p",[t._v("All git commands share a common keybinding prefix. On Mac that is Control+Command+G, on other systems it's Shift+Alt+G. Entering this command keybinding will pop up a tooltip to allow you to choose the specific action you want and will show the extra key in it's binding (i.e. Control+Command+G,R is Revert).")]),t._v(" "),r("h3",{attrs:{id:"app-explorer-specific-functionality"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#app-explorer-specific-functionality"}},[t._v("#")]),t._v(" App Explorer-specific functionality")]),t._v(" "),r("p",[t._v('We\'ve made the App Explorer tie into our Git support to make it even easier to deal with a single project attached to git. Specifically, the view contains a branch drop-down menu after the project selector. This branch menu will list all of the local branches available, and will mark branches containing changes using the * (asterisk) "dirty" indicator. We also show left/right arrows as indicators if there are changes to push or pull to remotes.')]),t._v(" "),r("p",[t._v("Additionally, all the git operations are found under the gear toolbar menu - as well as in the right-click context menu under Team.\n"),r("img",{attrs:{src:a(610),alt:"App_Explorer_git"}})])])}),[],!1,null,null,null);e.default=i.exports},610:function(t,e,a){t.exports=a.p+"assets/img/App_Explorer_git.c1c6dc20.png"}}]);