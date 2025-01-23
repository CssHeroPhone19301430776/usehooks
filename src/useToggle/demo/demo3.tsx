/**
 * title: 案例
 * description: 接受一个可选参数，取反时设置为!defaultValue。
 */

import { useToggle } from '@csshero/usehooks';
import React, { FC } from 'react';

const DemoTwo: FC = () => {
  const [value, action] = useToggle('true');
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
    </div>
  );
};

export default DemoTwo;
