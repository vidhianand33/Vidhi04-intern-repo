import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './HelloWorld'; 
import Counter from './Counter'
import AssignList from './AssignList';
import MyForm from './MyForm';

function App() {
  return (
    <div className="App">
      {/* Pass the name prop to HelloWorld component */}
      <HelloWorld name="Focus Bear" />
      <Counter /> {/* Display the Counter component */}
      <AssignList/> 
      <MyForm/>
      </div>
  );
}

export default App;