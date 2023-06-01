# Code project TGA - Pokemon go

Redesigned Webapp for the Pokemon Go game and option to check out the entire pokedex and stats for any pokemon.

![alt text](preview.png)

## Running the project

To run the project, we need execute the following command lines.

The first one allow us to install all the dependencies required by the project, you only need to do this once and it won’t be required anymore unless you remove the dependencies.

```console
npm i
```

The second one is to run our json server that stores all the pokemon and future json data

```console
npm run server
```

And the third one is to run the task for react to generate all the distribution files and automatically open a tab in the browser for live-viewing.

```console
npm start
```

## Structure

### Source tree/files

```
public
    assets
        images
src
    components
        AlertCreate.jsx
        CardPokemon.jsx
        Footer.jsx
        Header.jsx
        ModalContact.jsx
        ModalPokemonAdd.jsx
        PokedexStat.jsx
        UsePokemonData.jsx
    data
        pokemon.json
    pages
        Home.jsx
        Pokedex.jsx
    sass
        base
            _variables.scss
            _mixins.scss
            _reset.scss
            _typography.scss
        components
            _button.scss
            _modal.scss
            _forms.scss
            _buttons.scss
            _card-pokedex.scss
            _images.scss
            _modals.scss
            _search.scss
        layout
            _header.scss
            _footer.scss
            _navigation.scss
            _container.scss
            _content.scss
            _flex.scss
        pages
            _home.scss
            _pokedex.scss
        card-pokedex.scss
        style.scss
    App.js
    index.js
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
