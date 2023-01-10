![README.md banner](./README.png)

![Package License](https://img.shields.io/github/license/teo-garcia/react-template-vite)
![Package Version](https://img.shields.io/github/package-json/v/teo-garcia/react-template-vite)

# React Template Vite

A faster way to start using React with Typescript.

## Requirements

- `Node 16+`
- `Git 2+`
- `Yarn 1`

## Installation

1. Copy the repo or use the `gh` tool:

```bash
  gh repo create my-project --private --clone --template teo-garcia/react-template-vite
```

2. Install the dependencies:

```bash
  yarn
```

3. Run the project:

```bash
  yarn dev
```

## Features

- Vite 4.
- React 18.
- Typescript 4.
- Linting with ESLint + Stylelint + Prettier.
- Git Hooks with Husky + Lint Staged.
- Unit Testing with Jest + RTL.
- E2E Testing with Playwright.

## Commands

| **Command** | **Description**                              |
| ----------- | -------------------------------------------- |
| dev         | Run `dev:web`.                               |
| build       | Run `build:web`.                             |
| dev:web     | Run `vite` in `DEV` mode.                    |
| build:web   | Run `vite` in `PROD` mode.                   |
| start:web   | Run `vite` server (build required).          |
| test:unit   | Run `jest`.                                  |
| test:e2e    | Run `build:web`, `start:web`, and `cypress`. |
| lint:css    | Lint CSS files.                              |
| lint:js     | Lint JS files.                               |
