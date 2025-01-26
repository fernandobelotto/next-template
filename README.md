# Next.js Template

A modern, feature-rich Next.js template with best practices and comprehensive tooling for development, testing, and code quality.

## Features

- ⚡️ [Next.js 15](https://nextjs.org/) with React 19
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for styling
- 🧩 [Radix UI](https://www.radix-ui.com/) components
- 🌙 Dark mode support with [next-themes](https://github.com/pacocoursey/next-themes)
- 🔍 Comprehensive linting and formatting:
  - [Biome](https://biomejs.dev/) for fast formatting and linting
  - [ESLint](https://eslint.org/) with multiple plugins for code quality
  - [lint-staged](https://github.com/lint-staged/lint-staged) for pre-commit hooks
- ✅ Testing setup:
  - [Vitest](https://vitest.dev/) for unit and integration tests
  - [Cypress](https://www.cypress.io/) for end-to-end testing
  - [Testing Library](https://testing-library.com/) for component testing
- 📦 [Knip](https://github.com/webpro/knip) for finding unused exports/dependencies
- 🪝 Git hooks with [Husky](https://typicode.github.io/husky/)

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Available Commands

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Testing

- `npm run test` - Run Vitest tests with UI
- `npm run cypress:open` - Open Cypress test runner
- `npm run cypress:run` - Run Cypress tests in terminal
- `npm run cypress:run:headless` - Run Cypress tests headlessly
- `npm run test:e2e` - Run end-to-end tests

### Code Quality

- `npm run lint` - Run ESLint
- `npm run knip` - Check for unused exports/dependencies
- `npm run lint-config` - Inspect ESLint configuration
- `npm run prepare` - Install Husky hooks

## Project Structure

```
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   └── __tests__/    # Test files
├── cypress/          # E2E tests
├── public/          # Static assets
└── scripts/         # Utility scripts
```

## Contributing

1. Install dependencies
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

The project uses Husky and lint-staged to automatically run linting, formatting, and tests on staged files before each commit.

## License

This project is licensed under the MIT License.
