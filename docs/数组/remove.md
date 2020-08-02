# remove

删除数组某一项。<br/>

* @param：arr：数组, item：待删除元素。<br/>
* @return：删除元素（若存在的话）。

## 实现

``` javascript
  function remove(arr, item) {
      if (arr.length) {
          var index = arr.indexOf(item);
          if (index > -1) {
              return arr.splice(index, 1)
          }
      }
  }
```

## 示例

``` javascript
  let arr = [1, 2, 3];
  let removeItem = remove(arr, 3);
  console.log(removeItem, arr); //removeItem为3，arr为[1,2]
```

## 说明

无
