/**
 * Environment configuration
 * Centralized access to environment variables with fallbacks
 */

export const env = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://horse.mvp-apps.ae',
  
  // Environment
  NODE_ENV: import.meta.env.VITE_NODE_ENV || 'development',
  
  // Development flags
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
} as const;

// Validation - ensure required environment variables are set
const requiredEnvVars = {
  VITE_API_BASE_URL: env.API_BASE_URL,
} as const;

// Check for missing required environment variables
const missingEnvVars = Object.entries(requiredEnvVars)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingEnvVars.length > 0) {
  console.warn(
    `Missing environment variables: ${missingEnvVars.join(', ')}\n` +
    'Using fallback values. Check your .env file.'
  );
}