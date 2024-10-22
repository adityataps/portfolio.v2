/**
 * @file @/utils/env.ts
 * @description Utility functions for Express API environment.
 */
import { EnvironmentVariableError } from '@/models/errors/serverErrors';

/**
 * Gets environment variable value from key (or returns default)
 * @param {string} key - key for environment variable
 * @param {string} defaultValue - optional default value for environment variable if not found
 * @returns {string} environment variable value
 * @throws {EnvironmentVariableError} if environment variable key or value is missing
 * @example
 * const apiKey = getEnvVariable('API_KEY');
 */
function getEnvironmentVariable(key: string, defaultValue?: string): string {
  if (key.length === 0) throw new EnvironmentVariableError();

  const value = process.env[key] as string;
  if (value) return value;
  else if (defaultValue) return defaultValue;

  throw new EnvironmentVariableError(`Missing environment variable value for key: ${key}`);
}

export { getEnvironmentVariable };
