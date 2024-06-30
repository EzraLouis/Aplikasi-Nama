import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ItemList from './ItemList';
import Kalkulator from './Kalkulator';
import About from './About';
import API from './API';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <Provider store={store}> {/* Sediakan Redux store di sini */}
      <Router>
        <div className="bg-gray-700 min-h-screen flex flex-col justify-center items-center">
          <nav className="bg-gray-800 w-full p-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link to="/home" className="text-white hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-blue-400">About</Link>
              </li>
              <li>
                <Link to="/kalkulator" className="text-white hover:text-blue-400">Kalkulator</Link>
              </li>
              <li>
                <Link to="/api" className="text-white hover:text-blue-400">API</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/kalkulator" element={<Kalkulator />} />
            <Route path="/api" element={<API />} />
          </Routes>
        </div>
      </Router>
    </Provider> 
  );
}

export default App;
