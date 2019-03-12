const CompileUtil = {
  // 获取字符串的值`person.name` => this.$data.person.name
  getValue (vm, expr) {
    return expr.trim().split('.').reduce((data, current) => {
      return data[current]
    }, vm.$data)
  },

  // 处理`v-model`指令
  model (node, expr, vm) {
    let fn = this.updater['modelUpdater']
    let value = this.getValue(vm, expr)
    fn(node, value)
  },

  // 处理`{{person.name}}`
  text (node, expr, vm) {
    let fn = this.updater['textUpdater']
    let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getValue(vm, args[1])
    })
    fn(node, content)
  },
  
  html () {

  },

  // 辅助更新操作
  updater: {
    modelUpdater (node, value) {
      node.value = value
    },
    textUpdater (node, value) {
      node.textContent = value
    }
  }
}

// export default CompileUtil