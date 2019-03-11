import Compile from './compile'

class Vue {
  constructor (options) {
    this.$el = options.el
    this.$data = option.data
    new Compile($el, $data)
  }
}