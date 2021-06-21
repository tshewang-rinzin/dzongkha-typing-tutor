<h2>Dzongkha Typing Tutor</h2>
<p>
  Dzongkhag Typing Tutor uses <a href="https://electron.atom.io/">Electron</a>, <a href="https://facebook.github.io/react/">React</a>, <a href="https://github.com/reactjs/react-router">React Router</a>, <a href="https://webpack.github.io/docs/">Webpack</a> and <a href="https://www.npmjs.com/package/react-refresh">React Fast Refresh</a> with Electron React Boilerplate at <a href="https://github.com/electron-react-boilerplate">this repo</a>
</p>

## Install

- **If you have installation or compilation issues with this project, please see [the debugging guide at](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)**

First, clone the repo via git and install dependencies:

```bash
git clone git@github.com:trigdzeen/dzongkha-typing-tutor.git
your-project-name
cd your-project-name
yarn
```

## Starting Development

Start the app in the `dev` environment:

```bash
yarn start
```

## Packaging for Production

To package apps for the local platform:

```bash
yarn package
```

## Docs

For detailed instructions for installation and setup, See [docs and guides here](https://electron-react-boilerplate.js.org/docs/installation)

<h3>Document Structure</h3>

<h3>src</h3>
<ul>
<li>This contains all the react files</li>
<li>All the files outside of src are for electron for build and generating executables. Feature customizations to be only done in the src</li>
</ul>

<h3>Sub folders inside src</h3>

The sub folders in the src have following opinated directories.

<strong>assets</strong> - contains all the styles, images, sounds, fonts, and icons used in the application

<strong>components</strong> - main components required for the application

<strong>data</strong> - lesson and competition json files

<strong>game</strong> - bubble component for game

<strong>hands</strong> - all components to render hand highlight and movements

<strong>hooks</strong> - all react hooks used in the application

<strong>keyboard</strong> - has components for keyboard layout and rendering key highlights

<strong>sounds</strong> - has components for playing sound

<strong>translations</strong> - has english and dzongkhag translation json files
