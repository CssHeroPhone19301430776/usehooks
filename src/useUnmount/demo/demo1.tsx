/**
 * title: 案例
 * description: 在组件卸载时，执行函数。
 */

import { useBoolean, useUnmount } from '@csshero/usehooks';
import React from 'react';

const MyComponent = () => {
  useUnmount(() => {
    alert('组件卸载，执行传入函数。');
  });

  return <p>Hello World!</p>;
};

export default () => {
  const [state, { toggle }] = useBoolean(true);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? '卸载组件' : '挂载组件'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
