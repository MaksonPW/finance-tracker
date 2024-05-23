import React, { useState, useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import '../styles/TransactionForm.css';

const TransactionForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('');
  const { dispatch } = useContext(FinanceContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toLocaleDateString()
    };
    dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });
    setDescription('');
    setAmount('');
    setType('income');
    setCategory('');
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    const regex = /^\d*\.?\d*$/;
    if ((regex.test(value) && value.length <= 12) || value === '') {
      setAmount(value);
    }
  };

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 24) {
      setDescription(e.target.value);
    }
  };

  const incomeCategories = [
    { value: 'salary', label: 'Зарплата' },
    { value: 'other', label: 'Другое' },
  ];

  const expenseCategories = [
    { value: 'gas_station', label: 'АЗС' },
    { value: 'store', label: 'Магазин' },
    { value: 'entertainment', label: 'Развлечения' },
    { value: 'food', label: 'Еда' },
    { value: 'pharmacy', label: 'Аптека' },
    { value: 'other', label: 'Другое' },
  ];

  const categories = type === 'income' ? incomeCategories : expenseCategories;

  return (
    <form className="TransactionForm" onSubmit={onSubmit}>
      <div className="TransactionForm__row">
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Описание"
          className="TransactionForm__input"
          required
        />
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Сумма"
          className="TransactionForm__input"
          required
        />
      </div>
      <div className="TransactionForm__row">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="TransactionForm__select"
        >
          <option value="income">Доход</option>
          <option value="expense">Расход</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="TransactionForm__select"
          required
        >
          <option value="" disabled>Выберите категорию</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="TransactionForm__input">Добавить транзакцию</button>
    </form>
  );
};

export default TransactionForm;