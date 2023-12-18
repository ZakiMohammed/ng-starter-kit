# Ng Starter Kit

Starter kit for Angular application.

## Steps

1. JSON Server [Done]
1. ESLint and Prettier [Done]
1. Build commands and config [Done]
1. Budget [Done]
1. Install source explorer
1. Environment Files
1. Bootstrap

- Install Bootstrap
- Install Bootstrap Icon

1. Pages

- Home, About, Not Found

1. Skeleton

- Header, Footer, Shell, Routing

1. Toaster

- Add toaster

1. Login
1. Interceptor

- Token, Error

1. Feature

- List, Details

1. App Insights

## Run App

Below command will run the project:

```
npm start
```

## Initial Setup

Below command executed to perform initial setup:

```
ng new ng-starter-kit
```

## ESLint

Add ESLint to project:

```
ng add @angular-eslint/schematics
```

Run command:

```
npm run lint
```

Add new script:

```
"lint-html": "ng lint > eslint/report.html --format html --silent"
```

Add ESLint ignore file `.eslintignore`:

```
eslint/**
```

Refer: https://github.com/angular-eslint/angular-eslint

## ESLint + Prettier

Add Prettier config `.prettierrc` and Prettier ignore file `.prettierignore`:

```
{
  "singleQuote": true,
  "bracketSameLine": true,
  "overrides": [
    {
      "files": ["*.html", "*.ts"],
      "options": {
        "printWidth": 120
      }
    },
    {
      "files": "*.html",
      "options": {
        "parser": "html"
      }
    },
    {
      "files": "*.component.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
```

Understand the philosophy of formatting with ESLint + Prettier from:
https://github.com/angular-eslint/angular-eslint/blob/main/docs/FORMATTING_RULES.md

Add `eslint-config-prettier` to project:

```
npm install --save-dev eslint-config-prettier
```

Add `eslint-plugin-prettier` and `prettier` to project:

```
npm install --save-dev eslint-plugin-prettier
npm install --save-dev --save-exact prettier
```

Add new script:

```
"prettier": "prettier --config .prettierrc --write .",
```

Add Prettier rules to `.eslintrc.json`:

```
{
  "plugins": [
    "prettier"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "extends": [
        ...
        "plugin:prettier/recommended"
      ],
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        ...
        "plugin:prettier/recommended"
      ],
    }
  ]
}

```

Refer:

- https://github.com/angular-eslint/angular-eslint/blob/main/docs/FORMATTING_RULES.md
- https://github.com/prettier/eslint-config-prettier
- https://github.com/prettier/eslint-plugin-prettier
