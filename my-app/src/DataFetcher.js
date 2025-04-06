import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Log messages on mount and unmount
  useEffect(() => {
    console.log('Component mounted');

    // Cleanup function to log when component unmounts
    return () => {
      console.log('Component unmounted');
    };
  }, []);  // Empty array ensures this effect runs only once on mount and unmount

  // Fetch data from API when button is clicked
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>

      {loading && <p>Loading...</p>}

      {data && (
        <ul>
          {data.slice(0, 5).map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
