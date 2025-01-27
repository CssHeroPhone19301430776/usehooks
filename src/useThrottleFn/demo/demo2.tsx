/**
 * title: 案例
 * description: 设置 leading 为 false 当频繁调用 run，每隔 1000ms 执行一次相关函数 但第一次不会调用。
 */

import { useThrottleFn } from '@csshero/usehooks';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  const { run } = useThrottleFn(
    () => {
      setValue(value + 1);
    },
    {
      leading: false,
      wait: 1000,
    },
  );

  return (
    <div>
      <p style={{ marginTop: 16 }}> count: {value} </p>
      <button type="button" onClick={run}>
        点击调用
      </button>
    </div>
  );
};
