var inner = { first: 1111 }
var test = { name: inner }
Object.defineProperty(test, "name", {
    get() {
        console.log("name get被触发")
        return inner
    },
    set() {
        console.log("name set被触发")
    }
})

// 访问 test.name 第一次，触发 name 的 get
Object.defineProperty(test.name, "first", {
    get() {
        return console.log("first get被触发")
    },
    set() {
        console.log("first set被触发")
    }
})

// 访问 test.name 第二次，触发 name 的 get
var a = test.name
// 独立访问 first 第一次
var b = a.first
// 独立访问 first 第二次
b = a.first
// 独立改变 first
a.first = 5
