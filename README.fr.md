# Frontend Starter

A reusable production-ready(not as of yet :P) frontend starter built with React and TypeScript.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query (TODO)
- React Hook Form (TODO)
- Zod (TODO)
- Vitest
- React Testing Library
- MSW (TODO)
- Docker (TODO)
- GitHub Actions (TODO)

## Features

- Feature-based project architecture
- API integration (TODO)
- Form validation (TODO)
- Unit and integration testing (TODO)
- Dockerized production build (TODO)
- CI/CD with GitHub Actions (TODO)
- Automated code quality checks (TODO)
- Dependency management with Dependabot (TODO)
- Static analysis with SonarCloud (TODO)

## Getting Started

```bash
npm install
npm run dev
```

### Testing

```bash
npm run test
```

### Build

```bash
npm run build
```

## License

MIT

## Documentation

- [Architecture](docs/architecture.md)
- [Development](docs/development.md)
- [Deployment](docs/deployment.md)

## Git Hooks

This project uses **Husky** and **lint-staged** to automatically check and format staged files before every commit. Every `commit`, it runs `eslint --fix` and `prettier --write`.

> Only files staged for the commit are processed.

## Available Scripts

- `npm run help`: Lists all available npm scripts defined in package.json.
- `npm run dev`: Starts the Vite development server with hot module replacement.
- `npm run build`: Checks the TypeScript project and creates a production build with Vite. (tsc -b && vite build)
- `npm run lint`: Runs ESLint across the project to find code-quality and potential programming issues.
- `npm run format`: Formats the project using Prettier.
- `npm run format:check`: Checks whether the project follows the configured Prettier formatting rules without modifying files.
- `npm run preview`: Starts a local server that serves the production build created by `npm run build`. (Run `npm run build` first.)

### Testing

- `npm run test`: Starts Vitest in interactive watch mode. Tests are automatically re-run when relevant files change.
- `npm run test:run`: Runs the test suite once and exits..
- `npm run test:coverage`: Runs the tests and generates a code-coverage report.
- `npm run test:watch`: Explicitly starts Vitest in watch mode.
