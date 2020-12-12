import React from 'react';

export interface ITrackingItem {
  title: String;
  amount: Number;
  date: Date;
}

interface ITrackingItems {
  incomes: ITrackingItem[];
  expenses: ITrackingItem[];
}

interface ITrackingContext {
  items: ITrackingItems;
  funcs: {
    addIncome: Function;
    addExpense: Function;
  };
}

export const TrackingContext = React.createContext<ITrackingContext>({
  items: {
    incomes: [],
    expenses: [],
  },
  funcs: {
    addIncome: () => null,
    addExpense: () => null,
  },
});