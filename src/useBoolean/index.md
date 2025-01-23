---
group: State
---

# useBoolean

优雅的管理 boolean 状态的 Hook。

## 代码演示

### 基础用法

<code src='./demo/demo1.tsx'></code>

## API

```typescript
const [state, { toggle, set, setTrue, setFalse }] = useBoolean(
  defaultValue?: boolean,
);
```

### Params

| 参数         | 说明                     | 类型      | 默认值  |
| ------------ | ------------------------ | --------- | ------- |
| defaultValue | 可选项，传入默认的状态值 | `boolean` | `false` |

### Result

| 参数    | 说明     | 类型      |
| ------- | -------- | --------- |
| state   | 状态值   | -         |
| actions | 操作集合 | `Actions` |

### Actions 类型

| 参数     | 说明                       | 类型                       |
| -------- | -------------------------- | -------------------------- |
| toggle   | 切换 state                 | `() => void`               |
| set      | 根据传递的 参数 修改 state | `(state: boolean) => void` |
| setTrue  | 修改 state 为 true         | `() => void`               |
| setFalse | 修改 state 为 false        | `() => void`               |
