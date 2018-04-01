module.exports = {
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "rules": {
      "no-restricted-syntax": "off",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "padded-blocks": ["error", {
        "classes": "always",
        "switches": "never",
        "blocks": "never",
      }],
    }
};
