import React, { useState, Fragment } from 'react';
import Tracking from './components/Tracking';
import { TrackingContext, ITrackingItem } from './context/TrackingContext';
import { getFormattedStringDate } from './lib/helpers';

const App: React.FC = () => {
  const [incomes, setIncomes] = useState<ITrackingItem[]>([]);
  const [expenses, setExpenses] = useState<ITrackingItem[]>([]);
  const [showedDate, setShowedDate] = useState(new Date());

  const addIncome = (income: ITrackingItem): void => {
    setIncomes([...incomes, income]);
  };
  const addExpense = (expense: ITrackingItem): void => {
    setExpenses([...expenses, expense]);
  };

  return (
    <Fragment>
      <div>{getFormattedStringDate(showedDate)}</div>
      <TrackingContext.Provider
        value={{
          items: { incomes, expenses },
          funcs: { addIncome, addExpense },
        }}
      >
        <Tracking />
      </TrackingContext.Provider>
    </Fragment>
  );
};

export default App;
