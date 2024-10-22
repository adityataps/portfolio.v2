/**
 * @file @/routes/index/controllers.ts
 * @description Boilerplate controllers for "/" route.
 */
import { getNameAndAgeString } from '@/services/PersonService';

import { BaseResponse, PersonRequest, PersonResponse } from './schemas';

/**
 * Controller for GET /.
 * @returns {BaseResponse} - output of the index page
 */
function getIndex(): BaseResponse {
  return {
    message: 'Hello, world!',
    timestamp: new Date().toISOString(),
  };
}

/**
 * Controller for POST /.
 * @param {PersonRequest} body - the body of the request
 * @returns {PersonResponse} - the response body
 */
function postIndex(body: PersonRequest): PersonResponse {
  return {
    description: getNameAndAgeString(body.name, body.age),
  };
}

export { getIndex, postIndex };
