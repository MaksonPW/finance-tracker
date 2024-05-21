import React, { useContext, useState } from 'react';
import FinanceContext from '../context/FinanceContext';
import '../styles/TransactionList.css';

const TransactionList = () => {
  const { state, dispatch } = useContext(FinanceContext);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTransaction, setEditedTransaction] = useState({
    id: null,
    description: '',
    amount: '',
    type: 'income',
    category: '',
    date: ''
  });

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const handleEdit = (transaction) => {
    setIsEditing(true);
    setEditedTransaction(transaction);
  };

  const handleSave = () => {
    dispatch({ type: 'EDIT_TRANSACTION', payload: editedTransaction });
    setIsEditing(false);
    setEditedTransaction({
      id: null,
      description: '',
      amount: '',
      type: 'income',
      category: '',
      date: ''
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTransaction({
      id: null,
      description: '',
      amount: '',
      type: 'income',
      category: '',
      date: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value
    }));
  };

  const toggleActions = (id) => {
    setSelectedTransaction(selectedTransaction === id ? null : id);
  };

  const categoryLabels = {
    salary: 'Зарплата',
    gas_station: 'АЗС',
    store: 'Магазин',
    entertainment: 'Развлечения',
    food: 'Еда',
    pharmacy: 'Аптека',
    other: 'Другое'
  };

  return (
    <div className="TransactionList">
      <h2>Список транзакций</h2>
      <ul>
        {state.transactions.map((transaction) => (
          <li key={transaction.id} className="TransactionItem">
            <div className="TransactionInfo">
              <div className="TransactionDescriptionAmount">
                {transaction.description}: ${transaction.amount}
              </div>
              <div className="TransactionCategory">
                {categoryLabels[transaction.category]}
              </div>
              <div className={transaction.type}>
                {transaction.type === 'income' ? 'Доход' : 'Расход'}
              </div>
              <div className="TransactionDate">
                {transaction.date}
              </div>
              <button className="TransactionToggle" onClick={() => toggleActions(transaction.id)}>▼</button>
            </div>
            {selectedTransaction === transaction.id && !isEditing && (
              <div className="TransactionActions">
                <button onClick={() => handleEdit(transaction)}>Редактировать</button>
                <button onClick={() => handleDelete(transaction.id)}>Удалить</button>
              </div>
            )}
            {isEditing && editedTransaction.id === transaction.id && (
              <div className="TransactionEditForm">
                <input
                  type="text"
                  name="description"
                  value={editedTransaction.description}
                  onChange={handleInputChange}
                  placeholder="Описание"
                />
                <input
                  type="text"
                  name="amount"
                  value={editedTransaction.amount}
                  onChange={handleInputChange}
                  placeholder="Сумма"
                />
                <select
                  name="type"
                  value={editedTransaction.type}
                  onChange={handleInputChange}
                >
                  <option value="income">Доход</option>
                  <option value="expense">Расход</option>
                </select>
                <select
                  name="category"
                  value={editedTransaction.category}
                  onChange={handleInputChange}
                >
                  {editedTransaction.type === 'income' ? (
                    <>
                      <option value="salary">Зарплата</option>
                      <option value="other">Другое</option>
                    </>
                  ) : (
                    <>
                      <option value="gas_station">АЗС</option>
                      <option value="store">Магазин</option>
                      <option value="entertainment">Развлечения</option>
                      <option value="food">Еда</option>
                      <option value="pharmacy">Аптека</option>
                      <option value="other">Другое</option>
                    </>
                  )}
                </select>
                <button onClick={handleSave}>Сохранить</button>
                <button onClick={handleCancel}>Отмена</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;