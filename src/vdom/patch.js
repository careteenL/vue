import {
  isSameNode
} from './vnode'
/**
 * 通过虚拟DOM节点创建真实的DOM节点
 */
function createDOMElementFromVnode(vnode) {
  let {
    type,
    children
  } = vnode // DOM类型span div
  if (type) {
    // 创建真实DOM元素并挂载到vnode上的domElement
    let domElement = vnode.domElement = document.createElement(type)
    updateProperties(vnode)
    if (Array.isArray(children)) {
      children.forEach(child => domElement.appendChild(createDOMElementFromVnode(child)))
    }
  } else {
    vnode.domElement = document.createTextNode(vnode.text)
  }
  return vnode.domElement
}

/**
 * 把一个虚拟DOM节点变成真实DOM节点挂载到容器上
 * @param {} vnode 虚拟DOM节点
 * @param {*} container 容器
 */
export function mount(vnode, container) {
  let newDOMElement = createDOMElementFromVnode(vnode)
  container.appendChild(newDOMElement)
}
// 比较老的虚拟DOM节点和新的虚拟DOM节点
export function patch(oldVnode, newVnode) { // 休息到9点05分
  // 1.如果新的虚拟DOM节点类型type不一样，直接重建
  if (oldVnode.type !== newVnode.type) {
    return oldVnode.domElement.parentNode.replaceChild(createDOMElementFromVnode(newVnode), oldVnode.domElement)
  }
  if (typeof newVnode.text !== 'undefined') {
    return oldVnode.domElement.textContent = newVnode.text
  }

  // 如果类型一样，要继续往下比较 1.比较属性 2比较它的儿子们
  // path就是找出新的虚拟DOM节点和老的虚拟DOM的差异，更新当前页面上的那个真实DOM
  let domElement = newVnode.domElement = oldVnode.domElement // 老的真实DOM节点
  // 传入新的虚拟DOM节点和老的属性对象 更新老的真实DOM节点上的属性
  updateProperties(newVnode, oldVnode.props)
  let oldChildren = oldVnode.children // 老的虚拟DOM节点的儿子数组
  let newChildren = newVnode.children // 新的虚拟DOM节点儿子数组
  if (oldChildren.length > 0 && newChildren.length > 0) {
    updateChildren(domElement, oldChildren, newChildren)
  } else if (oldChildren.length > 0) { // 老的有儿子，新的没儿子
    domElement.innerHTML = ''
  } else if (newChildren.length > 0) { // 老的没有儿子，新的有儿子
    for (let i = 0; i < newChildren.length; i++) {
      domElement.appendChild(createDOMElementFromVnode(newChildren[i]))
    }
  }
}

function createKeyToIndexMap(children) {
  let map = {}
  for (let i = 0; i < children.length; i++) {
    let key = children[i].key
    if (key) {
      map[key] = i
    }
  }
  return map
}

function updateChildren(parentDomElement, oldChildren, newChildren) {
  let oldStartIndex = 0,
    oldStartVnode = oldChildren[0] // 老的开始索引和老的开始节点
  let oldEndIndex = oldChildren.length - 1,
    oldEndVnode = oldChildren[oldEndIndex] // 老的结束索引和老的结束节点

  let newStartIndex = 0,
    newStartVnode = newChildren[0] // 新的开始索引和新的开始节点
  let newEndIndex = newChildren.length - 1,
    newEndVnode = newChildren[newEndIndex] // 新的结束索引和新的结束节点
  let oldKeyToIndexMap = createKeyToIndexMap(oldChildren)
  // 两个队列都没有循环结束就要继续循环，如果有一个结束，就停止循环
  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
    // 老的开始节点和新的开始节点进行比较
    if (!oldStartVnode) {
      oldStartVnode = oldChildren[++oldStartIndex]
    } else if (!oldEndVnode) {
      oldEndVnode = oldChildren[--oldEndIndex]
    } else if (isSameNode(oldStartVnode, newStartVnode)) {
      // 找到newStartVnode和oldStartVnode的的差异，并且更新到真实DOM上去oldStartVnode.domElement
      patch(oldStartVnode, newStartVnode)
      oldStartVnode = oldChildren[++oldStartIndex]
      newStartVnode = newChildren[++newStartIndex]
    } else if (isSameNode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode)
      oldEndVnode = oldChildren[--oldEndIndex]
      newEndVnode = newChildren[--newEndIndex]
    } else if (isSameNode(oldEndVnode, newStartVnode)) { // 老的结束和新的开始对应的把尾部的元素移动到头部
      patch(oldEndVnode, newStartVnode)
      parentDomElement.insertBefore(oldEndVnode.domElement, oldStartVnode.domElement)
      oldEndVnode = oldChildren[--oldEndIndex]
      newStartVnode = newChildren[++newStartIndex]
    } else if (isSameNode(oldStartVnode, newEndVnode)) { // 老的结束和新的开始对应的把尾部的元素移动到头部
      patch(oldStartVnode, newEndVnode)
      parentDomElement.insertBefore(oldStartVnode.domElement, oldEndVnode.domElement.nextSibling)
      oldStartVnode = oldChildren[++oldStartIndex]
      newEndVnode = newChildren[--newEndIndex]
      // 进行DOM移动 把老的开始真实DOM移动真实DOM的尾部
    } else {
      let oldIndexByKey = oldKeyToIndexMap[newStartVnode.key]
      if (oldIndexByKey == null) {
        parentDomElement.insertBefore(createDOMElementFromVnode(newStartVnode), oldStartVnode.domElement)
      } else {
        let oldVnodeToMove = oldChildren[oldIndexByKey]
        if (oldVnodeToMove.type !== newStartVnode.type) {
          parentDomElement.insertBefore(createDOMElementFromVnode(newStartVnode), oldStartVnode.domElement)
        } else {
          patch(oldVnodeToMove, newStartVnode)
          oldChildren[oldIndexByKey] = undefined
          parentDomElement.insertBefore(oldVnodeToMove.domElement, oldStartVnode.domElement)
        }
      }
      newStartVnode = newChildren[++newStartIndex]
    }
  }
  if (newStartIndex <= newEndIndex) { // 是老的队列 处理完了，新的队列没处理完
    // 我要把这个节点插入到谁的前面
    let beforeDOMElement = newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].domElement
    for (let i = newStartIndex; i <= newEndIndex; i++) {
      parentDomElement.insertBefore(createDOMElementFromVnode(newChildren[i]), beforeDOMElement)
    }
  }
  if (oldStartIndex <= oldEndIndex) {
    for (let i = oldStartIndex; i <= oldEndIndex; i++) {
      parentDomElement.removeChild(oldChildren[i].domElement);
    }
  }
}

function updateProperties(vnode, oldProps = {}) {
  let newProps = vnode.props // 新属性对象
  let domElement = vnode.domElement // 真实DOM
  // 先处理样式对象
  let oldStyle = oldProps.style || {}
  let newStyle = newProps.style || {}
  // 如果style属性在老的样式对象里有，新的没有，需要删除。如果老的没有，新的有要添加上
  for (let oldAttrName in oldStyle) { // oldStyle{color:'red',backgroundColor:'green'}
    if (!newStyle[oldAttrName]) {
      domElement.style[oldAttrName] = ''
    }
  }
  // 把老的属性对象中的有，新的属性对象里没有的删除
  for (let oldPropName in oldProps) {
    if (!newProps[oldPropName]) {
      delete domElement[oldPropName]
    }
  }

  // 添加的新的属性
  for (let newPropName in newProps) {
    if (newPropName === 'style') {
      let styleObject = newProps.style // 拿取新的样式对象
      for (let newAttrName in styleObject) {
        domElement.style[newAttrName] = styleObject[newAttrName]
      }
    } else {
      // 直接 更新 直接 拿 新的属性对象中属性的值覆盖掉真实DOM的属性
      domElement[newPropName] = newProps[newPropName]
    }
  }
}