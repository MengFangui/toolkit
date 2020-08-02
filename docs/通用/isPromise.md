# isPromise

是否在Promise对象。<br/>
- @param：变量。<br/>
- @return：变量是Promise返回true，否则返回false。

## 实现

```javascript
  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }
```

## 示例

```javascript
  let a = new Promise((resolve, reject) => {
    resolve();
  });
  console.log(isPromise(a)); // true
```

## 说明
- 使用isDef api。
