/**
 * @file @/tests/routes/healthz.spec.ts
 * @description Tests for the /healthz routes.
 */
import { getHealthz } from '@/routes/healthz/controllers';
import { HealthzResponse } from '@/routes/healthz/schemas';

describe('Healthz Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should return a HealthzResponse with correct properties', async () => {
    const mockVersion = '1.0.0';
    const mockDbStatus = 'test';
    const mockApiStatus = 'test';

    const getDatabasesStatusMock = jest.spyOn(
      require('@/services/HealthService'),
      'getDatabasesStatus',
    );
    getDatabasesStatusMock.mockReturnValue(mockDbStatus);

    const getAPIStatusesMock = jest.spyOn(require('@/services/HealthService'), 'getAPIStatuses');
    getAPIStatusesMock.mockReturnValue(mockApiStatus);

    const getAPIVersionMock = jest.spyOn(require('@/services/HealthService'), 'getAPIVersion');
    getAPIVersionMock.mockReturnValue(mockVersion);

    const response: HealthzResponse = await getHealthz();

    expect(response).toEqual({
      name: 'Express API',
      version: '1.0.0',
      status: 'ok',
      dbStatus: 'test',
      apiStatus: 'test',
    });

    expect(getAPIVersionMock).toHaveBeenCalledTimes(1);
    expect(getDatabasesStatusMock).toHaveBeenCalledTimes(1);
    expect(getAPIStatusesMock).toHaveBeenCalledTimes(1);

    getAPIVersionMock.mockRestore();
    getDatabasesStatusMock.mockRestore();
    getAPIStatusesMock.mockRestore();
  });
});
