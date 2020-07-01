(window.webpackJsonp=window.webpackJsonp||[]).push([[900],{2165:function(e,t,o){"use strict";o.r(t);var r=o(21),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adding-new-deployment-providers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-deployment-providers"}},[e._v("#")]),e._v(" Adding new Deployment Providers")]),e._v(" "),o("p",[e._v("There are two relevant extension points that related to deployment, both living on the com.aptana.deploy namespace (though one resides in that plugin and the other in the com.aptana.deploy.epl fragment due to licensing issues).")]),e._v(" "),o("h2",{attrs:{id:"deploy-wizard"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-wizard"}},[e._v("#")]),e._v(" Deploy Wizard")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("com.aptana.deploy.deployWizards")]),e._v(" extension point allows plugins to register a deployment wizard which will step a user through configuring a project to be deployed using the chosen method. If this uses a 3rd-party service like Heroku or Engine Yard this involves stepping the user through registering an account, installing necessary gems, logging into the account (and saving their credentials in secure storage) and then finally running any initial setup for the project and storing this deployment method as the chosen one for this project (by setting a persistent property on the project pointing at the relevant "),o("strong",[e._v("IDeployProvider")]),e._v("'s id). There are numerous examples available for capistrano, FTP, engine yard, heroku. This extension point is meant to be very similar to registering a "),o("em",[e._v("newWizard")]),e._v(", "),o("em",[e._v("importWizard")]),e._v(" or "),o("em",[e._v("exportWizard")]),e._v(". Please keep in mind that this is for deploying an existing project, not for generating a new project at the same time, ala Red Hat. To do that, you should provide a "),o("em",[e._v("newWizard")]),e._v(" extension.")]),e._v(" "),o("h2",{attrs:{id:"deploy-provider"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-provider"}},[e._v("#")]),e._v(" Deploy Provider")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("com.aptana.deploy.deployProviders")]),e._v(" extension point allows plugins to register an implementation of an "),o("strong",[e._v("IDeploymentProvider")]),e._v(". The two methods we're concerned about are "),o("strong",[e._v("deploy")]),e._v(" and "),o("strong",[e._v("handles")]),e._v(". The "),o("strong",[e._v("deploy")]),e._v(" method is the meat of the provider. It gets passed an IProject that we're deploying and an IProgressMonitor to report progress. This method is typically going to be called wrapped in a Job. This method simply takes a project that has been configured for this deployment type and runs the repeated deployment actions (for example, for Heroku it will run 'git push heroku master', for FTP it will run a sync operation).")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("handles")]),e._v(" method is actually used as a fallback mechanism for choosing a deploy provider to implicitly use when no explicit provider was set up via a "),o("em",[e._v("deployWizard")]),e._v(". This can happen for projects that may have been configured to use a provider outside the IDE, or prior to being imported. Typically we'd check for some files or git state to determine For Heroku, we check that the project has a git repo and has a remote named 'heroku' or has a remote with a heroku.com URI. For Capistrano we check for a config/deploy.rb file. For EngineYard we check for an ey.yml file. For FTP we check if there's already a single remote connection set up for this project.")])])}),[],!1,null,null,null);t.default=a.exports}}]);