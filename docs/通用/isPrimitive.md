# isPrimitive

原始类型判断。<br/>
- @param：变量。<br/>
- @return：原始类型返回true，否则返回false。

## 实现

```javascript
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }
```

## 示例

```javascript
  let a = 1;
  console.log(isPrimitive(a)); // true
```

## 说明
无
