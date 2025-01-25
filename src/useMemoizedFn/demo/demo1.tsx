/**
 * title: 案例
 * description: useMemoizedFn 与 useCallback 可以实现同样的效果。
 */

import { useMemoizedFn } from '@csshero/usehooks';
import React, { useCallback, useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState('Current count is 0');
  const callbackFn = useCallback(() => {
    setInfo(`Current count is ${count}`);
  }, [count]);

  const memoizedFn = useMemoizedFn(() => {
    setInfo(`Current count is ${count}`);
  });

  return (
    <>
      <p>count: {count}</p>
      <p>info: {info}</p>
      <button
        type="button"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Add Count
      </button>
      <div style={{ marginTop: 16 }}>
        <button type="button" onClick={callbackFn}>
          call callbackFn
        </button>
        <button type="button" onClick={memoizedFn} style={{ marginLeft: 8 }}>
          call memoizedFn
        </button>
      </div>
    </>
  );
};
