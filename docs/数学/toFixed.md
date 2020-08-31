# toFixed

js自带的toFixed存在bug，具体请参考百度。

## 实现

```javascript
function toFixed(number, precision) {
    var multiplier = Math.pow(10, precision + 1),
        wholeNumber = Math.floor(number * multiplier);
    return Math.round(wholeNumber / 10) * 10 / multiplier;
}
```

## 说明
无
