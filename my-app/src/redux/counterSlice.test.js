// src/redux/counterSlice.test.js
import counterReducer, {
    increment,
    decrement,
    incrementByAmount,
  } from './counterSlice';
  
  describe('counter reducer', () => {
    const initialState = { value: 0 };
  
    it('should return the initial state', () => {
      expect(counterReducer(undefined, { type: undefined })).toEqual(initialState);
    });
  
    it('should handle increment', () => {
      expect(counterReducer(initialState, increment())).toEqual({ value: 1 });
    });
  
    it('should handle decrement', () => {
      expect(counterReducer({ value: 1 }, decrement())).toEqual({ value: 0 });
    });
  
    it('should handle incrementByAmount', () => {
      expect(counterReducer(initialState, incrementByAmount(5))).toEqual({ value: 5 });
    });
  });
  