import React from 'react';
import { useSelector, useDispatch } from 'react-redux';  // Import hooks
import { increment, decrement } from './redux/counterSlice';  // Import the actions

const Counter = () => {
  console.log("Counter re-rendered!");

  // Get the current count from the Redux store using useSelector
  const count = useSelector((state) => state.counter.value);

  // Get dispatch function from useDispatch to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1> {/* Display count value */}
      <button onClick={() => dispatch(increment())}>Increment</button> {/* Button to increment */}
      <button onClick={() => dispatch(decrement())}>Decrement</button> {/* Button to decrement */}
    </div>
  );
};

export default React.memo(Counter);  // Prevents unnecessary re-renders
