module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  settings: {
    react: {
      version: "detect"
    }
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/prop-types": ["off"],
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    indent: ["error", 2, { SwitchCase: 1 }],
    "comma-dangle": ["error", "never"],
    "linebreak-style": 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": ["warn", { allow: ["info", "error"] }],
    curly: "error",
    "no-else-return": "error",
    "no-unneeded-ternary": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "one-var": ["error", "never"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    strict: "error",
    "symbol-description": "error",
    yoda: ["error", "never", { exceptRange: true }]
  }
};
