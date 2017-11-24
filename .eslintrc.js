module.exports = {
    "plugins": [
        "react"
    ],
    "globals": {
        "window": true,
        "localStorage": true,
        "console": true,
        "FileReader": true,
        "document": true
    },
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
        "react/display-name": [1, {"ignoreTranspilerName": false}]
    }
};