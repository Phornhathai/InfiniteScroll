import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SampleData from './components/SampleData';
import './App.css'


const App = () => {

  const [sampleData, setSampleData] = useState([])
  

  useEffect(() => {
    // ใช้ axios ดึงข้อมูล
    axios.get('https://api.sampleapis.com/codingresources/codingResources')
      .then(res => {
        // แสดงข้อมูลใน console
        console.log(res.data);

        // ตั้งค่าข้อมูลใน state
        setSampleData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); 
  // ให้ useEffect ทำงานเมื่อ component ถูก mount เท่านั้น

  return (
    <div id="app">
      <h1 className='text-center'>Infinite Scroll</h1>
      {/* ส่งค่า props sampleData ไปที่ components สำหรับแสดงข้อมูล */}
      <SampleData sampleData={sampleData} />
    </div>
  );
};

export default App;