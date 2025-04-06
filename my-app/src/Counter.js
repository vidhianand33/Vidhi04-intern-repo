import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 active:bg-blue-600 focus:outline-none"
    >
      {children}
    </button>
  );
};

const Counter = ({ count, incrementCount }) => {
  console.log('Counter re-rendered!');

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-semibold text-gray-800">Count: {count}</h1>
      <Button onClick={incrementCount}>Increment</Button>
    </div>
  );
};

export default React.memo(Counter);
