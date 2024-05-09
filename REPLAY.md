# Vue

## Vue

- 发展历程

  - 1.x
  - 2.x
  - 3.x

- pnpm 代替 lerna 实现 monorepo 仓库管理
  - 使用？优点？
- dev esbuild, build rollup？
  - iife
  - umd
  - esModule
    - esm-bundler 不会将所有的模块打包到一起，在工程化中使用
    - esm-browser 会将所有的模块打包到一起， 在 <script type="module"></script> 中使用
  - cjs
- 响应式原理
  - vue2
    - optionalApi
  - vue3
    - compositionApi
- reactive
  - proxy 只对对象
  - shallowReactive
  - isReactive
- ref
  - defineProperty 可对非对象
  - shallowRef
  - isRef
  - toRef
  - toRefs
  - proxyRefs 将 ref 转换成代理方式来访问，主要在模板中使用
- readonly
  - shallowReadonly 丧失收集能力
- toRaw 通过代理后的结果返回原值
  - markRaw
- effect
  - 渲染 computed watch watchEffect 都基于 effect 实现
- watch
  - 数据变化后调用回调
  - watchEffect 就是 effect
- computed
  - 有缓存 dirty
- 依赖收集
  - map 映射表维护数据和 effect 的关系
- 触发更新
  - 通过属性触发对应的 effect 来执行
- 依赖清理
  - stop 停止依赖收集
- 数组处理
  - track 依赖收集
  - toRaw 转原对象
- vue 包含
  - 编译时（compiler-core，compiler-dom）
    - 应用主要是.vue 文件 template 转成 render 函数
    - 耗费性能，放在工程化中进行转换
  - 运行时（runtime-core，runtime-dom）reactivity
- runtime-dom
  - render
  - createRenderer
  - nodeOps
  - patchProp
    - class
    - style
      - 两次循环 加和删
    - event
      - 先移除再绑定？no
      - 换绑事件
      - fn = (e) => fn.value(e) fn.value = nextValue
    - otherAttributes
  - 封装的方法提供给 runtime-core 使用
- runtime-core
  - 不依赖平台
  - 虚拟 dom
    - h
    - createVNode
  - patch
    - 递归创建元素、属性、儿子
  - diff 算法
    - 平级比较 全量比对
      - 前后不是统一个节点，删除老的换新的
      - 前后是同一个节点，复用节点，更新属性儿子
      - 儿子更新有九种（ null、节点、数组 \* 3）方式（核心：双方儿子都是列表）
      - 同序列比较进行优化 sync from start，sync from end（挂载和卸载）
      - 确定两个序列中变化的部分
        - 根据新节点创建映射表，用老的节点去找，如果新的没有则删除，有的就复用比较属性和儿子
        - 找到新节点在老节点中的索引列表，在做后续的优化更新
        - [最长递增子序列优化](https://github.com/careteenL/data-structure_algorithm/blob/0816-leetcode/src/leetcode/300-longest-increasing-subsequence.js)
          - 1 贪心+二分查找 => 求出最长递增子序列的长度，以及不正确的索引列表
          - 2 前驱节点追溯 => 根据 1 的过程找出原数组正确的每一个元素对应的前驱节点索引列表
          - 3 倒序追踪 => 根据 2 的结果 修正 1 的结果的索引 得出正确的最长递增子序列的索引列表
        - 得出最长递增子序列的部分不用更新节点，其他节点则 insert 到对应节点之前
    - 比 react 考虑更加完善，性能更高
  - 组件更新
  - setup
  - emit
  - slot
  - 组件生命周期
  - 模板编译优化
    - 靶向更新优化
      - 标记哪些是动态节点
      - 下次更新时只更新动态节点
      - v-if v-for 是不稳定序列，会走全量更新
        - v-for 时若长度固定，则也会加入靶向更新
    - 静态提升
    - 预字符串化
    - 缓存函数
- compiler-core
  - 有限状态机
  - vue2 直接正则匹配属性
  - vue3 采用递归的方式取属性，取一个删一个
  - 处理空格、文本、元素<div></div>、表达式{{}}
  - parser
  - transform
  - generate
- compiler-dom
- transition
- 异步组件
- teleport
- provide inject
  - 解决跨级组件通信
  - 原型链的方式实现 Object.create()
- keep alive
  - 核心是缓存 subTree 节点实例到内存中，在卸载时存储，返回时处理挂载重新赋值
  - lru least recently usage 最近最少使用
  - include
  - exclude
- effectScope
  - pinia 中 dispose 有使用到

### 资料

- [Vue3 源码实现](https://github.com/careteenL/vue3-source)
- [Vue3 除了 keep-alive，还有哪些页面缓存的实现方案](https://mp.weixin.qq.com/s/kq2j0G286ndMor1tjcELpg)

## pinio

- 替代 vuex
- options 用法
- composition 用法
- 实现
  - 是一个 vue 插件，提供一个对象中包含 install 方法，参数能拿到 app 实例

## vue-router

- 使用
- hash 不会刷新页面
- history 刷新页面会重新请求服务器
- 3.x
  - 使用 class 实现
  - hash 基于 onhashchage
  - history 基于 onpopstate
- 4.x
  - 使用函数式编程实现
  - hash 模式基于 history api 实现，因为不考虑 ie 兼容性
    - history api
    - 基于 onpopstate 实现 listen 监听路由前进后退
    - location
    - state
    - push
    - replace
    - pushWithRedirect
  - createRouter 提供 install 方法， 是插件的入口
  - 路由拍平，{ path, parent, component, children }
  - 路由动态添加 addRoute
  - RouterLink
  - RouterView
  - 路由守卫
    - 全局守卫
      - beforeEach
      - beforeResolve
      - afterEach
    - 路由守卫
      - beforeEnter
    - 组件守卫
      - beforeRouteLeave
      - beforeRouteUpdate
      - beforeRouteEnter
    - 串行执行 promise reduce 实现
    - 完整的导航解析流程
      - 导航被触发。
      - 在失活的组件里调用 beforeRouteLeave 守卫。
      - 调用全局的 beforeEach 守卫。
      - 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
      - 在路由配置里调用 beforeEnter
      - 解析异步路由组件。
      - 在被激活的组件里调用 beforeRouteEnter
      - 调用全局的 beforeResolve 守卫(2.5+)。
      - 导航被确认。
      - 调用全局的 afterEach 钩子。
      - 触发 DOM 更新。
      - 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数- 传入。

## vue ssr

- 利于 seo；加快首屏渲染；
- 同构，build client server 两份代码
- 服务端返回后，引入 client.bundle.js 进行 hydrate
  - 采用 vue-ssr-renderer 的 client 和 server 插件，将产物进行关联，而自动注入
- 处理样式
  - vue-style-loader
  - 在 node 端 ctx.body 赋值时，采用 promise 的方式获取到 renderToString 后 resolve 的方式，保证 css 能正确获取到
- 处理路由 vue-router
  - 导出的是函数，每个用户访问时都执行成不同实例
  - 解决页面刷新页面不存在问题
    - 在 node 服务端 renderToString 时可以传当前 ctx.url 给服务端入口
    - 入口处先 push 当前 url 保证路由正确
    - 且会判断当前 url 是否在 matched 中存在，不存在则 404 处理
- 处理 vuex
  - 导出的是函数，每个用户访问时都执行成不同实例
  - asyncData（nuxt 中定义的这个名） 只在服务端中运行
  - 把 store.state 挂载到 server 的 context.state 中
  - 浏览器执行 store 时，将服务端设置的最新状态，替换掉客户端的状态

## nuxtjs

## mpvue to uniapp

- 微信小程序架构
  - 双线程架构
    - 数据层 渲染线程：wxml、wxss
    - 逻辑层 js 线程：js
  - 无 dom 节点
- mpvue 原理
  - 将 vue 实例和 wx 页面实例做关联
  - fork vue 在编译时和运行时做修改
  - 编译时：将 vue 代码转换为小程序 dsl
  - 运行时：因为 wx 无 dom，所以将数据更新用 wx.setData 进行数据更新，还包括生命周期、事件处理
- uniapp 原理
  - 参考 mpvue
  - 小程序自定义组件
- 迁移过程
  - 工程文件配置的迁移，使用脚本做拷贝和替换
  - uniapp 子组件不支持小程序页面生命周期问题
    - mpvue 组件中使用 onload 和 onshow 会调用，但在 uniapp 中不会触发
    - 解决方案为在 uniapp 全局加一个 mixin ，在 mounted 时让 onload 和 onshow 挂载到 this.$root.$options 上，并且先执行一次；在 beforeDestroy 时进行卸载

### 资料

- [小程序项目框架迁移实践](https://mp.weixin.qq.com/s?__biz=MzU3NTY3MTQzMg==&mid=2247528323&idx=1&sn=ba847bc6e073f21d851fc8c88ab9c81a&chksm=fd1db264ca6a3b7235fd9cb34d3b6715a0f8be79b56ad03df7cd71155337c1fd38fb732043a5&scene=21#wechat_redirect)

## vue-loader

- 使用
  - vue-loader
  - VueLoaderPlugin
- 实现
  - 借助 vue/compiler-sfc 编译 template、script、style
  - 在 vue-loader 之前再加入一个 loader 处理成 'App.vue?vue&type=script&scoped=true&id=hash'
  - 在 css-loader 后面加入一个 stylePostLoader，当开启 scoped 时，给 css 选择器和 template 的节点属性增加 data-v-scopeId，保证 css scoped 特性
  - VueLoaderPlugin 的作用就主要是在合适实际新增 loader
  - pitch 一系列规则，前置、普通、行内、后置，可以加!!表示只执行行内的 loader

### 资料

- [webpack Loader 执行机制解析](https://juejin.cn/post/7238814783597953080)

## compiler-sfc

- 编译原理
- compilerScript
  - setup 写法会做转换，将 const 和 function 定义的内容进行返回，能让 template 中能取到这些变量
- compilerTemplate
  - 靶向更新
  - 标记动态节点比如 v-if {{}} v-for 语法的内容，目的是让在 diff 的时候能更快，提升性能
- compilerStyles
  - 可能存在多个
  - 处理 scoped

## 组件库

- monorepo
- pnpm
- bem
- sass 语法
  - @use
- vue 插件
  - 提供 install 方法，参数能拿到 app 实例
  - app.component 全局注册组件
- vue setup 语法
- icon 组件实现
- tree 组件实现
  - 虚拟滚动
    - 拍平展示；递归嵌套实现不了
    - 树的先序遍历，深度遍历所有子节点做拍平并渲染
    - 定高
      - 只渲染 3 屏数据，在滚动时对数据做裁剪
    - 不定高
      - 同定高
      - 先默认给个高度，用一个 list 存储每个节点的 top 和 bottom 值
      - 然后在滚动时去实时获取每个节点的高度，去及时修正 top 和 bottom
      - 使用二分查找找到当前 scrollTop 所对应的元素下标（大概率是不相等，需要用一个 temp 记住最接近的下标）
  - 异步加载
    - 展开的时候拿到当前目标
    - 用户传参 onLoad 为 Promise resolve 时将数据传给 tree 内部进行处理
    - 内部将 onLoad 的数据挂载到当前 node 的 children 下
  - 选中节点
    - 可选多选
  - 禁用节点
    - disabled 传参
  - 自定义节点
    - 组件通信 provide inject 实现
    - slots.default() 插槽实现
    - slot 在渲染时使用 tsx 的方式写
  - 支持复选
    - 全选中
    - 中间状态
- button 组件实现
- input 组件实现
- form form-item 组件实现
  - 和 input 组件关联
  - 组件通信 provide inject
  - async-validator 校验表单
- upload 组件实现
  - 包装文件对象
  - 使用原生 xhr 进度条
  - 使用dragover dragleave drop 实现拖拽文件上传
- calendar 组件实现
  - dayjs
  - 自定义插槽
- TODO
  - provide inject 实现
  - PropType ExtractPropTypes ts 实现

## vite

- es module
- hmr

### 资料

- [Vite 4.3 为何性能爆表？](https://mp.weixin.qq.com/s/HXwzQMyYRJN0ttzUPcr9fA)