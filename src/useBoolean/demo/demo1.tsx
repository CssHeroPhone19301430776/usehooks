import { useBoolean } from '@csshero/usehooks';
import React, { FC } from 'react';

const DemoOne: FC = () => {
  const [value, action] = useBoolean(true);
  return (
    <div>
      <div>Effects: {value.toString()}</div>
      <button type="button" onClick={action.toggle}>
        toggle
      </button>
      <button
        type="button"
        onClick={action.setTrue}
        style={{ margin: '0 8px' }}
      >
        steTrue
      </button>
      <button type="button" onClick={action.setFalse}>
        setFalse
      </button>
    </div>
  );
};

export default DemoOne;
