# How to use opd-content

opd-content is a web component you can use with any framework like react, angular, ionic…
opd-content is a page frame with menu that has 2 breakpoints you can set yourself. The main content is scrollable and the menu has an event that listens to the browser width. It hides on less than the smallest breakpoint for mobile devices.


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


## Events

To detect when the breakpoint changes so you can change content in sidemenu add the following to your **html**:

    <opd-content (breakpointChanged)="breakpointChanged($event)">
           <div  slot="sidemenu">
              <!-- Put your side menu content here -->
           </div>
           <div  slot="content">
              <!-- Put your main content here -->
           </div>
    </opd-content>
   
in the **code**:

    breakpointChanged(e){
	    console.log(e);
    }

 - e = 0 = Hidden
 - e = 1 = Medium breakpoint
 - e = 2 = Big breakpoint


## Settings
To change the settings tweek the following properties:


    <opd-content (breakpointChanged)="breakpointChanged($event)"
		        contentbackgroundcolor="#edeff2"
			headerbackgroundcolor="#327daa"
			sidemenubackgroundcolor="#364147"
			sidemenucolor="#ffffff"
			breakpoint-medium="767"
			breakpoint-big="1023"
			sidemenu-medium-width="57px"
			sidemenu-big-width="250px"
			header-hight="49px"
			action-button-height="28px"
			show-action-button="true"
			action-button-height="28px"
			action-button-background>
           <div  slot="sidemenu">
              <!-- Put your side menu content here -->
           </div>
           <div  slot="content">
              <!-- Put your main content here -->
           </div>
        </opd-content>

   