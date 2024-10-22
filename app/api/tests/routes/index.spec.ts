/**
 * @file @/tests/routes/index.spec.ts
 * @description Tests for the / (index) routes.
 */
import { getIndex, postIndex } from '@/routes/index/controllers';
import { PersonRequest, PersonResponse } from '@/routes/index/schemas';

describe('Controllers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  describe('getIndex', () => {
    it('should return a BaseResponse with a message and timestamp', () => {
      jest.setSystemTime(new Date('2024-10-13T00:00:00.000Z'));
      const response = getIndex();

      expect(response).toHaveProperty('message', 'Hello, world!');
      expect(response).toHaveProperty('timestamp', '2024-10-13T00:00:00.000Z');
      expect(new Date(response.timestamp).toString()).not.toBe('Invalid Date');
    });
  });

  describe('postIndex', () => {
    it('should return a PersonResponse with a description', () => {
      const mockRequest: PersonRequest = { name: 'John Doe', age: 30 };
      const mockDescription = 'Test description';
      const getNameAndAgeStringMock = jest.spyOn(
        require('@/services/PersonService'),
        'getNameAndAgeString',
      );
      getNameAndAgeStringMock.mockReturnValue(mockDescription);

      const response: PersonResponse = postIndex(mockRequest);

      expect(response).toHaveProperty('description', mockDescription);
      expect(getNameAndAgeStringMock).toHaveBeenCalledWith(mockRequest.name, mockRequest.age);
      expect(getNameAndAgeStringMock).toHaveBeenCalledTimes(1);

      getNameAndAgeStringMock.mockRestore();
    });
  });
});
