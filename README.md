# Popcorn

Simple app to display movies, so take a bowl of popcorn 🍿 and enjoy

### Getting started

Clone this repo, install the dependencies with `npm install` and run it locally with `npm run dev`

### Scripts

- `npm run test` will launch unitary tests using Jest
- `npm run test:coverage` same as previous but shows coverage of tested code
- `npm run cy:open` will open Cypress UI to launch and debug integration tests
- `npm run cy:run` executes Cypress integration tests and displays the results
- `npm run build` builds application in .next folder
- `npm run dev` executes the app in development mode
- `npm run start` launches node instance to start the application in production mode
- `npm run now-build` builds apllication in _now.sh_ pipeline

To run Cypress tests you need to run `npm run dev` at the same time.

### Project structure

```
├── .circleci/                 	CircleCI configuration files
├── cypress/                    Cypress tests
├── pages/                      Next.js pages
├── src                         Source code
│   ├── apis/                   APIs
│   ├── components/             Components without logic or state
│   ├── containers/             Containers
│   ├── scss/                   SCSS files
│   ├── server/                 Simple node server to publish the app
│   ├── store/                  Redux Store
├── tests/                      Unitary tests
├── .babelrc                    Babel configuration file for next
├── .gitignore                  Git will ignore this files
├── .nowignore                  Now will ignore this files when deploying
├── jest.config.js              Jest configuration file
├── jest.setup.js               Initialize script for Jest
├── jsconfig.json               Json used by VSCode to manage alias
├── next.config.js              Next.js configuration file
├── now.json                    Now configuration file with routes and now builds
├── package.json                npm configuration and dependencies
├── package-lock.json           npm version dependencies locked
├── README.md                   This file
```

### Deploying

This project is linked with Now.sh and it will deploy when there is a new commit or pull request.
