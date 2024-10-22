/**
 * @file @/tests/services/PersonService.spec.ts
 * @description Tests for the PersonService.
 */
import { getNameAndAgeString } from '@/services/PersonService';

describe('PersonService', () => {
  it('should return the name and age string', () => {
    const result = getNameAndAgeString('John', 30);
    expect(result).toBe('Hello John, you are 30 years old.');
  });
});
