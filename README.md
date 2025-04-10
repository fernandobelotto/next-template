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
- 🔒 Environment variable validation with [envalid](https://github.com/af/envalid)

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

```bash
npm run setup
# or
yarn setup
# or
pnpm setup
# or
bun setup
```

This will create a `.env.local` file from `.env.example`. You'll need to update the following variables:

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `STRIPE_SECRET_KEY` - Your Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key

Optional variables:
- `VAPID_PUBLIC_KEY` - For web push notifications
- `VAPID_PRIVATE_KEY` - For web push notifications

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
- `npm run setup` - Set up environment variables

### Supabase Management

- `npm run supabase:start` - Start local Supabase instance
- `npm run supabase:stop` - Stop local Supabase instance
- `npm run supabase:reset` - Reset local Supabase instance (stop and start)
- `npm run supabase:status` - Check Supabase instance status
- `npm run supabase:db:reset` - Reset database to initial state
- `npm run supabase:db:push` - Push local database changes to remote
- `npm run supabase:db:pull` - Pull remote database changes to local
- `npm run supabase:db:dump` - Create a database backup
- `npm run supabase:db:restore` - Restore database from backup
- `npm run supabase:gen:types` - Generate TypeScript types from database schema

### Automated Database Migrations and Functions Deployment

The project includes a GitHub Action that automatically handles database migrations and Edge Functions deployment when changes are pushed to the `staging` or `main` branches. The workflow:

1. Triggers on pushes to `staging` or `main` branches when changes are made to:
   - `supabase/migrations/**`
   - `supabase/functions/**`
   - `.github/workflows/supabase-migration.yml`

2. Deploys to the appropriate environment:
   - `staging` branch → Staging Supabase instance
   - `main` branch → Production Supabase instance

3. For each environment, it:
   - Pushes database migrations
   - Deploys Edge Functions
   - Generates and commits updated TypeScript types

#### Required GitHub Secrets

To use the automated deployments, you need to set up the following secrets in your GitHub repository:

- `SUPABASE_ACCESS_TOKEN` - Your Supabase access token
- `SUPABASE_PROJECT_ID_STAGING` - Your staging Supabase project ID
- `SUPABASE_PROJECT_ID_PROD` - Your production Supabase project ID

You can find these values in your Supabase dashboard:
1. Access Token: Settings → API → `service_role` key
2. Project ID: Project Settings → General → Reference ID

#### Edge Functions Configuration

Edge Functions can be configured using the `config.toml` file in your Supabase project. For example:

```toml
[functions.hello-world]
verify_jwt = false
```

This allows you to:
- Configure JWT verification per function
- Set import map locations
- Configure other function-specific settings

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
│   │   └── env.ts   # Environment variable validation
│   └── __tests__/   # Test files
├── cypress/         # E2E tests
├── public/         # Static assets
├── scripts/        # Utility scripts
│   └── setup.ts    # Environment setup script
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
- Environment variable validation

## Contributing

1. Install dependencies
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

The project uses Husky and lint-staged to automatically run linting, formatting, and tests on staged files before each commit.

## License

This project is licensed under the MIT License.

### Pull Request Checks

The project includes automated checks for pull requests that ensure code quality and functionality:

1. **Database Testing**
   - Runs pgTAP tests on database migrations
   - Verifies database schema changes
   - Tests database functions and triggers

2. **Edge Functions Testing**
   - Runs Deno tests for Edge Functions
   - Verifies function behavior
   - Tests function integration

3. **Type Verification**
   - Generates and verifies TypeScript types
   - Ensures type definitions match database schema
   - Maintains type safety across the application

4. **Code Quality**
   - Runs Biome linting
   - Applies code formatting
   - Checks for unused exports/dependencies

5. **Testing**
   - Runs unit tests with Vitest
   - Runs end-to-end tests with Cypress

These checks run automatically when:
- A pull request is opened
- Changes are pushed to an existing pull request
- The pull request is synchronized with the base branch

The checks must pass before a pull request can be merged into `main` or `staging`.

#### Testing Setup

To write tests for your Supabase components:

1. **Database Tests**:
   - Create tests in `supabase/tests/database/`
   - Use pgTAP for writing database tests
   - Tests are run automatically in CI

2. **Edge Function Tests**:
   - Create tests in `supabase/tests/functions/`
   - Use Deno's built-in test runner
   - Tests are run automatically in CI

3. **Type Generation**:
   - Types are automatically generated from your database schema
   - Generated types are verified in CI
   - Types are committed to the repository
