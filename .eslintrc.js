module.exports = {
    extends: [
      "airbnb",
      "airbnb/hooks",
      "plugin:react/recommended",
      "plugin:prettier/recommended", // Make sure Prettier is last
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      node: true,
      es2020: true,
    },
    rules: {
      "prettier/prettier": ["error", { singleQuote: true, trailingComma: "es5" }],
      "react/react-in-jsx-scope": "off", // With React 17, this is not required anymore
      "react/prop-types": "off", // You can enable this if you're using PropTypes
    },
  };
  