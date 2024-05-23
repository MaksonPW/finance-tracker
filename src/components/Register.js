import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Пожалуйста, заполните все поля.');
    } else {
      setError('');
      setSuccess(true);
      setTimeout(() => {
        navigate('/auth');
      }, 1000);
    }
  };

  return (
    <div className="AuthContainer">
      <div className="AuthBox">
        <h2>Регистрация</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Вы успешно зарегистрировались!</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Имя</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Электронная почта</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Пароль</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Зарегистрироваться</button>
        </form>
        <p>
          Уже есть аккаунт? <Link to="/auth">Войти</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;