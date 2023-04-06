import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Sidenav from './components/navbar/Sidenav';
import AddCar from './pages/AddCar';
import DeleteCar from './pages/DeleteCar';
import Reservations from './pages/Reservations';
import Reserve from './pages/Reserve';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
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
