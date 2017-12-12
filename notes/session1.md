# Main Topics 
1. HTML5  
2. CSS3    
3. Javascript  

## HTML
Represents your **structure**
Hyper Text Markup Language  
Defines the content of your page on the fully loaded webpage.

**The bare bones HTML Document**

```HTML
 <!DOCTYPE HTML>
 <HTML>
    <head>
    </head>
    <body>
    </body>
 </HTML>
```
**Common Divs in Modern HTML**
* header
    * nav
* body
    * main
        * section
            * article
    * section
* aside
* footer


## CSS
Represents your *style*
Cascading Style Sheets  
```CSS
h1 {
    color:blue;
    font-size:12px;
}
```
***Brevity is the key to good CSS***

**Common CSS Selectors**
* .class : selects all elements with class="***"
* #id : Selects the element with id ="****"
* "*" : Select all elements
* element : selects all x elements
* element,element : selects all x elements *and* all y elements
* element element : selects all y elements *within* all x elements
* element > element : selects all y elements *directly under* all x elements

**Possible Performance Issues**
* Using * as  a selector 
* Using #id as a selector 

Both of these practices cause the DOM to have to select and search multiple elements within it's self 

**Specificity** 
The hierarchy is as follows 
1. inline styles
2. id styles
3. class styles
4. tag styles

**"Psuedo Tags"**
used to describe a special state of an element
```CSS
p:hover{
color:#FF00FF;
}
```
can also be used to reference a specific element
```CSS
p::after{
    color:#ff0000;
}
```

**The Box Model**
Working out from the Center the Box is defined by the following: 
1. Content: The actual content of the tag
2. Padding: Spacing pushing the borders out 
3. Border: The optionally visible line around the padding
4. Margin: Spacing from the outside of the border 
 
The direction that styles are applied on a page are TOP-RIGHT-BOTTOM-LEFT
`CSS
div{
    margin-top:1px;
    margin-right: 2px;
    margin-bottom: 3ix;
    margin-left: 4px;
}`
Is the same as 
`CSS
div {margin: 1px 2px 3px 4px}`

**Media Query** 
The @Media rule is used to define different style rules for differnt media styles and devices


**SASS**
* CSS Extension language and preprocessor
* Variables nesting imports
* Mixins and Inheritance

## JS
Represents your *Behavior* 
Control sections of the page using event listeners in a single threaded fashion in the browser

**JavaScripts are Object-Based**

All Values are objects 
* Dates
* Objects
* Arrays
* Regular Expressions

Properties of objects are called using dot notation
`javascript
objectName.property`
Methods are functions that are preformed on a object
`javascript
objectName.method()`

**Multiple versions of JavaScript** 
ES5 and ES6 are different versions of Javascript 

*Bable*: Used to Transpile ES6 to ES5 to be compatible with old browsers


## HTML, CSS, JS are the only things understood by a webbrowser
Frameworks and complementary langauges help to 
1. Insert these languages into the webpage
2. Help facilitate writing these languages 
3. 

---
Further Resources


HTML Links
1. [w3schools.com](w3schools)

CSS Links
1. [CanIusethis.com](Can I use this?)

JS Links
1. [https://github.com/airbnb/javascript](AirBNB Style)

