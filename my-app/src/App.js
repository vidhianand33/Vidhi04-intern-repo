import React, { useState, useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HelloWorld from './HelloWorld'; 
import Counter from './Counter';
import AssignList from './AssignList';
import MyForm from './MyForm.js';
import DataFetcher from './DataFetcher';
import Home from './Home'; // Create this component
import Profile from './Profile'; // Create this component

function App() {
  const [count, setCount] = useState(0);

  // Using useCallback to prevent re-creating the increment function on every render
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Other Components */}
        <HelloWorld name="Focus Bear" />
        <Counter count={count} incrementCount={incrementCount} />
        <AssignList /> 
        <MyForm />
        <h1>React useEffect Example</h1>
        <DataFetcher />
      </div>
    </Router>
  );
}

export default App;
