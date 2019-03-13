# vue
Learn and copy vue

## 什么是MVVM

![what-is-mvvm](./assets/what-is-mvvm.png)

一句话总结：操作数据，就是操作视图，就是操作`DOM`（所以无需操作`DOM`）

- [什么是MVVM](https://segmentfault.com/a/1190000010756245)

## MVVM分析

![analyse-mvvm](./assets/analyse-mvvm.png)

## 思路

- 数据通过指令渲染到模板
  - `v-model`
  - `{{}}`
  - ...
- 数据劫持
  - Object.definePropety 
  - Proxy
- 观察者模式
  - 实现已数据驱动
- 数据双向绑定
  - `input setValue`
- 数据代理
  - `this.xxx => this.$data.xxx`
- `computed`
- `methods`
- ...

- todo
  - 生命周期
  - 完善指令
