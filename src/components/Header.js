import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FinanceContext } from '../context/FinanceContext';
import '../styles/Header.css';

const Header = () => {
  const { state } = useContext(FinanceContext);

  return (
    <header className="Header">
      <div className="Header__navigation">
        <nav>
          <NavLink to="/auth" className={({ isActive }) => (isActive ? 'active-link' : '')}>Авторизация</NavLink>
          <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Главная</NavLink>
          <NavLink to="/reports" className={({ isActive }) => (isActive ? 'active-link' : '')}>Отчеты</NavLink>
          <NavLink to="/goals" className={({ isActive }) => (isActive ? 'active-link' : '')}>Цели</NavLink>
        </nav>
        <div className="Header__balance">
          <span>Баланс: ${state.balance.toFixed(2)}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;