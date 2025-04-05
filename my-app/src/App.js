import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld'; 
import Counter from './Counter';
import AssignList from './AssignList';
import MyForm from './MyForm.js';
import { useSelector } from 'react-redux';  // Import useSelector hook
import { selectCount } from './redux/counterSlice';  // Import the selector

function App() {
  // Use useSelector to get the count value from the Redux store
  const count = useSelector(selectCount);  // Accessing count using the selector function

  return (
    <div className="App">
      {/* Pass the name prop to HelloWorld component */}
      <HelloWorld name="Focus Bear" />
      
      {/* Pass count from Redux store to Counter */}
      <Counter count={count} />
      
      {/* Conditional message based on counter value */}
      {count === 0 && <p>The counter is at zero!</p>}
      {count > 0 && <p>Keep going, the counter is positive!</p>}
      {count < 0 && <p>The counter is negative. Watch out!</p>}

      <AssignList /> 
      <MyForm />
    </div>
  );
}

export default App;
