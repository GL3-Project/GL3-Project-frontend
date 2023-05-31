module.exports = {
    extends: [
        'eslint:recommended',
        'prettier',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/extensions': 'off',
        'linebreak-style': ['error', 'unix'],
        'react/jsx-one-expression-per-line': 'off',
        'import/prefer-default-export': 'off',
        'max-len': ['error', { code: 150 }],
    },
    root: true,
};
