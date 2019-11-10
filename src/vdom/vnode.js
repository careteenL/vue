const VNODE_TYPE = 'VNODE_TYPE'
//domElement是此虚拟DOM节点对应的真实的DOM节点
//_type=VNODE_TYPE type=标签类型div p span
export function isSameNode(oldVnode, newVnode) {
  //如果说两个虚拟DOM节点key一样，并且类型一样，说明一种节点，可以进行深度比较
  return oldVnode.key === newVnode.key && oldVnode.type === newVnode.type
}
export function isVnode(vnode) {
  return vnode && vnode._type == VNODE_TYPE
}
export function vnode(type, key, props = {}, children = [], text, domElement) {
  return {
    _type: VNODE_TYPE, //表示这是一个虚拟DOM节点
    type,
    key,
    props,
    children,
    text,
    domElement
  }
}
export default vnode