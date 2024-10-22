/**
 * @file @/middlewares/inputValidation.ts
 * @description Middleware for input validation.
 */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { z } from 'zod';

import { BadRequestError } from '@/models/errors/httpErrors';

/**
 * Express middleware for validating request body.
 * @param {z.ZodTypeAny} schema - schema against which to validate request body
 * @returns {RequestHandler} - Express middleware function
 */
function validateBody(schema: z.ZodTypeAny): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsedBody = schema.safeParse(req.body);
    if (!parsedBody.success) {
      return next(new BadRequestError('Invalid request body', parsedBody.error.issues));
    }

    return next();
  };
}

/**
 * Express middleware for validating request params.
 * @param {z.ZodTypeAny} schema - schema against which to validate request params
 * @returns {RequestHandler} - Express middleware function
 */
function validateParams(schema: z.ZodTypeAny): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsedParams = schema.safeParse(req.params);
    if (!parsedParams.success) {
      return next(new BadRequestError('Invalid request params', parsedParams.error.issues));
    }

    return next();
  };
}

export { validateBody, validateParams };
