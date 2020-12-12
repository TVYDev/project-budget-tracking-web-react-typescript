import React, { useState, useContext } from 'react';
import { TrackingContext } from '../context/TrackingContext';
import { TYPE_INCOME, TYPE_EXPENSE } from '../lib/constants';

const TrackingForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const {
    funcs: { addIncome, addExpense },
  } = useContext(TrackingContext);

  const handleAddTrackingItem = (type: String) => {
    if (title === '' || amount === 0) return;

    const currentDate = new Date();
    if (type === TYPE_INCOME) {
      addIncome({ title, amount, date: currentDate });
    } else if (type === TYPE_EXPENSE) {
      addExpense({ title, amount, date: currentDate });
    }

    setTitle('');
    setAmount(0);
  };

  return (
    <div>
      <input
        type="text"
        className="title"
        placeholder="What is it?"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <input
        type="number"
        className="amount"
        placeholder="How much is it?"
        value={amount || ''}
        onChange={(e) => setAmount(Number(e.currentTarget.value))}
      />
      <button
        className="btn-income"
        onClick={() => handleAddTrackingItem(TYPE_INCOME)}
      >
        Income
      </button>
      <button
        className="btn-expense"
        onClick={() => handleAddTrackingItem(TYPE_EXPENSE)}
      >
        Expense
      </button>
    </div>
  );
};

export default TrackingForm;
