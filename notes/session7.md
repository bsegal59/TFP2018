# Software Engineering: Principles, Patterns, and Best Practices

How do we make sure that we can deliver on our project by bringing together the principles we learned from our previous sections

## Bringing It All Together

## Business Delivery

**Waterfall**  
1. Discovery: Get the information from the client on what is the business goal and creative strategy of the product
2. Design (all Features): Designing the visual and user experience
3. Develop(all Features): Develop all Features to work with the choosen technology stack
4. Test (All Features, UAT, E2E,SI): Test all features with the product created 
5. Deploy: Release a finished product 

**Agile**
1. Discovery: Go over creative briefing with the client and define the Minimal Viable Product (MVP)
2. Sprint n: 2 - 4 week work cycle
    1. Design: Take user stories to develop a user experience
    2. Develop: Develop features to match user stories 
    3. Test: Test Key features and high level testing 
3. UAT, E2E, SI: Carry out more indepth testing 
4. Deploy: Deploy the MVP defined during discovery

## How do we fit in as Engineers 

**Discovery** 

* Technical Assessment and Understanding
    * what is the clients current software Development process
    * What is the current technology Stack
    * Does the client have a cloud environment
* Establish Technology Solutinos Goals
    * Is the client familiar with X,Y,Z?
* Technology Design & Solution Architecture
    * What does their exisiting architecture look like? 
    * Does this product have to interface with other systems? 

**Sprint 0**

* Dev Ops Plannign & Setup 
    * Automated Build Pipeline
    * Source Control
    * Basic project structure
    * Device requirements
* Infrastructure Design
    * Client environemtn
* Interactive Design & Visual Alignment
    * Style Guide setup, technology limitations
    * Creating SASS variables for the designers wireframes
* Product Delivery Expectations 
    * Sprint Cadence, Demo Frequency 

**Sprint 1** 

* Feature Development 
    * Acceptance Criteria, Assumptions
    * User Scenarios 
    * Reference to Assets
    * Accountability
* Code
    * Clean code Maintaiinability
        * Modular, Reusable, Consistent
        * Sustanability, Performance
    * Utilize libraries, open source code
    * Unit Tests 
    * Accessibility
    * Making the art of the impossible - possible 
* User Story vs. Bug
    * A user story is a feature
    * A bug is a effect that is not part of that user story

**Launch** 

* Deployment Planning & Verification
    * Did the product pass security checks?
    * Where does the product need to live
    * Is this product "client ready"? 
* O&M Planning 
    * Who will maintain or add new features? 
    * Who will be on call to fix issues?
* Operational Deployment Readiness 
    * Is the product ready for launch 
    * Does the product work? 
    * Is the product stable

## Different Roles on the Engineering Team

1. Systems Architecture: Understanding the Client Landscape and translating business rules to user stories
2. Software Engineering: Defining problems and utilizing differnt tools to design a product
3. Quality Management: Understanding how to best test a product to ensure quality is delivered to a client
4. Technical Leadership/ Project Management: Knowing how to lead a team and where to identify risks and deficiencies 
5. Technical Communication: Beging able to communicate how to best tell the client what is being built

## Setting up, Building, and Deploying a Project

* Project Scaffolding (*Yeoman*)
* Identify and Get Project Dependencies (*Node*)
    * Project.json
    * 'npm' install [package]
    * Located in node_modules folder
* Build Proccess (*Gulp*)
    * 'gulp build' to build web application or 'ionic build' for mobile applicaitons
    * Configured in Gulp File:
        * Code Quality Checks (Linting)
        * Automated execution of unit tests
        * Code compilation 
        * Final packaging for deployment 

## Writing Clean Code - Javascript

**Key Tools**
1. JS Hint
2. ESLint

7 Key Tips 
1. Make sure all variables are properly defined using var or let
2. For strings, use either single or double quotes, but not both
3. Add a semicolon to the end of each statement
4. Eliminate all commented code and irrelevant console.logs
5. Minimize the use of switch statements as much as possible
6. Take some time out for Technical Design - Don't jump right into coding 
    * Make use of software patterns when organizing code (ie MVC, Component based, Singleton)
    * Headfirst Design Patterns (Recommended Reading)
7. Verify with unit tests(ideally)

## Writing Clean Code - Angular/Ionic

1. Define one component/directive/service per file, with each file being small in size(<500 lines)
    * Use components for page elements 
    * Use directives for new HTML attributes  
    * Use services for logic and REST Calls 
2. Vendor libraries should be in a separate directory from the actual applicaiton code
3. Follow the LIFT principles
    * Locating the code should be easy with the overall file set up 
    * 

## Unit Testing and TDD
* Testing and validation the source dcode one "Unit" at a time (ie. module class, function)
* Within Angular framework we run unit tests for each component, service, and directive

**Commonly Used Tools**
* Jasmine or Mocha - for writing unit tests
* Karma- runs Angular JS Unit Tests
* Phantom JS - Headless web browser used for tests
* Istanbul - Code coverage tool ; tracks how much of each unit has been covered by tests

Test-driven development (TDD) involves focusing on test cases that are created from requirements. Generally thesee test cases are written before the start of development, and validated throughout the development cycle 

**Debugging Tools**
* BreakPoints 
* Console.log function
* debugger statements 
* Visual Studio Code Cordova Tools Plugin





