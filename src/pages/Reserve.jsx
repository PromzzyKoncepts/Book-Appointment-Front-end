import React, { useState } from 'react';

const ReservePage = ({ username, selectedItem }) => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the reservation data to your backend or do any other necessary logic
    console.log(`Reservation for ${selectedItem} on ${date} in ${city} made by ${username}`);
  };