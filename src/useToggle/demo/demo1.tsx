/**
 * title: 案例
 * description: 当不接收任何参数时，默认为 boolean 切换，其中默认值为 false。
 */

import React, { FC } from 'react';
import { useToggle } from 'usehooks';
const DemoOne: FC = () => {
  const [value, action] = useToggle(false);

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

export default DemoOne;
