## What are Hybrid Apps?
**Definition**   
Hybrid apps are webapps buildt using HTML 5 and JS that is wrapped in a native application to provide access to native API's and functionality

## What is Cordova?
**Definition**  
Cordova wraps a HTML/JS app into a native container. These features are exposed via a unified js API allowing you to only have to write one unified piece of code

## What is Ionic?
**Definition**  
Ionic is a software development kit(SDK) built on AngularJS and Cordova to build hybrid mobile applicaiton development

**Benefits**   
* You only have to write one codebase 
* Lots of developers already know HTML and JS
* Access all the APIs of a native app using Cordova
* Provides native style UI components and interactions
* Great for small quick apps/prototypes

**Drawbacks**  
* Native applications are usually more efficient
* Cordova Plug-ins may have unexpected quirks 
* Workarounds are made in order to make applications have native feel

**When not to use Ionic** 
* Big apps with complex History or routing
* Apps with heavy reliance on native APIs and functionality 

**Out of the Box Features**
* Css Components
    * Header, Tabs, Cards
* Platform Customization
    * Platform specific classes , display templates based on platform
* Javascript Extensions 
    * Backdrop modals, side menues

[http://ionicframework.com/docs/v1/components](Ionic Framework)

**How to get Started** 
```bash
$npm install -g ionic
$npm ionic start myproject [template]

```  
There are 3 templates you can start from: 
1. blank
2. Tabs
3. Sidemenu

Build process

1. **Build your app:** ionic build <Platform>
2. **Simulate your app** ionic emulate <Platform>
3. **Run your app on a device:** ionic run <Platform>
4. **Simulate in the browser:** Ionic serve -l



