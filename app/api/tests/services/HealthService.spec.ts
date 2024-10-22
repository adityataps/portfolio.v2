/**
 * @file @/tests/services/HealthService.spec.ts
 * @description Tests for the HealthService.
 */
import { MethodNotImplementedError } from '@/models/errors/serverErrors';
import {
  getAPIStatuses,
  getAPIVersion,
  getCurrentTimestamp,
  getDatabasesStatus,
} from '@/services/HealthService';

describe('HealthService', () => {
  it('should return the current timestamp', () => {
    const result = getCurrentTimestamp();
    expect(result).toBe(new Date().toISOString());
  });

  it('should return the API version', () => {
    const result = getAPIVersion();
    expect(typeof result).toBe('string');
    expect(result).toMatch(/^\d+\.\d+\.\d+$/); // Matches semantic versioning format
  });

  describe('getDatabasesStatus', () => {
    it('should throw a MethodNotImplementedError', async () => {
      await expect(getDatabasesStatus()).rejects.toThrow(MethodNotImplementedError);
    });
  });

  describe('getAPIStatuses', () => {
    it('should throw a MethodNotImplementedError', async () => {
      await expect(getAPIStatuses()).rejects.toThrow(MethodNotImplementedError);
    });
  });
});
