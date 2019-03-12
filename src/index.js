// import Compile from './compile'

class Vue {
  constructor (options) {
    this.$el = options.el
    this.$data = options.data
    if (this.$el) {
      new Compile(this.$el, this)
    } else {
      throw new Error('请传入需要挂载的元素节点')
    }
    
  }
}

// export default Vue