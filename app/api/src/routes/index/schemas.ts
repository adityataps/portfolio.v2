/**
 * @file @/routes/index/schemas.ts
 * @description Boilerplate schemas for the "/" route.
 */
import { Schema, z } from 'zod';

/**
 * @type Example BaseResponse
 * @param {string} message - message to be displayed
 * @param {string} status - status of the response
 * @param {string} timestamp - timestamp of the response
 */
const BaseResponseSchema: Schema = z.object({
  message: z.string(),
  timestamp: z.string(),
});
type BaseResponse = z.infer<typeof BaseResponseSchema>;

/**
 * @type Example Person
 * @param {string} name - name of the user
 * @param {number} age - age of the user
 */
const PersonRequestSchema: Schema = z.object({
  name: z.string(),
  age: z.number().int().positive(),
});
type PersonRequest = z.infer<typeof PersonRequestSchema>;

/**
 * @type Example PersonResponse
 * @param {string} description - response with description of the person
 */
const PersonResponseSchema: Schema = z.object({
  description: z.string(),
});
type PersonResponse = z.infer<typeof PersonResponseSchema>;

export {
  BaseResponse,
  BaseResponseSchema,
  PersonRequest,
  PersonRequestSchema,
  PersonResponse,
  PersonResponseSchema,
};
