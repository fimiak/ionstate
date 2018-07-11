import { hello } from './sum';

describe('hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('hello');
  });
});
