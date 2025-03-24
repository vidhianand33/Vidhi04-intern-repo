import React, { useState, useCallback } from 'react';
import './App.css';
import HelloWorld from './HelloWorld'; 
import Counter from './Counter';
import AssignList from './AssignList';
import MyForm from './MyForm.js';

function App() {
  const [count, setCount] = useState(0);

  // Using useCallback to prevent re-creating the increment function on every render
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="App">
      {/* Pass the name prop to HelloWorld component */}
      <HelloWorld name="Focus Bear" />
      
      {/* Pass incrementCount function to Counter */}
      <Counter count={count} incrementCount={incrementCount} />
      
      <AssignList /> 
      <MyForm />
    </div>
  );
}

export default App;