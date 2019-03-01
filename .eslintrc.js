module.exports = {
    'env': {
        'mocha': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVerion': 6,
        'allowImportExportEverywhere': true
    },
    'globals': {
        'browser': true,
        'expect': true,
        'assert': true,
        'document': true
    },
    rules: {
        'no-console': 0
    }
};