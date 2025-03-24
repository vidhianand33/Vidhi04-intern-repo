import React, { useState } from "react";

const AssignList = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  // Handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Add item to the list
  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]); // Update the list
      setInput(""); // Clear input field
    }
  };

  return (
    <div>
      <h2>List of Assignments</h2>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Display list dynamically
        ))}
      </ul>
    </div>
  );
};

export default AssignList;
