import React, { createContext, useReducer } from 'react';

const initialState = {
  transactions: [],
  balance: 250 // Начальный баланс
};

const FinanceContext = createContext(initialState);

const financeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      const newBalanceAdd = action.payload.type === 'income' 
        ? state.balance + action.payload.amount 
        : state.balance - action.payload.amount;
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        balance: newBalanceAdd
      };
    case 'DELETE_TRANSACTION':
      const transactionToDelete = state.transactions.find(t => t.id === action.payload);
      const newBalanceDelete = transactionToDelete.type === 'income' 
        ? state.balance - transactionToDelete.amount 
        : state.balance + transactionToDelete.amount;
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
        balance: newBalanceDelete
      };
    case 'EDIT_TRANSACTION':
      const transactionToEdit = state.transactions.find(t => t.id === action.payload.id);
      const newBalanceEdit = transactionToEdit.type === 'income'
        ? state.balance - transactionToEdit.amount + (action.payload.type === 'income' ? action.payload.amount : -action.payload.amount)
        : state.balance + transactionToEdit.amount + (action.payload.type === 'income' ? action.payload.amount : -action.payload.amount);
      return {
        ...state,
        transactions: state.transactions.map(transaction => 
          transaction.id === action.payload.id ? action.payload : transaction
        ),
        balance: newBalanceEdit
      };
    default:
      return state;
  }
};

export const FinanceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(financeReducer, initialState);

  return (
    <FinanceContext.Provider value={{ state, dispatch }}>
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceContext;