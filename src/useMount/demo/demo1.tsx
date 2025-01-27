/**
 * title: 案例
 * description: 在组件首次渲染时，执行方法。
 */

import { useBoolean, useMount } from '@csshero/usehooks';
import React from 'react';

const MyComponent = () => {
  useMount(() => {
    alert('组件首次渲染，执行传入函数。');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, { toggle }] = useBoolean(false);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? '卸载组件' : '挂载组件'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
