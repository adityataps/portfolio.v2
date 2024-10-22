/**
 * @file @/routes/healthz/controllers.ts
 * @description Controllers for the healthz route.
 */
import { getAPIStatuses, getAPIVersion, getDatabasesStatus } from '@/services/HealthService';

import { HealthzResponse } from './schemas';

/**
 * Controller for GET /healthz.
 * @returns {HealthzResponse} - output of the healthz route
 * @todo Implement actual health check with databases and APIs
 */
async function getHealthz(): Promise<HealthzResponse> {
  const [dbStatus, apiStatus] = await Promise.all([getDatabasesStatus(), getAPIStatuses()]);

  return {
    name: 'Express API',
    version: getAPIVersion(),
    status: 'ok',
    dbStatus,
    apiStatus,
  };
}

export { getHealthz };
