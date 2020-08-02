# isUndef

变量是否定义。

## 实现

```javascript
  function isUndef (v) {
    return v === undefined || v === null
  }
```

## 示例

```javascript
  let a;
  console.log(isUndef(a)); // true
```

## 说明
无
