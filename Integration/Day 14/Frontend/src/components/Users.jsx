import React, { Component } from 'react'
import '../assets/css/users.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
        const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      const response = await axios.get('http://localhost:8080/user/get',{
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
      console.log(response.data);
      setUsers(response.data);
    } 
    catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className='users-content'>
  <h1>User List</h1>
  <div className='users-table-container'>
    <table className='user-table'>
      <thead>
        <tr className='user-tr-main'>
          <th className='user-th'>Name</th>
          <th className='user-th'>Email</th>
          <th className='user-th'>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr className='user-tr' key={user.id}>
            <td className='user-td'>{user.name}</td>
            <td className='user-td'>{user.email}</td>
            <td className='user-td'>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}