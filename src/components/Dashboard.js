import React, { useContext } from 'react';
import FinanceContext from '../context/FinanceContext';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { state } = useContext(FinanceContext);
  const totalIncome = state.transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpense = state.transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="Dashboard">
      <div className="Dashboard__row">
        <div className="Dashboard__stat">
          <h3>Общий доход</h3>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div className="Dashboard__stat">
          <h3>Общий расход</h3>
          <p>${totalExpense.toFixed(2)}</p>
        </div>
      </div>
      <div className="Dashboard__progress">
        <h3>Прогресс доходов и расходов</h3>
        <div className="progress-bar">
          <div className="progress-bar__income" style={{ width: `${(totalIncome / (totalIncome + totalExpense)) * 100}%` }}>
            Доход
          </div>
          <div className="progress-bar__expense" style={{ width: `${(totalExpense / (totalIncome + totalExpense)) * 100}%` }}>
            Расход
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;