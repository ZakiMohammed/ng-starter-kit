# Ng Starter Kit

Starter kit for Angular application.

## Steps

1. JSON Server [Done]
1. ESLint and Prettier [Done]
1. Build commands and config [Done]
1. Budget [Done]
1. Install Source Map Explorer [Done]
1. Environment files [Done]
1. Bootstrap and Bootstrap Icon [Done]
1. Pages - Home, About, Not Found, Login [Done]
1. Skeleton - Header, Footer, Shell, Routing [Done]
1. Add toaster [Done]
1. Login - Login, Routing, Guards [Done]
1. Interceptor - Token, Error [Done]
1. Features - List, Details
1. App Insights

## Run App

Below command will run the project:

```
npm run server
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

## Bundle Monitoring and Visualization

For monitoring the bundle size and visualization of components we can use 2 packages:

- Source Map Explorer
- Vite Bundle Visualizer

### 1. Source Map Explorer

For source map explorer follow below steps:

Install `source-map-explorer` as `devDependencies`:

```
npm i source-map-explorer -D
```

Add scripts in `package.json` file:

```
"scripts": {
  "build:analyze": "ng build --configuration production --source-map",
  "explorer": "npm run build:analyze && source-map-explorer dist/**/*.js"
}
```

### 2. Vite Bundle Visualizer

For `vite-bundle-visualizer` run below command after running the `build:analyze` command:

```
npx vite-bundle-visualizer --i C:\Zaki\Study\Angular\ng-starter-kit\dist\ng-starter-kit\browser\index.html
```

## Add Bootstrap and Bootstrap Icon

Install `bootstrap` and `bootstrap-icon`:

```
npm i bootstrap bootstrap-icon
```

Add to `style.scss`:

```
@import 'bootstrap/scss/bootstrap';
@import 'bootstrap-icons/font/bootstrap-icons';
```

## Add Toastr

Install `ngx-toastr`:

```
npm i ngx-toastr
```

Add to `app.config.ts` file:

```
...
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
};
```
