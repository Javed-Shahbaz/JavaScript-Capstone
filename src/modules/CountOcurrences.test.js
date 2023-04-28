import { countOccurrences } from './ApiSimpson.js';

test('Shoul return number of total items', async () => {
// Arrange
  const expectedNumber = 23;

  // Act
  const numberItems = await countOccurrences();

  // Assert
  expect(numberItems).toBe(expectedNumber);
});