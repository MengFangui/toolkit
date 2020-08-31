# broadcast和dispatch

vue中发布订阅模式实现。

## 实现

```javascript
function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name
    // 组件名与传入componentName一致
    if (name === componentName) {
      // 子组件触发eventName事件
      child.$emit.apply(child, [eventName].concat(params))
    } else {
            broadcast.apply(child, [componentName, eventName].concat([params])); // eslint-disable-line
    }
  })
}

export default {
  methods: {
    // 向上触发事件
    $dispatch (componentName, eventName, params) {
      // 获取父实例
      let parent = this.$parent || this.$root
      // 获取组件名
      let name = parent.$options.name
      // 递归查找与componentName一致的组件名
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        // 组件触发eventName事件
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    // 向子（孙）组件发送事件
    $broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}

```

## 说明
无
