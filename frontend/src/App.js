import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import { StoreProvider } from './context/StoreContext';

function App() {
  return (
    <StoreProvider>
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              Nutrition Tool
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites" className="nav-link">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </Router>
    </StoreProvider>
  );
}

export default App;
