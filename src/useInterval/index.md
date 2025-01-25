---
group:
  title: 'Effect'
---

# useInterval

一个可以处理 setInterval 的 Hook。

## 代码演示

### 基础用法

<code src='./demo/demo1.tsx'></code>

### 进阶使用

<code src='./demo/demo2.tsx'></code>

## API

```typescript
useInterval(
  fn: () => void,
  delay?: number,
  immediate?: boolean
): fn: () => void;
```

### Params

| 参数      | 说明                                | 类型         | 默认值  |
| --------- | ----------------------------------- | ------------ | ------- |
| fn        | 要定时调用的函数                    | `() => void` | `-`     |
| delay     | 间隔时间（单位为毫秒）,支持动态变化 | `number`     | `1000`  |
| immediate | 是否在首次渲染时立即执行            | `boolean`    | `false` |

### Result

| 参数          | 说明       | 类型         |
| ------------- | ---------- | ------------ |
| clearInterval | 清除定时器 | `() => void` |
