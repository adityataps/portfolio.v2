/**
 * @file @/models/errors/serverErrors.ts
 * @description This file defines custom errors for internal server errors.
 */
import { InternalServerError } from '@/models/errors/httpErrors';

/**
 * Custom error for environment variable errors.
 * @extends Error
 * @param {string} key - environment variable key
 * @example
 * throw new EnvironmentVariableError('MY_ENV_VAR');
 */
class EnvironmentVariableError extends InternalServerError {
  public readonly internalErrorName: string;

  constructor(key?: string) {
    super(`Missing environment variable key${key ? `: ${key}` : ''}`);
    this.internalErrorName = 'EnvironmentVariableError';
  }
}

/**
 * Custom error for method not implemented errors.
 * @extends Error
 * @param {string} method - method name
 * @example
 * throw new MethodNotImplementedError('myMethod');
 */
class MethodNotImplementedError extends InternalServerError {
  public readonly internalErrorName: string;

  constructor(method: string) {
    super(`Method ${method} is not implemented`);
    this.internalErrorName = 'MethodNotImplementedError';
  }
}

export { EnvironmentVariableError, MethodNotImplementedError };
