// import CompileUtil from './CompileUtil.js'
class Compile {
  constructor (el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    // 将当前节点元素暂存到内存中
    let fragment = this.node2fragment(this.el)
    // 对节点元素进行统一编译
    this.compile(fragment)
    // 将编译后内容塞到页面中
    this.el.appendChild(fragment)
  }

  // 核心编译
  compile (node) {
    // let childNodes = node.childNodes
    [...node.childNodes].forEach(child => {
      if (this.isElementNode(child)) {
        this.compileElement(child)
        // 如果是元素，需要递归编译
        this.compile(child)
      } else {
        this.compileText(child)
      }
    })
  }

  // 编译元素
  compileElement (node) {
    // let attributes = node.attributes
    [...node.attributes].forEach(attr => {
      let { name, value: expr } = attr
      console.log(attr)
      if (this.isDirective(name)) {
        let [, directive] = name.split('-')
        // 调用不同指令处理
        CompileUtil[directive](node, expr, this.vm)
      }
    })
  }

  // 编译文本
  compileText (node) {
    let content = node.textContent
    // 是否符合约定的`{{name}}`格式
    if (/\{\{(.+?)\}\}/.test(content)) {
      CompileUtil['text'](node, content, this.vm)
    }
  }

  // 是否是指令
  isDirective (attrName) {
    return attrName.startsWith('v-')
  }

  node2fragment (node) {
    let fragment = document.createDocumentFragment()
    let firstChild
    while (firstChild = node.firstChild) {
      // appendChild 具有移动性
      fragment.appendChild(firstChild)
    }
    return fragment
  }

  // 判断是否为DOM元素
  isElementNode (node) {
    return node.nodeType === 1
  }
}

// export default Compile