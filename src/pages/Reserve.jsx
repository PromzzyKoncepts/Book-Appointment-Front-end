import React, { useState } from 'react';

const ReservePage = ({ username, selectedItem }) => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
