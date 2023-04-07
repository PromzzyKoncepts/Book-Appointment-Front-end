import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Sidenav from './components/navbar/Sidenav';
import AddCar from './pages/AddCar';
import DeleteCar from './pages/DeleteCar';
import Reservations from './pages/Reservations';
import Reserve from './pages/Reserve';
import CarDetails from './components/CarDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import React, { useState } from 'react';
import Reserve from './Reserve';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/cars/:id" exactly element={<CarDetails />} />
          <Route path="/add_car" element={<AddCar />} />
          <Route path="/delete_car" element={<DeleteCar />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
