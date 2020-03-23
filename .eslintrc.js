module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        semi: 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-unused-vars': ['warn'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'import/extensions': 'off',
        'max-len': 'off',
        'no-param-reassign': 'off',
        'prefer-destructuring': 'off',
        'arrow-parens': ['error', 'as-needed'],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
                'vue/script-indent': ['error', 4, {
                    baseIndent: 1,
                    switchCase: 1,
                }],
            },
        },
    ],
}
