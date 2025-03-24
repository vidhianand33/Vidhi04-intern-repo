import React from 'react';

const Counter = ({ count, incrementCount }) => {
  console.log("Counter re-rendered!");

  return (
    <div>
      <h1>Count: {count}</h1> {/* Display count value */}
      <button onClick={incrementCount}>Increment</button> {/* Button to increment */}
    </div>
  );
};

export default React.memo(Counter);  // Prevents unnecessary re-renders