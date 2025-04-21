# React-Next Boilerplate

[![pipeline status](https://gitlab.oncode.it/oncode/commonprojects/react-next-boilerplate/badges/main/pipeline.svg)](https://gitlab.oncode.it/oncode/commonprojects/react-next-boilerplate/badges/main/pipeline.svg)
[![coverage status](https://gitlab.oncode.it/oncode/commonprojects/react-next-boilerplate/badges/main/coverage.svg)](https://gitlab.oncode.it/oncode/commonprojects/react-next-boilerplate/badges/main/coverage.svg)
[![latest release](https://gitlab.oncode.it/oncode/commonprojects/react-next-boilerplate/-/badges/release.svg)](https://gitlab.oncode.it/oncode/commonprojects/react-next-boilerplate/-/badges/release.svg)

This repository provides a boilerplate for developing a Next.js application with modern tooling and best practices.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

### Installation

Clone the repository and install dependencies:

```sh
pnpm install # install deps
pnpm husky # to configure git hooks
```

## Authenticate Gitlab registry

- Create a `.npmrc` with this basic configuration

If you need an authorization to install private dependencies then add in `.npmrc` also

```
@oncode:registry=https://gitlab.oncode.it/api/v4/projects/948/packages/npm/
//gitlab.oncode.it/api/v4/projects/948/packages/npm/:_authToken=${NPM_TOKEN}
always-auth=true

```

- Replace `${NPM_TOKEN}` with a generated personal gitlab access token

### Development

Start the development server:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building the Application

Generate a production build:

```sh
pnpm build
```

### Running Tests

Run unit and integration tests:

```sh
pnpm test
```

Run end-to-end tests with Cypress:

```sh
pnpm cypress open
```

### Linting and Formatting

Check for linting issues:

```sh
pnpm lint
```

Format code using Prettier:

```sh
pnpm format
```

### Running with Docker

Build and run the application in a container:

```sh
docker build -t react-next-app .
docker run -p 3000:3000 react-next-app
```

## 📁 Project Structure

```
react-next-boilerplate
├── .husky/               # Git hooks for enforcing code quality
├── .storybook/           # Storybook configuration for UI component development
├── coverage/             # Code coverage reports
├── cypress/              # End-to-end testing setup with Cypress
├── public/               # Public assets (favicons, images, etc.)
├── src/                  # Main source code for the application
├── test/                 # Unit and integration tests
├── .editorconfig         # Editor configuration for consistent formatting
├── .gitignore            # Files and directories to ignore in Git
├── .gitlab-ci.yml        # CI/CD pipeline configuration for GitLab
├── .prettierignore       # Files ignored by Prettier
├── .prettierrc.json      # Prettier configuration for code formatting
├── .pnpmrc               # Pnpm configuration
├── CHANGELOG.md          # Changelog for tracking changes
├── cypress.config.ts     # Cypress configuration for end-to-end testing
├── Dockerfile            # Docker configuration for containerizing the application
├── eslint.config.mjs     # ESLint configuration for linting
├── next.config.ts        # Next.js configuration file
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration for styling
├── tailwind.config.js    # Tailwind CSS configuration for styling
├── README.md             # Project documentation
├── tsconfig.json         # TypeScript configuration
├── vitest.config.mts     # Vitest configuration for unit testing
├── pnpm-lock.yaml        # Pnpm lockfile for dependency management
```

## 📜 Configuration Files

### `.gitlab-ci.yml`

Defines CI/CD pipeline for GitLab, automating testing and deployment.

### `next.config.ts`

Customizes Next.js settings, including API routes, rewrites, and more.

### `cypress.config.ts`

Sets up Cypress for end-to-end testing.

### `eslint.config.mjs`

Defines linting rules for consistent code style.

### `postcss.config.mjs`

Configures PostCSS for handling CSS transformations.

### `vite.config.ts`

Configures Vite for fast development builds.

### `vitest.config.mts`

Configures Vitest for running unit tests efficiently.

### `tsconfig.json`

Defines TypeScript compiler options.

### `Dockerfile`

Defines the Docker image setup for containerizing the application.

### `.husky/*`

Defines git hooks operations.

### `.editorconfig`

Configures consistent code formatting across various editors.

### `.nycrc.json`

Configures NYC for code coverage with Istanbul.

### `.pnpmrc`

Configures Pnpm for consistent dependency management.

### `tailwind.config.js`

Configures Tailwind CSS for styling.

## 📜 Additional Documentation

- [Next.js](https://nextjs.org/docs)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Storybook](https://storybook.js.org/)
- [Cypress](https://www.cypress.io/)
- [Vitest](https://vitest.dev/)
- [GitLab](https://gitlab.com/)
- [Husky](https://typicode.github.io/husky/)
- [Vite](https://vitejs.dev/)
- [EditorConfig](https://editorconfig.org/)
- [Istanbul](https://istanbul.js.org/)
- [NYC](https://github.com/istanbuljs/nyc)
- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- [Docker](https://www.docker.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
