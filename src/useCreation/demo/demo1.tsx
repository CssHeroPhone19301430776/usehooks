/**
 * title: 案例
 * description: 确保实例不会被重复创建，点击 "Rerender" 按钮，触发组件的更新，但 testMemo 的数据会保持不变
 */

import { useCreation } from '@csshero/usehooks';
import React, { useState } from 'react';

export default function () {
  const testMemo = useCreation(
    () => ({
      info: Math.random(),
    }),
    [],
  );
  const [, setFlag] = useState({});
  return (
    <>
      <p>{testMemo.info}</p>
      {/* 点击按钮触发页面更新 */}
      <button
        type="button"
        onClick={() => {
          setFlag({});
        }}
      >
        Rerender
      </button>
    </>
  );
}
