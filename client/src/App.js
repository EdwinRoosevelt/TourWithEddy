import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import "./App.css";
import store from './store';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import About from './components/layout/About';
import TripsSection from './components/trips/TripsSection';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import TripDetail from './components/trips/TripDetail';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Register />
        <Login />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Landing />
                <TripsSection />
              </div>
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/trips" element={<TripDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
