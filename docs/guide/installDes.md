---
title: '初始化'
---

# 开始使用

useHooks 是基于 react 的实用 hooks 集合。在继续之前，我们假设你已经熟悉 [react 的函数式编程](https://zh-hans.react.dev/learn/keeping-components-pure) 的基本思想。

## 下载

:::code-group

```bash [npm]
npm install @csshero/usehooks
```

```bash [yarn]
yarn add @csshero/usehooks
```

```bash [pnpm]
pnpm add @csshero/usehooks
```

:::

### CDN

```html
<script src="https://unpkg.com/@vueuse/shared"></script>

<script src="https://unpkg.com/@vueuse/core"></script>
```

## 使用示例

只需从 `@csshero/usehooks`导入你需要的函数

```tsx
import { useUpdate } from '@csshero/usehooks';
import React from 'react';

export default () => {
  const update = useUpdate();

  return (
    <>
      <div>Time: {Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: 8 }}>
        update
      </button>
    </>
  );
};
```
