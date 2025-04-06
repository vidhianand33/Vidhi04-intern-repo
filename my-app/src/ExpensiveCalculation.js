import React, { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [range, setRange] = useState(100);
  
  // Create a list of numbers
  const numbers = Array.from({ length: range }, (_, index) => index + 1);

  // Expensive calculation: summing all numbers
  const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation...');
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]); // Re-run the calculation only when the numbers array changes
  
  return (
    <div>
      <h2>Expensive Calculation with useMemo</h2>
      <p>Sum of numbers from 1 to {range}: {expensiveCalculation}</p>
      
      {/* Render list of numbers */}
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      
      {/* Button to increase the range */}
      <button onClick={() => setRange(range + 100)}>Increase Range</button>
    </div>
  );
}

export default ExpensiveCalculation;
