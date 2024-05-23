import React from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Dashboard from './Dashboard';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__left">
        <TransactionForm />
        <TransactionList />
      </div>
      <div className="Home__right">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;