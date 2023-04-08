import React, { useState, useEffect } from 'react';

const Reservations = ({ username }) => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Here you can write the logic to fetch the user's reservations from a database or API
    // For this example, we will use a static array of reservations
    const staticReservations = [
      { id: 1, item: 'Vespa Primavera', date: '2023-04-10', city: 'Rome' },
      { id: 2, item: 'Vespa Sprint', date: '2023-04-15', city: 'Paris' },
      { id: 3, item: 'Vespa GTS', date: '2023-04-20', city: 'Barcelona' },
    ];

    // Filter reservations for the given username
    const userReservations = staticReservations.filter((reservation) => reservation.username === username);

    // Set the filtered reservations to the state
    setReservations(userReservations);
  }, [username]);

  return (
    <div className="my-reservations-container">
      <h2>My Reservations</h2>
      {reservations.length === 0 ? (
        <p>You don't have any reservations yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Date</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.item}</td>
                <td>{reservation.date}</td>
                <td>{reservation.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Reservations;
