# Welcome to React & Redux!

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:

- Monday - Wednesday: 9:00am to 5:00pm

Breaks:

- Morning: 10:25am to 10:35am
- Lunch: Noon to 1pm
- Afternoon #1: 2:15pm to 2:25pm
- Afternoon #2: 3:40pm to 3:50pm

## Course Outline

JavaScript/TypeScript topics will be included as needed into the React & Redux content

- Day 1 - React: Overview of React, JSX, Props + Validation, State, Immutable Programming, Stateless Functions
- Day 2 - React: Component Composition, Pure Components, Life Cycle Functions, Redux, React Unit Testing

## Links

### Instructor's Resources

- [Wintellect](https://www.wintellect.com/)
- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [Microsoft Virtual Academy](https://mva.microsoft.com/search/SearchResults.aspx#!q=Eric%20Greene&lang=1033)
- [React Blog Posts - Post 4 - React Unit Tests](https://github.com/training4developers/react-flux-blog)
- [TopTal Videos](https://www.toptal.com/videos)
- [React SitePoint](http://www.sitepoint.com/author/ericgreene/)
- [Redux Videos](https://egghead.io/courses/getting-started-with-redux)

### Other Resources

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)
- [Speaking JavaScript](http://speakingjs.com/es5/)
- [TC39 Process - Feature Stages](http://www.2ality.com/2015/11/tc39-process.html)
- [Official ES2016 Features](http://www.2ality.com/2016/01/ecmascript-2016.html)
- [Possible ES2017 Features](http://www.2ality.com/2016/02/ecmascript-2017.html)

## Overview

This project configuration bundles JavaScript files with Webpack transpiling TypeScript, ES2017 and JSX code to run in an ES5.1 environment.

## Application Setup

Step 1. Install Node.js version 7 or higher. To install Node.js click [here](https://nodejs.org).

Step 2. Download this repository. Extract the zip file to a working folder on your system.

Step 3. Open a terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
npm i && npm start
```

It could take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** file per the instructions in those files. Then re-run the command above.

This setup has been completed successfully when you receive a message similar to this one:

```bash
] Child html-webpack-plugin for "../index.html":
[1]     chunk    {0} ../index.html 541 kB [rendered]
[1]         [0] ./~/html-webpack-plugin/lib/loader.js!./src/index.html 746 bytes {0} [built]
[1]         [1] ./~/lodash/lodash.js 540 kB {0} [built]
[1]         [2] (webpack)/buildin/module.js 251 bytes {0} [built]
[1] webpack: Compiled successfully.
```

This terminal window is now running the web server, a second terminal window will need to be opened to run additional terminal commands.

Step 5. If a web browser did not open automatically for you, then open a web browser, and navigate to [http://localhost:5000](http://localhost:5000).  The React web application should load and be usable.

### To Modify the Web Application

Step 6. Open your favorite text editor ([Visual Studio Code (preferred)](https://code.visualstudio.com)), and modify the files in the **src** folder. When file changes are saved, **webpack** will automatically transpile and bundle the application code and assets, and deploy it to the **dist** folder. To see the changes, reload your web browser.

#### Recommended Editor Packages/Extensions

For Visual Studio Code:

- HTMLHint (kaufman.HTMLHint)
- ESLint (dbaeumer.vscode-eslint)
- TSLint (eg2.tslint)
- SASS Lint (glen-84.sass-lint)

Visual Studio Code has built-in support for React and a Terminal, no package needs to be installed

## NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm start** - removes the dist folder, builds and deploys the web app, and starts the web app and the rest app
- **npm run clean** - removes the **dist** folder
- **npm run webpack:w** - runs webpack in watch mode so web app file changes are automatically processed, and deployed to the **dist** folder
- **npm run webpack** - runs webpack once to process web app files, and deploys them to the **dist** folder
- **npm run web** - starts the web server
- **npm run rest** - starts the rest server

## Useful Resources

- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [React-Redux](https://github.com/reactjs/react-redux)
- [Redux-Thunk](https://github.com/gaearon/redux-thunk)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.github.io/)
- [SASS](http://sass-lang.com/)
- [Bootstrap](https://v4-alpha.getbootstrap.com/)
