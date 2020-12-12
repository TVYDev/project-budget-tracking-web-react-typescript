import React, { useContext } from 'react';
import { ITrackingItem, TrackingContext } from '../context/TrackingContext';

interface TrackingItemProps {
  item: ITrackingItem;
}

const TrackingItem: React.FC<TrackingItemProps> = ({ item }) => {
  const {
    funcs: { removeTrackingItem },
  } = useContext(TrackingContext);

  return (
    <div>
      <div>{item.title}</div>
      <div>{item.amount}</div>
      <button
        className="btn-delete"
        onClick={() => removeTrackingItem(item.id)}
      >
        X
      </button>
    </div>
  );
};

export default TrackingItem;
