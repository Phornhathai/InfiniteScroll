import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import './App.css';

// Use React.lazy to create a dynamic import of the SampleData component
const SampleData = lazy(() => import('./components/SampleData'));

const App = () => {
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    // Use axios to fetch data
    axios.get('https://api.sampleapis.com/codingresources/codingResources')
      .then(res => {
        // Log data to console
        console.log(res.data);

        // Set data in state
        setSampleData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div id="app">
      <h1 className='text-center'>Infinite Scroll</h1>

      {/* Use React.Suspense to wrap the lazy-loaded component */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Pass the sampleData as a prop to the lazy-loaded component */}
        <SampleData sampleData={sampleData} />
      </Suspense>
    </div>
  );
};

export default App;
