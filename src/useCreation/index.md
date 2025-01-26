---
group:
  title: 高级
---

# useCreation

`useCreation` 是 `useMemo` 的替代品。

因为 `useMemo` 不能保证被 memo 的值一定不会被重新计算，而 `useCreation` 可以保证这一点。以下为 [React 官方文档中的介绍](https://zh-hans.react.dev/reference/react/useMemo#caveats)：

> 除非有特定原因，React 不会丢弃缓存值。例如，在开发过程中，React 会在你 **编辑组件文件时** 丢弃缓存。无论是在开发环境还是在生产环境，如果你的组件在 **初始挂载期间被终止**，React 都会丢弃缓存。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx"></code>

## API

```typescript
function useCreation<T>(factory: () => T, deps: any[]): T;
```

### Params

| 参数    | 说明                   | 类型        | 默认值 |
| ------- | ---------------------- | ----------- | ------ |
| factory | 用来创建所需对象的函数 | `() => any` | -      |
| deps    | 传入依赖变化的对象     | `any[]`     | -      |
