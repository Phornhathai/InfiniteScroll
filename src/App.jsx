import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SampleData from './components/SampleData';

const App = () => {
  const [sampleData, setSampleData] = useState([]);
  

  useEffect(() => {
    // Use axios to fetch data
    axios.get('https://api.sampleapis.com/codingresources/codingResources')
      .then(res => {
       setSampleData(res.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div id="app">
      <h1 className='text-center'>Infinite Scroll</h1>
      <SampleData sampleData={sampleData} />
    </div>
  );
};

export default App;