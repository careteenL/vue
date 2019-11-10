import vnode from './vnode'
const hasOwnProperty = Object.prototype.hasOwnProperty

function h(type, config, ...children) {
  const props = {} //属性对象
  let key //我已经把config中的key传给了key
  if (config) {
    if (config.key) {
      key = config.key
    }
  }
  //迭代config中的每一个属性
  for (let propName in config) {
    if (hasOwnProperty.call(config, propName) && propName != 'key') {
      props[propName] = config[propName]
    }
  }
  //type=div key=undefined
  return vnode(type, key, props, children.map((child, index) => (
    typeof child == 'string' || typeof child == 'number' ? vnode(
      undefined, undefined, undefined, undefined, child
    ) : child
  )))
}
export default h