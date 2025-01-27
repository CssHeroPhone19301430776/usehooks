/**
 * title: 案例
 * description: ThrottledValue 每隔 1000ms 变化一次。
 */

import { useThrottleValue } from '@csshero/usehooks';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<string>();
  const throttledValue = useThrottleValue(value, { wait: 1000 });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="修改throttledValue"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>throttledValue: {throttledValue}</p>
    </div>
  );
};
