---
group: State
---

# useMap

管理 Map 类型状态的 Hook。

## 代码演示

<code src="./demo/demo1.tsx"></code>

:::info{title=如何正确参数传递类型}
在给 useMap 传递参数时 因为参数的类型是个可以迭代的集合，其中每个元素都是一个包含键和值的二元元组。但是在默认情况下，TypeScript 会把写的元组推断为数组类型

```ts
const test = ['a', 'b']; // test: string[]
```

因此需要给传递的参数进行声明

```ts
const data: [string, string][] = [['a', 'b']];
const [map, { set, setAll, remove, reset, get }] = useMap<string, string>(data);
```

```ts
const [map, { set, setAll, remove, reset, get }] = useMap<string, string>([
  ['msg', 'hello world'],
  ['info', 'hello react'],
] as const);
```

以上俩种都可以传递正确的参数类型

:::

## API

```typescript
const [map, { set, setAll, remove, reset, get }] = useMap<K, V>(initValue);
```

### Result

| 参数    | 说明     | 类型        |
| ------- | -------- | ----------- |
| map     | Map 对象 | `Map<K, V>` |
| actions | 操作集合 | `Actions`   |

### Actions 类型

| 参数   | 说明                  | 类型                                 |
| ------ | --------------------- | ------------------------------------ |
| set    | 添加元素              | `(key: K, value: V) => void`         |
| get    | 获取元素              | `(key: K) => V \| undefined`         |
| setAll | 生成一个新的 Map 对象 | `(newMap: Iterable<[K, V]>) => void` |
| remove | 移除元素              | `(key: K) => void`                   |
| reset  | 重置为默认值          | `() => void`                         |

### Params

| 参数      | 说明                        | 类型               | 默认值 |
| --------- | --------------------------- | ------------------ | ------ |
| initValue | 可选项，传入默认的 Map 参数 | `Iterable<[K, V]>` | -      |
