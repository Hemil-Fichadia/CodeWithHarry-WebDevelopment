// This is npm tutorial. NPM is node package manager like pip in python.
// A package is collection of some files which are written by some other developer and we use them for our benifits.

console.log("This is npm tutorial reloading");
 
// First npm is installed in this tut69 folder using terminal command "npm init" and is asks certain configuration like package name, version, description, entry point, test command, git repository, keywords, author and licence to be entered or verified in order to build a custom package like this after entering yes like shown 
// {
//     "name": "tut69",
//     "version": "1.0.0",
//     "description": "This is the best package ever built by someone",
//     "main": "tut69.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "keywords": [
//       "awesome"
//     ],
//     "author": "Hemil",
//     "license": "ISC",
//     "dependencies": {
//       "express": "^4.17.1",
//       "nodemon": "^2.0.12",
//       "slugify": "^1.6.0"
//     },
//     "devDependencies": {}
//   }
// in this tut69 folder which is this package.JSON file

// Here we have installed some npm packages like slugify express and nodemon using command      "npm install package name"     in this tut69 folder and shorthand of this command is    "npm i package name". If any package is need to be uninstalled so command "npm uninstall package name".

// When any package is installed, a node_modules folder is created which downloads some of the dependencies of the installed packages as they are even dependent on some other basic packages and it also includes the modules which are probably going to be used in the project. In case if this node_module folder gets deleted it can be brought back using command   "npm install"   it will automatically install all the modules analysing the dependencies.

// The normally installed packages are displayed in the dependencies block as the code written in this file would be dependent on this installed packages when imported or used directly in product or development part of work, but the packages installed using command      "npm install package name --dev-save"      so it would be displayed in devDependencies block it means those packages will only come into picture if the development work is being done like nodemon a self reloading terminal package which is only required at the time of development and if any package is needed to be used every where including devDependencies, package is installed globally using command "npm install package name --global"

// As any package is installed it has some versions like 2.1.11 so here 2 denotes major, 1 denotes minor and 11 denotes patch. so patch(11) is like some small error or bug fixing if someone reports that some basic functionality is not responding so developer fixed it. minor(1) is like adding some samll implication functions new features without breaking  old one and Major(2) like some older function have been depricated and new ones have replaced them 

// for using nodemon, a command has to be fired for example "nodemon .\tut69.js"
 console.log("nodemon is a live server for terminal as the file is saved it automatically reloads"); 