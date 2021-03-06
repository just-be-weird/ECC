This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# ECC

# firebase commands

* firebase login
* firebase init
* firebase deploy

# Setup .env file
To setup env variables create .env.[environmentname] eg. .env.development.local
Now inside this file use `REACT_APP_NAME_OF_ENV_VAR=VAL` format. Every var needs to be prefixed with `REACT_APP_`. All the variables will be set on `process.env` from here we can use these variables inside the files.

# Adding Firebase database to app

go to console > database > test mode (NoSQL - Single Gigantic Central Object)

# FireStore

We perform CRUD operation on documentRef objects. Firebase firestore we either return `QueryReference` or `QuerySnapshot`

*QueryReference*-

The queryRef object doesn't have the actual data of the collection or document. It instead has properties that tell us details about it, or the method to get the Snapshot object which gives us the data we are looking for.
firestore.doc('/users/:userId');
firestore.collections('/users');
It can be of two types-
documentRef- used for CRUD -> this gives snapshot object
collectionRef- gives collection snapshot

*QuerySnapshot*-
It allows us to check if a document exists at this query using the .exists prop which returns a boolean. We can also get back the data using .data() on this snapshot

## Reselect Library:
To use reselect library `npm i reselect` modify the code/dir structure a bit to use the render optimization for selectors

*input selectors* - which gets whole state and returns just slice of it
Important after defining the input selector always make sure that its been added to OUTPUT SELECTOR else setState won't be called and component will not be rendered.

## Heroku Reference
install [heroku cli](https://devcenter.heroku.com/articles/heroku-cli)
then run shell command or respective to install heroku on machine
*heroku login
*heroku create ecc-avenue --buildpack https://github.com/mars/create-react-app-buildpack.git
