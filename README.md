![README.md banner](./README.png)

![Package License](https://img.shields.io/github/license/teo-garcia/react-template-vite)
![Package Version](https://img.shields.io/github/package-json/v/teo-garcia/react-template-vite)

# React Template vite

A faster way to start using React with Typescript.

## Requirements

- `Node 14+`
- `Git 2+`

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

- Vite 3.
- React 18.
- Typescript 4.
- Linting with ESLint + Stylelint + Prettier.
- Git Hooks with Husky + Lint Staged.
- Unit Testing with Jest + RTL.

## Commands

| **Command** | **Description**                    |
| ----------- | ---------------------------------- |
| dev         | Run `dev:web`.                     |
| build       | Run `build:web`.                   |
| preview     | Run `vite` server (build required) |
| test        | Run `jest`                         |
| lint:css    | Lint CSS files.                    |
| lint:js     | Lint JS files.                     |