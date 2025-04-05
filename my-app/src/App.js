import React, { useState, useCallback } from "react";
import HelloWorld from "./HelloWorld"; 
import Counter from "./Counter";
import AssignList from "./AssignList";
import MyForm from "./MyForm.js";

function App() {
  const [count, setCount] = useState(0);

  // Using useCallback to prevent re-creating the increment function on every render
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 space-y-6">
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
