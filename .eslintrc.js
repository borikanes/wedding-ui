module.exports = {
    "root": true,
    "env": {
        "browser": false,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-const-assign": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        "no-unreachable": "error",
        "no-unused-vars": "error",
        "constructor-super": "error",
        "valid-typeof": "error",
        "quotes": ["error", "single"],
        "no-console": "off",
        "camelcase": "error",
        "semi": ["error", "always"],
        "quote-props": ["error", "always"],
        "indent": ["error", 4, { "SwitchCase": 1 }]
    }
}