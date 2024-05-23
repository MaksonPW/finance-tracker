import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Пожалуйста, заполните все поля.');
    } else {
      setError('');
      navigate('/');
    }
  };

  return (
    <div className="AuthContainer">
      <div className="AuthBox">
        <h2>Вход</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Электронная почта</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Пароль</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Войти</button>
        </form>
        <p>
          Нет аккаунта? <Link to="/register">Регистрация</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;