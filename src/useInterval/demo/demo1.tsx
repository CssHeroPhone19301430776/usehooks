/**
 * title: 案例
 * desc: 每1000ms，执行一次
 */

import { useInterval } from '@csshero/usehooks';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <div>count: {count}</div>;
};
