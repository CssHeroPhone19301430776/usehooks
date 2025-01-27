/**
 * title: 案例
 * description: 设置 leading 为 true 当频繁调用 run，会在 第一次点击 和 所有点击完成 2000ms 后各执行一次相关函数
 */

import { useDebounceFn } from '@csshero/usehooks';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  const { run } = useDebounceFn(
    () => {
      setValue(value + 1);
    },
    {
      leading: true,
      wait: 2000,
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
