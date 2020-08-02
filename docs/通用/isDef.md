# isDef

变量是否定义。<br/>
- @param：变量。<br/>
- @return：变量定义返回true，否则返回false。

## 实现

```javascript
  function isDef (v) {
    return v !== undefined && v !== null
  }
```

## 示例

```javascript
  let a;
  console.log(isDef(a)); // false
```

## 说明
无
