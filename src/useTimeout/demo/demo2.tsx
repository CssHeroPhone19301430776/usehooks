/**
 * title: 案例
 * description: 动态修改 delay 以实现定时器间隔变化与暂停。
 */

import { useTimeout } from '@csshero/usehooks';
import React, { FC, useState } from 'react';

const DemoTwo: FC = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(2000);
  const clear = useTimeout(() => {
    setCount(count + 1);
  }, delay);
  return (
    <div>
      <div>count: {count}</div>
      <div style={{ marginBottom: '8px' }}>delay: {delay}</div>
      <button type="button" onClick={() => setDelay(delay + 1000)}>
        delay + 1000
      </button>
      <button
        type="button"
        onClick={() => setDelay(2000)}
        style={{ margin: '0 8px' }}
      >
        reset delay
      </button>
      <button type="button" onClick={clear}>
        clear
      </button>
    </div>
  );
};

export default DemoTwo;
