/**
 * title: 案例
 * description: 立即执行一次，每1000ms，执行一次
 */

import { useInterval } from '@csshero/usehooks';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  useInterval(
    () => {
      setCount(count + 1);
    },
    1000,
    true,
  );

  return <div>count: {count}</div>;
};
