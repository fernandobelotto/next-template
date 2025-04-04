# Next.js Template

A modern, feature-rich Next.js template with best practices and comprehensive tooling for development, testing, and code quality. Includes a fully functional form implementation with validation and testing.

## Features

- ⚡️ [Next.js 15](https://nextjs.org/) with React 19
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for styling
- 🧩 [Radix UI](https://www.radix-ui.com/) components with [shadcn/ui](https://ui.shadcn.com/)
- 🌙 Dark mode support with [next-themes](https://github.com/pacocoursey/next-themes)
- 📝 Form handling:
  - [React Hook Form](https://react-hook-form.com/) for form management
  - [Zod](https://zod.dev/) for schema validation
  - Accessible form components
  - Built-in validation and error handling
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
- 🔐 [Supabase](https://supabase.com/) integration for authentication and database
- 🎯 Type safety with TypeScript

## Example Implementation

The template includes a fully functional personal information form with:

- Field validation:
  - Name (minimum 2 characters)
  - Phone number (10-15 digits, proper format)
  - Date of birth (age validation 18-120 years)
- Accessibility features
- Loading states
- Success messages
- Error handling
- Comprehensive tests

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

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your Supabase configuration

4. Run the development server:

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
- `npm run dev:https` - Start development server with HTTPS
- `npm run build` - Build for production
- `npm run start` - Start production server

### Testing

- `npm run test` - Run Vitest tests
- `npm run test:ui` - Run Vitest tests with UI
- `npm run cypress:open` - Open Cypress test runner
- `npm run cypress:run` - Run Cypress tests in terminal
- `npm run cypress:run:headless` - Run Cypress tests headlessly
- `npm run test:e2e` - Run end-to-end tests

### Code Quality

- `npm run format` - Format code with Biome
- `npm run lint` - Run Biome linting
- `npm run knip` - Check for unused exports/dependencies
- `npm run lint-config` - Inspect ESLint configuration
- `npm run prepare` - Install Husky hooks

## Project Structure

```
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   │   └── ui/      # Shadcn UI components
│   ├── lib/         # Utility functions and configurations
│   └── __tests__/   # Test files
├── cypress/         # E2E tests
├── public/         # Static assets
├── scripts/        # Utility scripts
└── supabase/       # Supabase configurations
```

## Best Practices

- TypeScript for type safety
- Functional components with hooks
- Form validation with Zod schemas
- Comprehensive error handling
- Accessibility-first development
- Mobile-first responsive design
- Test-driven development

## Contributing

1. Install dependencies
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

The project uses Husky and lint-staged to automatically run linting, formatting, and tests on staged files before each commit.

## License

This project is licensed under the MIT License.
