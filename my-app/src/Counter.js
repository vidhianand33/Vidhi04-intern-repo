import React, { useState } from 'react';

const Counter = () => {
  // Initialize state with useState
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1); // Update state using setCount
  };

  return (
    <div>
      <h1>Count: {count}</h1> {/* Display count value */}
      <button onClick={incrementCount}>Increment</button> {/* Button to increment */}
    </div>
  );
};

export default Counter;