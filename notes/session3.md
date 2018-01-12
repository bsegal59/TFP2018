# Building Web Apps with Angular.js :

A Google Built Web Framework to give structure to Web Applications

**AngularJS**    
* Version:  1.xx 
* Programming Language: Javascript
* MVC-focused (Model View Controller)

**Angular**    
* Version:  2.00 n
* Programming Language: TypeScript (ES6 with strong typing)
* Component Based

## Single Page Applications (SPA) 
**Introduction**    
* Fully loads the initla page load 
* Page regions are replaced or updated with new page fragments loaded from the server on demand

**Benefits**   
* Avoids downloading unused features
* Much more of the work happens on the client side, in Javascript
* The process of routing helps 

## Architectures


**Model View Controller**  
* MVC is a software architectural pattern for implementing user interfaces
* Divides application into three interconnected parts 
    * The View(The template)
        * What the User sees that uses information from the Model
        * Static HTML Pages with additional syntax to allow them to inject data into them
    * The Model (The Scope)
        * The information that is sent and updates the View
        * Contains fields that store data to be presented to the user by the template
    * The Controller (The Joystick)
        * What the user uses to update the information in the Model
        * Controller is a function which generally takes an empty scope object as a parameter and adds to it the fields and functions to be exposed to the template 

**Two-way Data Binding**  
In older frameworks like jQuery the developer is responsible for manually manipulating the DOM

With Angular there is not this problem because the ng-model directive allows you to bind input, select , textarea to a property in the scope
```html
<div>
    <label> Name:</label>
    <input type="text" ng-model="yourName">
    <hr>
    <h1> Hello, {{yourName}}!</h1>
</div>
```
**Component-based Architecture** 
* Another pattern, commonly used in web applications
* A component represent  a slice of functionality 
* Components have well defined inputs and outpust and well as it's own lifecycle
* An application is defined as a tree of components each view is a component 
    * Example: a Calendar would be neatly defined with its own HTML,CSS, and JS files

## Angular parts
**Modules**  
A module defines your applicaiton which will consist of components directive services filteres ,etc
Modules can list other modules as their dependencies 
It can also help on preventing global scope between other modules

```html
<div ng-app="myApp">...</div>
<script>
var app = angular.module([],"myApp")
</script>
```

**Directives**  
Directive are markers on a DOM element(CSS Class Element Name). This tells ANGularJS's HTML Compiler to attach a specified behavior to the DOM element

Directive let you create custom HTML syntax specific to your application

Directives lets your create reusable componenets. A component allows you to hide complex DOM structures CSS and behavior

Angular normalizes an element's tag and attribute name to determine which elements/attributes match which directives

1. Strip x- and data- from the front of the element/attributes
2. Change the :, -, _ to camelCase

## Creating a simple directive 
1. restrict
    * 'A' - matches onlly attribute name
    * 'E' - matches only elements name
    * 'C' - matches only the classs name
2. scope
    * Mapping outer Scope to directive inner scope
3. templateUrl
    * Template url of the HTML template to be imported
4. link 
    * Register DOM listeners as well as update the DOM
5. Controller and ControllerAs:
    * Specifies controller to associate with directive

```javascript
.directive('myDirName', function(){
    return{
        restrict:'AE',
        scope:{
            dirDataBind:'='
        },
        link: function(scope){},
        templateUrl:'template.html'
    }
})
```

Resulting HTML

```html
<my-dir-name dir-data-bind="some data"></my-dir-name>
``` 

## Creating a simple Components
* A component is restricted to the elemtn type only
* A components get s a controller instead of a link function
* Easier to upgrade to Angular 2+

## Services
* Services are logical application components taht are wired togetehr using depdency injection.
* They allow us to externalize applicaiton logic out of controllers and encapsulate it in easy to use user containers

```javascript
.factory('service',function(){
    //logic goes here
}

.service('anotherService', AnotherService);
class AnotherService(){
    //logic goes here
}
```
## Resources
1. [Components](https://www.w3schools.com)
1. [Directives](https://www.CanIusethis.com)
1. [](https://www.github.com/airbnb/javascript)

Best Practices
1. [AngularJS Style Guide](https://github.com/toddmotto/angularjs-styleguide)

PostWork
1. [Todd Motto Exploring Angular 1-5](https://toddmottol.com/exploring-the-angular-1-5)
