/**
 * @file @/models/errors/httpErrors.ts
 * @description This file defines custom errors to be used in the API.
 */

/**
 * Custom error for HTTP requests.
 * @extends Error
 * @param {number} statusCode - HTTP status code
 * @param {string} message - error message
 * @param {Error} originalError - original error object
 * @param {Record<string, any>} data - additional data to be included in the error response
 * @example
 * throw new HttpError('Not found', 404);
 */
class HttpError extends Error {
  public readonly statusCode: number;
  public readonly originalError?: Error;
  public readonly data?: Record<string, any>;

  constructor(statusCode: number, message?: string);
  constructor(
    statusCode: number,
    message?: string,
    originalError?: Error,
    data?: Record<string, any>,
  );
  constructor(
    statusCode: number,
    message?: string,
    originalError?: Error,
    data?: Record<string, any>,
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype); // Restore prototype chain
    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.originalError = originalError;
    this.data = data;

    if (originalError?.stack) {
      this.stack += `\n\n---\nCaused by: \n${originalError.stack}`;
    }
  }

  /**
   * Returns a JSON representation of the error.
   * @returns {Record<string, any>} - JSON representation of the error
   */
  public toJSON(): Record<string, any> {
    return {
      message: this.message,
      statusCode: this.statusCode,
      originalError: this.originalError,
      data: this.data,
    };
  }
}

/**
 * Custom error for bad requests.
 * @extends HttpError
 * @param {string} message - error message
 * @param {Record<string, any>} data - additional data for the error response
 * @example
 * throw new BadRequestError('Invalid input', { requiredParam: "missing" });
 */
class BadRequestError extends HttpError {
  constructor(message: string, data: Record<string, any>) {
    super(400, message, undefined, data);
    this.name = 'BadRequestError';
  }
}

/**
 * Custom error for not found errors.
 * @extends HttpError
 * @param {string} message - error message
 * @param {Record<string, any>} data - additional data for the error response
 */
class NotFoundError extends HttpError {
  constructor(message: string, data: Record<string, any>) {
    super(404, message, undefined, data);
    this.name = 'NotFoundError';
  }
}

/**
 * Custom error for internal server errors.
 * @extends HttpError
 * @param {string} message - error message
 * @param {Error} originalError - original error object
 * @example
 * throw new InternalServerError('Something went wrong', Error(...));
 */
class InternalServerError extends HttpError {
  constructor(message: string, originalError?: Error) {
    super(500, message, originalError); // 500 Internal server error
    this.name = 'InternalServerError';
  }
}

export { HttpError, BadRequestError, InternalServerError, NotFoundError };
