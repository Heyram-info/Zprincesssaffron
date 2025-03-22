import React, { useEffect } from 'react';
import '../styles/Analytics.css'; // Import the external CSS file
import { useAnalyticsContext } from './context/AnalyticsContext';
const ActiveUsers = ( ) => {
  const {filteredUsers,users,fetchUsers} = useAnalyticsContext()
  useEffect(() => {
    fetchUsers()
  }, [])
  
  return (
    <div className="tailwind-container mt-6">
    <div  className="p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-2">Total Users</h2>
        <p className="text-3xl font-semibold text-black">{filteredUsers?(filteredUsers.length):users.length}</p>
      </div>
    </div>
  );
};

export default ActiveUsers;
