# Setting up environment
Minimum node needed for Angular - v 6.9 

## angular 
1. Install latest Node.js
2. add 'C:\Program Files\nodejs' to path at 'node'
3. 'npm install -g @angular/cli'
4. 'ng --version'  to confirm angular cli installed
5. 'ng new hello-world'  - create angular project
6. cd to project folder hello-world
7. 'ng serve' - serve app to local server
8. accept windows defender firewall thing
9. open browser > http://localhost:4200/ > confirm works

## typescript
1. 'npm install -g typescript'
2. 'tsc --version' - check version
3. 'mkdir ts-hello' - test folder for section
4. 'cd ts-hello' - go to that folder
5. 'code main.ts' - create this file (will be in your folder on save)
6. 'tsc main.ts' - compile/transpile ts to js file (ng serve calls this, too)

# Project structure
e2e - end to end tests (don't worry about yet)
node_modules - see later in course (bundled stuff)

src - source code
src/app - ever app has at least one module and component
src/assets - img/text/icon
src/environments - config settings for diff envirs
src/favicon
src/index.html - default page
src/main.ts - starting point of application
        - here we're bootstrapping AppModule
src/polyfills.ts - needed by angular - fills gap between features of js that angular needs vs what browser has in js
src/styles.css - global styles
src/test.ts - set up testing environment

angular-cli.json - configuration (dont need really)
.editorconfig - make sure all devs using same settings
.gitignore - exludes files from git
karma.conf.js - config for Karma (test runner)
package.json - every node proj has - dependencies/libs/refs managed here - has our refs to @angular
    - also has dev dependencies used for dev but not needed in deployed app (such as karma)
protractor.conf.js - e2e tool
tsconfig.json - settings for ts compiler
tslint.json - a number of settings for ts - helps perform code analysis on your ts


# Angular versions
AngularJS - 2010 - overly complex
Angular2 - 2016 - rewritten with TS - basically completely different from AJS
Angular 3? 
- a few minor upgrades up to 2.3 happened
- there are multiple angular libraries (core/compiler/http/router)
- each library had a 2.3 version except router which was 3.3
- in order to avoid confusion for the next upgrades they just bumped it all up to 4
Angular4 - not really a major upgrade - is essentially 2.4
Now just called Angular (no more numbering)

Now have AngularJS vs Angular2+ or just "Angular"