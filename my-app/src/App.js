import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld'; 
import Counter from './Counter';
import AssignList from './AssignList';
import MyForm from './MyForm.js';
import { useSelector, useDispatch } from 'react-redux';  // Import Redux hooks
import { increment } from './redux/counterSlice';  // Import the increment action

function App() {
  // Use useSelector to get the count value from the Redux store
  const count = useSelector((state) => state.counter.value);

  // Use useDispatch to get the dispatch function
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* Pass the name prop to HelloWorld component */}
      <HelloWorld name="Focus Bear" />
      
      {/* Pass count from Redux store and dispatch function to Counter */}
      <Counter count={count} incrementCount={() => dispatch(increment())} />
      
      <AssignList /> 
      <MyForm />
    </div>
  );
}

export default App;
