import React from "react";
import Button from "./Button";  // Import the Button component

const Counter = ({ count, incrementCount }) => {
  console.log("Counter re-rendered!");

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-800">Count: {count}</h1> 
      <Button onClick={incrementCount}>Increment</Button> {/* Use Button component */}
    </div>
  );
};

export default React.memo(Counter)