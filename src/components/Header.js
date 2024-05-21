import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FinanceContext from '../context/FinanceContext';
import '../styles/Header.css';

const Header = () => {
  const { state } = useContext(FinanceContext);

  return (
    <header className="Header">
      <div className="Header__navigation">
        <nav>
          <Link to="/login">Авторизация</Link>
          <Link to="/">Главная</Link>
          <Link to="/reports">Отчеты</Link>
          <Link to="/goals">Цели</Link>
        </nav>
        <div className="Header__balance">
          <span>Баланс: ${state.balance.toFixed(2)}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;