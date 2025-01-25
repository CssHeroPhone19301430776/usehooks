/**
 * title: 案例
 * description: 动态修改 delay 以实现定时器间隔变化与暂停。
 */

import { useInterval } from '@csshero/usehooks';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState<number>(1000);

  const clear = useInterval(() => {
    setCount(count + 1);
  }, interval);

  return (
    <div>
      <p> count: {count} </p>
      <p style={{ marginTop: 16 }}> interval: {interval} </p>
      <button
        type="button"
        onClick={() => setInterval(interval + 1000)}
        style={{ marginRight: 8 }}
      >
        interval + 1000
      </button>
      <button
        type="button"
        style={{ marginRight: 8 }}
        onClick={() => {
          setInterval(1000);
        }}
      >
        reset interval
      </button>
      <button type="button" onClick={clear}>
        clear
      </button>
    </div>
  );
};
