import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import Item from './Item';
function Birthdaymenu() {
    const [data,setData]=useState([])
    async function fetchData() {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            return;
          }
      
          const response = await axios.get('http://localhost:8080/gift/get', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      const birthdayData = data.filter(item => item.theme === 'Birthday');

    return ( 
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
             {birthdayData.map((x) => (
        <Item key={x.gid} gift={x} />
      ))}
        </div>
     );
}

export default Birthdaymenu;