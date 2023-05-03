const path = require("path");

module.exports = {
  extends: [
    // We will use all default plugin rules that we installed.
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    // Disable prettier conflict rule.
    // Override all rule above.
    "eslint-config-prettier",
    "prettier",
  ],
  plugins: ["prettier"],
  settings: {
    react: {
      // eslint-plugin-react auto detact React version.
      version: "detect",
    },
    // Eslint import handler.
    "import/resolver": {
      node: {
        paths: [path.resolve(__dirname, "")],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        project: path.resolve(__dirname, "./tsconfig.json"),
      },
    },
  },
  env: {
    node: true,
  },
  rules: {
    // Turn off require import rule in React jsx file.
    "react/react-in-jsx-scope": "off",
    // Warning when <a target='_blank'> without rel="noreferrer"
    "react/jsx-no-target-blank": "warn",
    // Enchance prettier rule (copy from .prettierrc)
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "always",
        semi: false,
        trailingComma: "none",
        tabWidth: 2,
        endOfLine: "auto",
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true,
      },
    ],
  },
};
