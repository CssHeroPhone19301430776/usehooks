/**
 * title: 案例
 * description: useLatest 返回的永远是最新值
 */

import { useLatest } from '@csshero/usehooks';
import React, { useEffect, useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      // 获取到最新的 count 值然后＋1
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // 因为闭包陷阱，count2 访问时永远都是 0
      setCount2(count2 + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count(useLatest): {count}</p>
      <p>count(defult): {count2}</p>
    </>
  );
};
