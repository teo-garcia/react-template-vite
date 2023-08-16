![README.md banner](./README.png)

![Package License](https://img.shields.io/github/license/teo-garcia/react-template-vite)
![Package Version](https://img.shields.io/github/package-json/v/teo-garcia/react-template-vite)

# React Template Vite

Start building modern web applications using React and Vite.

## Requirements

- `Node 16+`
- `Git 2+`
- `Yarn 1`

## Installation

1. Get the template using `npx degit`:

```bash
  npx degit teo-garcia/react-template-vite my_project
```

2. Install the dependencies:

```bash
  yarn
```

3. Run the project:

```bash
  yarn dev
```

## Tools

- Vite 4.
- React 18.
- Typescript 4.
- ESLint 8 + Prettier 3.
- Husky 8 + Lint Staged 13.
- Jest 29 + Testing Library React 14.
- Playwright 1.
- MSW 1.

## Commands

| **Command**             | **Description**                                 |
| ----------------------- | ----------------------------------------------- |
| dev                     | Run `dev:web`.                                  |
| build                   | Run `build:web`.                                |
| dev:web                 | Run `vite` in `DEV` mode.                       |
| build:web               | Run `vite` in `PROD` mode.                      |
| start:web               | Run `vite` server (build required).             |
| test:unit               | Run `jest`.                                     |
| test:e2e                | Run `dev`, and `playwright`.                    |
| lint:css                | Lint CSS files.                                 |
| lint:js                 | Lint JS files.                                  |
| create:component <name> | Creates a component at `src/components/<name>`. |
| create:feature <name>   | Creates a component at `src/features/<name>`.   |
