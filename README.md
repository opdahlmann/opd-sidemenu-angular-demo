# How to use opd-content

**Install the package**

    npm i --save opd-content

**Add CUSTOM_ELEMENTS_SCHEMA to your app.module.ts**

	import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from  '@angular/core';

	@NgModule({
	declarations: [
	AppComponent
	],
	imports: [
	BrowserModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [],
	bootstrap: [AppComponent]
	})


**Copy component to your assets on build, add this in your .angular-cli.json**

	"assets": [
	"assets",
	"favicon.ico",
	{ "glob": "**/*", "input": "../node_modules/opd-content/dist", "output": "./assets/opd" }
	],

**Import the web component, add the following in your index.html file**

    <script  src='assets/opd/opd.js'></script>

**Add this to your page:**

    <opd-content>
       <slot name="header">
          <!-- Put your header content here -->
       </slot>
       <div  slot="sidemenu">
          <!-- Put your side menu content here -->
       </div>
       <div  slot="content">
          <!-- Put your main content here -->
       </div>
    </opd-content>