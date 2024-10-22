/**
 * @file @/routes/healthz/schemas.ts
 * @description Schemas for the healthz route.
 */
import { Schema, z } from 'zod';

import { APIStatusSchema, DatabaseStatusSchema } from '@/services/HealthService';

enum HealthzStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
}

/**
 * @type Example HealthzResponse
 * @param {string} status - status of the healthz route
 */
const HealthzResponseSchema: Schema = z
  .object({
    name: z.string(),
    version: z.string(),
    status: z.nativeEnum(HealthzStatus),
    dbStatus: z.array(DatabaseStatusSchema),
    apiStatus: z.array(APIStatusSchema),
  })
  .required({
    status: true,
  });
type HealthzResponse = z.infer<typeof HealthzResponseSchema>;

export { HealthzResponse, HealthzResponseSchema, HealthzStatus };
