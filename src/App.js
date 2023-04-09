import { useEffect, useState } from 'react';
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <Sidenav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {
            isLoggedIn
              ? (
                <>
                  <Route exact path="/cars/:id" exactly element={<CarDetails />} />
                  <Route path="/add_car" element={<AddCar />} />
                  <Route path="/delete_car" element={<DeleteCar />} />
                  <Route path="/reservations" element={<Reservations />} />
                  <Route path="/reserve" element={<Reserve />} />
                </>
              )
              : (
                <>
                  <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                  <Route path="/register" element={<Register />} />
                </>
              )
          }
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;