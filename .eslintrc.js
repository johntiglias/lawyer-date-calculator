module.exports = {
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "extends": [
    "airbnb",
    "plugin:vue/essential"
  ],
  "plugins": ["html"],
  "rules": {
    "no-console": 0,
    "comma-dangle": 0,
    "no-param-reassign": 0,
    "no-underscore-dangle": 0,
    "prefer-arrow-callback": 1,
    "prefer-template": 0,
  },
  "globals": {
    // browser
    "window": false,
    "document": false,
    "localStorage": false,
    "CKEDITOR": false,
    "Image": false,
    "FileReader": false,

    // env
    "process": false,
    "ENVIRONMENT": false,
  }
};
