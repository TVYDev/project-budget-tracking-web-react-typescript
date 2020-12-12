import React, { Fragment } from 'react';
import TrackingForm from './TrackingForm';
import TrackingList from './TrackingItems';

const Tracking: React.FC = () => {
  return (
    <Fragment>
      <TrackingForm />
      <TrackingList />
    </Fragment>
  );
};

export default Tracking;
