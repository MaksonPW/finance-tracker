import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FinanceProvider } from '../context/FinanceContext';
import Header from './Header';
import Home from './Home';
import Reports from './Reports';
import Goals from './Goals';
import Login from './Login';
import Register from './Register';
import '../styles/App.css';

function App() {
  return (
    <FinanceProvider>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/goals" element={<Goals />} />
          </Routes>
        </div>
      </Router>
    </FinanceProvider>
  );
}

export default App;