/**
 * title: 案例
 * description: debounceValue 每隔 1000ms 变化一次。
 */

import { useDebounceValue } from '@csshero/usehooks';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<string>('');
  const debounceValue = useDebounceValue(value, { wait: 1000 });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="修改debounceValue"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>debounceValue: {debounceValue}</p>
    </div>
  );
};
