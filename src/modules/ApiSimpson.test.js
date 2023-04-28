import { countOccurrences } from './ApiSimpson.js';

jest.mock('./ApiSimpson.js');

describe('Test number of items that return the API', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('Should return number of total items', async () => {
    countOccurrences.mockReturnValueOnce(23);
    // Arrange
    const expectedNumber = 23;

    // Act
    const numberItems = await countOccurrences();

    // Assert
    expect(numberItems).toBe(expectedNumber);
  });

  test('Shold be called', async () => {
    countOccurrences();

    expect(countOccurrences).toHaveBeenCalled();
  });
});
