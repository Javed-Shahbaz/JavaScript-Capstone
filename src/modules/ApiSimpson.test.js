import { countItems } from './ApiSimpson.js';

jest.mock('./ApiSimpson.js');

describe('Test umber of items that return the API', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('Should return count of total items', async () => {
    countItems.mockReturnValueOnce(21);
    // Arrange
    const expNumber = 21;

    // Act
    const numItems = await countItems();

    // Assert
    expect(numItems).toBe(expNumber);
  });

  test('Shold be called', async () => {
    countItems();

    expect(countItems).toHaveBeenCalled();
  });
});
