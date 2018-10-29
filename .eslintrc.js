module.exports = {
    'extends': [
        'airbnb'
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 7,
        'sourceType': 'module',
        'ecmaFeatures': {
            'classes': true
        }
    },
    'plugins': [
        'flowtype',
        'import'
    ],
    'env': {
        'browser': true,
        'node': true,
        'jest': true
    },
    'globals': {
        'DEBUG': false,
        'TEST': false
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["src"]
            },
            'alias': [
                ['src', '.src']
            ]
        }
    },
    'rules': {
        'indent': ['error', 4, {'SwitchCase': 1}],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        "jsx-a11y/href-no-hash": "off",
        'object-curly-spacing': ['off', 'always'],
        'comma-dangle': ['error', 'never'],
        'class-methods-use-this': [
            'warn', {
                'exceptMethods': ['render']
            }
        ],
        'max-len': ['error', 120, 2, {
            'ignoreUrls': true,
            'ignoreComments': false,
            'ignoreRegExpLiterals': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true
        }],
        'no-use-before-define': ['error', {'functions': false}],
        'no-underscore-dangle': ['off'],
        'no-return-assign': 'off', // for use: (this.componentEl = ref)
        'no-duplicate-imports': 'off', // we use eslint-import-plugin instead
        // react
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/require-default-props': 'off',
        'react/forbid-prop-types': ['error', {'forbid': ['any']}],
        'react/prefer-stateless-function': ['off', {'ignorePureComponents': true}],
        'react/prop-types': [
            'warn', {
                'ignore': [
                    'children',
                    'location',
                    'props'
                ], 'customValidators': []
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxEOF": 1
            }
        ],
        "react/destructuring-assignment": [
            "warn",
            "always",
            {
                "ignoreClassFields": true
            }
        ],
        "react/jsx-one-expression-per-line": [
            "warn",
            {"allow": "literal"}
        ],
        "react/no-access-state-in-setstate": false,
        "operator-linebreak": ["error", "none", {
            "overrides": {
                "?": "ignore",
                ":": "ignore",
                "&&": "ignore"
            }
        }],
        "function-paren-newline": ["error", "consistent"]
    }
};

