import { useMemoizedFn } from '@csshero/usehooks';
import React, { useCallback, useRef, useState } from 'react';

const ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <div>
      <p>组件被渲染的次数: {renderCountRef.current}</p>
      <button type="button" onClick={showCount}>
        showParentCount
      </button>
    </div>
  );
});

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

      <div style={{ marginTop: 32 }}>
        <h3>传递useCallback function的组件:</h3>
        {/* 使用Add Count函数，ExpensiveTree 组件会在状态更改时重新渲染 */}
        {/* 因为传递的callback函数发生改变，导致组件的重新渲染 */}
        <ExpensiveTree showCount={callbackFn} />
      </div>

      <div style={{ marginTop: 32 }}>
        <h3>传递useMemoizedFn function的组件:</h3>
        {/* 使用 memoized 函数，ExpensiveTree 组件只会渲染一次 */}
        {/* memoized 函数是同一个引用，函数内容变了，但是引用是同一个 */}
        <ExpensiveTree showCount={memoizedFn} />
      </div>
    </>
  );
};
