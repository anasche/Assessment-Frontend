# Environment Configuration

This project uses environment variables for configuration management.

## Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Update the values in `.env` as needed for your environment.

## Available Variables

### Required Variables

- `VITE_API_BASE_URL`: Base URL for the API endpoints
  - Default: `https://horse.mvp-apps.ae`
  - Example: `https://horse.mvp-apps.ae`

### Optional Variables

- `VITE_NODE_ENV`: Environment mode
  - Default: `development`
  - Options: `development`, `production`

## Usage in Code

### Direct Access
```typescript
// Direct access (not recommended)
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

### Recommended Approach
```typescript
// Use the centralized config (recommended)
import { env } from '@/config/env';

const apiUrl = env.API_BASE_URL;
const isDev = env.isDevelopment;
```

## Environment Files

- `.env` - Local environment variables (ignored by Git)
- `.env.example` - Template file with all available variables
- `src/config/env.ts` - Centralized configuration with validation

## Notes

- All Vite environment variables must be prefixed with `VITE_`
- The `.env` file is ignored by Git for security
- Missing required variables will show a warning in the console
- TypeScript types are defined in `src/vite-env.d.ts`

## Development vs Production

The configuration automatically detects the environment:

```typescript
import { env } from '@/config/env';

if (env.isDevelopment) {
  // Development-only code
  console.log('API URL:', env.API_BASE_URL);
}

if (env.isProduction) {
  // Production-only code
}
```