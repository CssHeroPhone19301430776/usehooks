/**
 * title: 案例
 * description: 3000ms 后执行一次
 */

import { useTimeout } from '@csshero/usehooks';
import React, { FC, useState } from 'react';

const DemoOne: FC = () => {
  const [count, setCount] = useState(0);

  useTimeout(() => {
    setCount(count + 1);
  }, 3000);

  return (
    <div>
      <div>count: {count}</div>
    </div>
  );
};

export default DemoOne;
