import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import { Bar, Pie } from 'react-chartjs-2';
import '../styles/Reports.css';

const Reports = () => {
  const { state } = useContext(FinanceContext);

  const incomeData = {
    labels: state.transactions.filter(t => t.type === 'income').map(t => t.category),
    datasets: [{
      label: 'Доходы',
      data: state.transactions.filter(t => t.type === 'income').map(t => t.amount),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderWidth: 1,
    }]
  };

  const expenseData = {
    labels: state.transactions.filter(t => t.type === 'expense').map(t => t.category),
    datasets: [{
      label: 'Расходы',
      data: state.transactions.filter(t => t.type === 'expense').map(t => t.amount),
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderWidth: 1,
    }]
  };

  return (
    <div className="Reports">
      <h2>Отчеты</h2>
      <div className="Reports__chart">
        <Bar data={incomeData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
      <div className="Reports__chart">
        <Pie data={expenseData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default Reports;