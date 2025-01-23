---
group:
  title: 'Effect'
  order: 1
---

# useTimeout

一个可以处理 setTimeout 计时器函数的 Hook。

## 代码演示

### 基础用法

<code src='./demo/demo1.tsx'></code>

### 进阶使用

<code src='./demo/demo2.tsx'></code>

## API

```typescript
useTimeout(
  fn: () => void,
  delay?: number
): fn: () => void;
```

### Params

| 参数  | 说明                                | 类型         | 默认值 |
| ----- | ----------------------------------- | ------------ | ------ |
| fn    | 待执行函数                          | `() => void` | `-`    |
| delay | 定时时间（单位为毫秒）,支持动态变化 | `number`     | `1000` |

### Result

| 参数         | 说明       | 类型         |
| ------------ | ---------- | ------------ |
| clearTimeout | 清除定时器 | `() => void` |
