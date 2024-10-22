/**
 * @file @/routes/index/routes.ts
 * @description Boilerplate endpoints for "/" route.
 */
import { NextFunction, Request, Response, Router } from 'express';

import { validateBody } from '@/middlewares/inputValidation';
import { HttpError } from '@/models/errors/httpErrors';

import { getIndex, postIndex } from './controllers';
import { BaseResponse, PersonRequest, PersonRequestSchema, PersonResponse } from './schemas';

const indexRouter = Router()
  /**
   * @route POST /
   * @description POST method for index route.
   * @returns {Record<PersonResponse>} - boilerplate output
   */
  .post(
    '/',
    validateBody(PersonRequestSchema),
    (
      req: Request<{}, {}, PersonRequest>,
      res: Response<PersonResponse>,
      next: NextFunction,
    ): void => {
      const controllerOutput = postIndex(req.body);
      res.json(controllerOutput);
    },
  )

  /**
   * @route GET /
   * @description GET method for index route.
   * @returns {Record<BaseResponse>} - boilerplate output
   */
  .get('/', (req: Request, res: Response<BaseResponse>, next: NextFunction): void => {
    const controllerOutput = getIndex();
    res.json(controllerOutput);
  });

export default indexRouter;
