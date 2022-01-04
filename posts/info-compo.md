---

title: 'Styling'
author: 'Ibrahima Balde'
date: '2021-12-22'
tags: ['next.js','blog', 'dionysusera']
description: 'css styling and structure info'
tag: 'web dev, jsx, tsx, mdx'

---

## Styling Components in Next

## General React App Dir

>Directory Structure

- `**Public**`
- `index.html` _gateway_ of the react app that's being loaded via _root id_ which is where the app will run
- `**Src**`
  - `index.js` _imports, renders_ , it's the projects JS **entry-point**
  - `App.js` contains root app component, all project compo and pushed to _root div_
  - `index.css`
  - `app.css`
  - Pages Dir
  - Posts Dir
  - Styles Dir

...

### Specific Project structure for this App

my-app/
  > README.md
  > node_modules/
  > package.json
  > `public/`
    - **index.html**_page template_
    - favicon.ico
  > `src/`
    - App.css
    - App.js
    - App.test.js
    - index.css
    - **index.js**_js entry point_
    - logo.svg

### More info for main files

1. Put all JS and CSS files in src
2.`index.html`
**Contains**
>
- what's visibile to your users
- Only files inside the `public` folder can be referenced from the HTML.
- You can add webfonts, meta tags, or analytics to this file.
- The build step will place the bundled scripts into the `< body>` tag where react hooks into the root div
- The build script for bundler

```html
  <script src="./bundle.js "></script>
  ```

#### Component Structure and Mapping

---

1. Each File contains a 'child' component that is then exported
2. The parent component imports the 'child' functions and creates a piece of UI
3. The Layout file then combines the parent components into a meaningful design
4. The Layout can have props and children to change state depending on the app's purpose

---

#### MARKDOWN, MD LINTING INFO, PRETTIER INFO *

---

[`Prettier`](https://prettier.io) can work w/ `markdownlint`
**markdownlint with Prettier** List item indentation

> `markdownlint` and `Prettier` lint well if configured properly
    - If `Prettier` is used with `--tab-width` `4`, then `markdownlint` config should be adjusted:

```json
{
  "MD007": {
    "indent": 4
  },
  "MD030": {
    "ul_single": 3,
    "ul_multi": 3
  }
}
```

---

### TAILWIND info

...

```bash
**npm install** -tailwindcss@latest- -@tailwindcss/typography- -postcss@latest- -autoprefixer@latest-
**npx tailwindcss init -p**

//add this to tailwind.config.js
plugins: [
require('@tailwindcss/typography')
]
```

> `add` in to the styles/globals.css

@tailwind base;
@tailwind components;
@tailwind utilities;

### TailwindCss setup method #2

- create .babelrc file and add presets / plugins that were installed
- create webpack.config.js file
- installs include bootstrap, tailwind, lodash

```bash
npm install --save-dev webpack webpack-cli @babel/preset-react babel-loader @babel/core @babel/preset-env @hot-loader/react-dom webpack-dev-server css-loader style-loader html-webpack-plugin postcss-loader autoprefixer jest babel-jest css-loader style-loader file-loader url-loader lodash-webpack-plugin prettier
npm install react react-dom react-hot-loader bootstrap jquery popper.js tailwindcss lodash
```
