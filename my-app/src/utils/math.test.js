import { add } from './math';

describe('add function', () => {
  it('adds two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);        // 1 + 2 should be 3
    expect(add(-1, 1)).toBe(0);       // -1 + 1 should be 0
    expect(add(-1, -1)).toBe(-2);     // -1 + -1 should be -2
  });
});
