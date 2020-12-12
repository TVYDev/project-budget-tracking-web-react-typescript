import React, { Fragment, useContext } from 'react';
import { TrackingContext } from '../context/TrackingContext';
import TrackingItem from './TrackingItem';

const TrackingItems: React.FC = () => {
  const {
    items: { incomes, expenses },
  } = useContext(TrackingContext);

  return (
    <Fragment>
      <h2>Income</h2>
      {incomes.map((inc) => (
        <TrackingItem key={String(inc.id)} item={inc} />
      ))}
      <h2>Expenses</h2>
      {expenses.map((exp) => (
        <TrackingItem key={String(exp.id)} item={exp} />
      ))}
    </Fragment>
  );
};

export default TrackingItems;
