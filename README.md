This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This web app is about a chinese old traditional chest named "Five adjacent chess".
It is based on the reactjs tutorial of a board game with 9 buttons and further
developped with more rules and more genralization of functions and attributes.

=== Test: ===

1. Jest:
   mocha --compiler mocha-webpack-compiler.js --require setup.js tests/modal.test.js OR
   npm test -- tests/modal.test.js
2. Mocha for others:

=== Memo ===

1. `import "./index.css";` still not work yet in test.
2. How to make jest work in test? (Solved)
   By adding `"presets": ["@babel/preset-react", "@babel/preset-env"],` in to .babelrc.
3. How to merge 'mocha test' and 'jest test' together?
   use `"test": " ./node_modules/react-scripts/node_modules/.bin/jest --updateSnapshot ",` in package.json works fine for mix.
4. But how to use mocha to work in mix?
   1. create .mocharc.js or .mocharc.yml or .mocharc.json file in project root directory.
   2. Now `mocha tests/` works with .mocharc.json. Most of the original tests with chai, enzyme works except for the one `modal.test.js` of Jest test. Could not find `expect`.
   3. But jest run `npm test -- tests/` is all good of all tests after switch before => beforeAll and after => afterALL. Has to add `testMatch` into package.json for `jest` field.
