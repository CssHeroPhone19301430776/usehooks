/**
 * title: 案例
 * description: 接受两个可选参数，在它们之间进行切换。
 */

import React, { FC } from 'react';
import { useToggle } from 'usehooks';

const DemoThree: FC = () => {
  const [value, action] = useToggle('Hello', 'World');
  return (
    <div>
      <div style={{ marginBottom: '8px' }}>Effects: {value.toString()}</div>
      <button type="button" onClick={action.toggle}>
        toggle
      </button>
      <button
        type="button"
        onClick={action.setToDefault}
        style={{ margin: '0 8px' }}
      >
        setDefalut
      </button>
      <button type="button" onClick={action.setToReverse}>
        setReverse
      </button>
      <button
        type="button"
        onClick={() => action.set('Hello')}
        style={{ margin: '0 8px' }}
      >
        setHello
      </button>
      <button type="button" onClick={() => action.set('World')}>
        setWorld
      </button>
    </div>
  );
};

export default DemoThree;
