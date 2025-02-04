---
group:
  title: 高级
---

# useCreation

`useCreation` 是 `useMemo` 的替代品。

因为 `useMemo` 不能保证被 memo 的值一定不会被重新计算，而 `useCreation` 可以保证这一点。以下为 [React 官方文档中的介绍](https://zh-hans.react.dev/reference/react/useMemo#caveats)：

> 在未来，React 可能会添加更多利用**丢弃缓存**的特性——例如，如果 React 在未来增加了对虚拟化列表的内置支持，那么丢弃那些滚出虚拟化列表视口的缓存是有意义的。你可以仅仅依赖 useMemo 作为性能优化手段。否则，**使用 state 变量** 或者 **ref**可能更加合适。

:::info{title=如何选择状态管理方式}
如果你只是为了性能优化而使用 useMemo，那么这种可能的缓存丢弃并不会影响你的业务逻辑；你的代码在没有 useMemo 的情况下也能正常工作，只是性能会稍微差一些。
但如果你的业务逻辑需要依赖一个“持久稳定”的值——也就是说，这个值在整个组件生命周期内都必须保持不变（除非你主动更新它），那么 useMemo 可能就不合适，因为它可能会被 React 清理掉。这时，更合适的做法是使用 state 变量或者 ref，因为它们不会因为 React 的内部优化策略而意外丢失。
:::

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
