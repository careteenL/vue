import {
  h,
  mount,
  patch
} from './vdom'
//h是用来创建虚拟DOM的,虚拟DOM就是一个普通JS对象,放着类型、属性、儿子们
//DOMDIFF原则 尽量少操作DOM 而且vue domdiff是针对常用DOM操作进行了优化
const root = document.getElementById('root')

/* const oldVnode = h('ul', { id: 'container' },
  h('li', { style: { backgroundColor: '#110000' }, key: 'A' }, 'A'),
  h('li', { style: { backgroundColor: '#440000' }, key: 'B' }, 'B'),
  h('li', { style: { backgroundColor: '#770000' }, key: 'C' }, 'C'),
  h('li', { style: { backgroundColor: '#AA0000' }, key: 'D' }, 'D'),
)
const newVnode = h('ul', { id: 'container' },
  h('li', { style: { backgroundColor: '#AA0000' }, key: 'E' }, 'E'),
  h('li', { style: { backgroundColor: '#440000' }, key: 'B' }, 'B1'),
  h('li', { style: { backgroundColor: '#110000' }, key: 'A' }, 'A1'),
  h('li', { style: { backgroundColor: '#AA0000' }, key: 'D' }, 'D1'),
  h('li', { style: { backgroundColor: '#770000' }, key: 'F' }, 'F'),
) */
const oldVnode = h('ul', {
    id: 'container'
  },
  h('li', {
    style: {
      backgroundColor: '#110000'
    }
  }, 'A'),
  h('li', {
    style: {
      backgroundColor: '#440000'
    }
  }, 'B'),
  h('li', {
    style: {
      backgroundColor: '#770000'
    }
  }, 'C'),
  h('li', {
    style: {
      backgroundColor: '#AA0000'
    }
  }, 'D'),
)
const newVnode = h('ul', {
    id: 'container'
  },
  h('li', {
    style: {
      backgroundColor: '#110000'
    }
  }, 'A1'),
  h('li', {
    style: {
      backgroundColor: '#440000'
    }
  }, 'B1'),
  h('li', {
    style: {
      backgroundColor: '#770000'
    }
  }, 'C1'),
  h('li', {
    style: {
      backgroundColor: '#AA0000'
    }
  }, 'D1'),
)
//console.log(oldVnode)
//把虚拟DOM节点挂载到root上面去
mount(oldVnode, root)
//DOM节点为替换成了文本节点
//DOMDIFF 如果老节点和新的节类型不一样的话，直接把老的替换成新的

setTimeout(function () {
  patch(oldVnode, newVnode)
}, 1000)