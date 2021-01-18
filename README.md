# React.UI

React frontend application preset with support of most common features:

-   [Webpack 5](https://webpack.js.org/) 
-   [react](https://ru.reactjs.org/) / [babel](https://babeljs.io/)
-   typescript (using [ForkTsCheckerWebpack](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin) )
-   sass, less, [css modules](https://github.com/css-modules/css-modules) with automatic typescript declaration
-   with react support (also with [react-refresh](https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin))
-   [esLint](https://www.npmjs.com/package/eslint)
-   [prettier](https://www.npmjs.com/package/prettier) (with import sorting using [prettier-plugin-import-sort](https://www.npmjs.com/package/prettier-plugin-import-sort), [import-sort-style-module-and-prefix](https://www.npmjs.com/package/import-sort-style-module-and-prefix))
-   [webpack dev server](https://webpack.js.org/configuration/dev-server/) ([proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy) support is also available)
-   importing svg as react components using [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack)
-   postcss loader (with [autoprefixer](https://www.npmjs.com/package/autoprefixer) and [cssnano](https://www.npmjs.com/package/cssnano))
-   [husky](https://www.npmjs.com/package/husky) prehooks and [lint-staged](https://www.npmjs.com/package/lint-staged)
-   [classnames](https://www.npmjs.com/package/classnames) + CSS Modules
-   [redux](https://redux.js.org/) (react-redux, redux-devtools-extension, reduxjs/toolkit)
-   [immer](https://immerjs.github.io/immer/docs/introduction) immutable data structure
-   [lodash](https://lodash.com) javascript extras library

## Quick start

To run this locally:

1. Open terminal and locate project folder
2. Goto project folder and install all dependencies using `npm install`
3. Start the development server using `npm run start`
4. Open up [http://localhost:3000](http://localhost:3000)
