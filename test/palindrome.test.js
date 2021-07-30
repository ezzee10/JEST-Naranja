const { palindrome } = require('../utils/utility-for-testing');

describe('metodos de Util', () => {
  
  test('palindrome of mindhub', () => {
    const result = palindrome('mindhub');
    expect(result).toBe('buhdnim');
  })

  test('palindrome of Argentina', () => {
    const result = palindrome('Argentina');
    expect(result).toBe('anitnegrA');
  })

  test('palindrome of empty string', () => {
    const result = palindrome('');
    expect(result).toBe('');
  })

  test('palindrome of undefined', () => {
    const result = palindrome();
    expect(result).toBeUndefined();
  })

  test('palindrome of Brasil', () => {
    const result = palindrome('Brasil');
    expect(result).toEqual('lisarB');
  });

});
