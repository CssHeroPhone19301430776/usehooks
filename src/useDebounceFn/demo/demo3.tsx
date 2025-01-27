/**
 * title: 案例
 * description: 设置 leading 为 true，trailing 为 false 当频繁调用 run，只会在 第一次点击 后执行一次相关函数 然后等待2000ms
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
      trailing: false,
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
