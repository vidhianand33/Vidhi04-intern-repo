import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick} 
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};

export default Button;
