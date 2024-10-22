/**
 * @file @/routes/healthz/routes.ts
 * @description Routes for the healthz route.
 */
import { NextFunction, Request, Response, Router } from 'express';

import { getHealthz } from './controllers';
import { HealthzResponse } from './schemas';

const healthzRouter = Router()
  /**
   * @route GET /healthz
   * @description GET method for healthz route.
   * @returns {HealthzResponse} - output of the healthz route
   */
  .get('/', async (req: Request, res: Response<HealthzResponse>, next: NextFunction) => {
    const controllerOutput = await getHealthz();
    res.json(controllerOutput);
  });

export default healthzRouter;
