/**
 * @file @/app.ts
 * @description Express entrypoint for the application.
 */
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import errorHandlerMiddleware from '@/middlewares/errorHandling';
import healthzRouter from '@/routes/healthz/routes';
import indexRouter from '@/routes/index/routes';
import { getEnvironmentVariable } from '@/utils/env';

import { NotFoundError } from './models/errors/httpErrors';

const EXPRESS_API_PORT = parseInt(getEnvironmentVariable('EXPRESS_API_PORT', '3000'));
const EXPRESS_API_HOST = getEnvironmentVariable('EXPRESS_API_HOST', '0.0.0.0');

const api = express()
  .use(helmet())
  .use(cors())
  .use(morgan('dev'))
  .use(express.json())
  .use('/', indexRouter)
  .use('/healthz', healthzRouter)

  /**
   * Handles unknown routes with 404.
   * @param {Request} req - request
   * @param {Response} res - response
   * @param {NextFunction} next - next function
   */
  .use((req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError('Route not found', { path: req.path }));
  })

  // Custom error handler for HttpErrors
  .use(errorHandlerMiddleware);

// Only start the server if this file is run directly
if (require.main === module) {
  api.listen(EXPRESS_API_PORT, EXPRESS_API_HOST, () => {
    console.log(`Server is running on port ${EXPRESS_API_PORT}`);
  });
}

export default api;
