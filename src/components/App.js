import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FinanceProvider } from '../context/FinanceContext';
import Header from './Header';
import Dashboard from './Dashboard';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Reports from './Reports';
import Goals from './Goals';
import Categories from './Categories';
import '../styles/App.css';


function App() {
  return (
    <FinanceProvider>
      <Router>
        <Header />
        <div className="App">
          <div className="App__left">
            <TransactionForm />
            <TransactionList />
          </div>
          <div className="App__right">
            <Dashboard />
          </div>
          <Routes>
            <Route path="/reports" element={<Reports />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>
    </FinanceProvider>
  );
}

export default App;