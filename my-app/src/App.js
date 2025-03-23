import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './HelloWorld'; 
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      {/* Pass the name prop to HelloWorld component */}
      <HelloWorld name="Focus Bear" />
      <Counter /> {/* Display the Counter component */}
      </div>
  );
}

export default App;