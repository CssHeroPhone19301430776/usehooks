/**
 * title: 案例
 * description: 传递需要初始化的值然后进行操作
 */

import { useMap } from '@csshero/usehooks';
import React from 'react';

export default () => {
  const [map, { set, setAll, remove, reset, get }] = useMap<string, string>([
    ['msg', 'hello world'],
    ['info', 'hello react'],
  ] as const);

  return (
    <div>
      <button
        type="button"
        onClick={() => set(String(Date.now()), new Date().toJSON())}
      >
        Add
      </button>
      <button
        type="button"
        onClick={() => setAll([['text', 'this is a new Map']] as const)}
        style={{ margin: '0 8px' }}
      >
        Set new Map
      </button>
      <button
        type="button"
        onClick={() => remove('msg')}
        disabled={!get('msg')}
      >
        Remove msg
      </button>
      <button type="button" onClick={() => reset()} style={{ margin: '0 8px' }}>
        Reset
      </button>
      <div style={{ marginTop: 16 }}>
        <pre>{JSON.stringify(Array.from(map), null, 2)}</pre>
      </div>
    </div>
  );
};
