/**
 * title: 案例
 * description: 频繁调用 run，但只会每隔 1000ms 执行一次相关函数。
 */

import { useThrottleFn } from '@csshero/usehooks';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  const { run, cancel, flush } = useThrottleFn(
    () => {
      setValue(value + 1);
    },
    {
      wait: 1000,
    },
  );

  return (
    <div>
      <p style={{ marginTop: 16 }}> count: {value} </p>
      <button type="button" onClick={run}>
        点击调用
      </button>

      <button type="button" onClick={flush} style={{ margin: '0 8px' }}>
        立即完成节流函数
      </button>

      <button type="button" onClick={cancel}>
        取消
      </button>
    </div>
  );
};
