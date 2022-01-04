---

title: 'Build a PWA w/ React'
author: 'Ibrahima Balde'
date: '2021-12-22'
tags: ['next.js','blog', 'pwa']
description: 'css styling and structure info'
tag: 'web dev, jsx, tsx, mdx'

---
## Notes for Config Files

```bash
npm install
```

## React

```bash
npm install react react-dom
```

## Project Dir Structure

> Create Dir and folder structure

- index.html w/ div elem and script tag
- create src dir w/ App.js and index.js

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

## Dir Info Table

|Folder  |Files      |         Info|
|:--- | :---: | :---: |
|**root**| `code block`|data3|
|**src**| `code block`|data3|
|**components**| `code block`|data3|
|**index.js**| entry for React using the renderer |data3|
|**App.js**| file that imports the projects other components|data3|
|**index.html**| `code block`|data3|
|\|escape pipe|\`backtick|data13|
|cell data1|cell data2|cell data3|
|cell data1|cell data2|cell data3|
|cell data1|cell data2|cell data3|

|Header1 |Header2  | Header3|
|:--- | ---: | :---:|
|Align left| Align right|center text|
|cell data1|cell data2|cell data3|

### Webpack

```bash
npm install --save-dev webpack webpack-dev-server webpack-cli html-loader html-webpack-plugin

```

- Bundles projects js files into 1 (or more w/ code-splitting) minified file for optimized serving
- `Packages`: webpack(core) webpack-dev-server(auto rerun server) webp-cli(enables running cmds in terminal)
- use cli to init base of package.json & webP config
- add start script to package.json
  - mode used for dev or prod config for webP to run
  - env sets running env for dev/prod to show either useful modules or
  - mangled ones (using source map for debug) (can use Terser for prod)

`WebPack Config file`
>
entry: main js file (index.js)
output: tells webP to create a /dist folder and name file bundle.js and to serve from contentBase config
module: config for the loaders (packages) installed
add sourcemap config tag w/ devtool tag

### Images

```html
<img src="img/webP-env.png" alt="webpack env table" title="WebPack config" height="150"/>
```

![text](myphoto.png){ width=60%,height:30px }
 [![image alt text](image URL link)](anchor link)

\\\\\\\\\\\\\\\\\\\\\\\\\\

### Babel

> transpiles/compiles new/future ECMAScript2015 (ES6 2015-2017) syntax to browser compatible version

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```
<!-- paraphrase and table before production-->
@babel/core: Main dependency that includes the babel transform script.
@babel/preset-env: Transform ES6+ into valid ES5 code. Optionally configures browser polyfills automatically.
@babel/preset-react: extends Babel support to JSX.
babel-loader: Webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.

- add babel info in the webpack.config.js file and configure
- create `.babelrc` file and add presets and plugin configs

\\\\\\\\\\\\\\\\\\\\\\\\\\\\

### EsLint

```bash
npm --save-dev install eslint eslint-loader babel-eslint eslint-config-react eslint-plugin-react
```

install dep then run eslint --init

\\\\\\\\\\\\\\\\\\\\\\\\

### Prettier

```bash
npm install
```

\\\\\\\\\\\\\\\\\\\\\\\\

### CSS

```bash
npm install
```

- Less
_ Bootstrap
- Tailwind
- `Semantic UI`
- Material UI

### Style

combine style-loader with css-loader thenn add to webpack config

add styling to `style.css` file

```css
body {
background: green;
}
```

then add _import "./style.css"_ to `component.js` file

### `webpack.config.js`

```js
module.exports = {
module: {
rules: [
    {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
    },
],},};
```

#### Dependencies

#### Footer

- Main resources used

[https://medium.com/geekculture/setting-up-a-react-app-from-scratch-withwebpack-babel-and-eslint-57eb3dcaf2e9]

[https://reactgo.com/semantic-ui-react/]
