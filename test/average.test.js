const { average } = require("../utils/average");

describe('test of average.js', () => {
  
  test('average [1,2,3,4] to equal 2.5', () => {
    const result = average([1, 2, 3, 4]);
    expect(result).toBe(2.5);
  })

  test('average [4,5,6] to equal 5', () => {
    const result = average([4, 5, 6]);
    expect(result).toEqual(5);
  })

  
});