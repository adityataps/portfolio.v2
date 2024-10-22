/**
 * @file @/models/errors/types.ts
 * @description This file defines common types to be used across the API.
 */

/**
 * @type Type for error responses in the API.
 * @param {string} errorName - name of the error
 * @param {string} errorMessage - message of the error
 * @param {string} errorRoute - route where the error occurred
 * @param {number} errorStatusCode - HTTP status code of the error
 * @param {object} errorData - additional data of the error
 */
type RequestErrorResponse = {
  errorName: string;
  errorMessage: string;
  errorRoute: string;
  errorStatusCode: number;
  errorData: object;
};

export { RequestErrorResponse };
