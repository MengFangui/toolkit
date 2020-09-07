<!--
 * @Author: 孟繁贵
 * @Date: 2020-09-07 16:05:50
 * @LastEditTime: 2020-09-07 16:10:52
 * @LastEditors: 孟繁贵
 * @Description: 
 * @FilePath: \toolkit\docs\性能优化\modern.md
-->
# 现代模式

[网址](https://cli.vuejs.org/zh/guide/browser-compatibility.html)

直接产生两个应用的版本：一个现代版的包，面向支持 ES modules 的现代浏览器，另一个旧版的包，面向不支持的旧浏览器。
```
现代版的包会通过 <script type="module"> 在被支持的浏览器中加载；它们还会使用 <link rel="modulepreload"> 进行预加载。

旧版的包会通过 <script nomodule> 加载，并会被支持 ES modules 的浏览器忽略。
```

需要说明的是：
```
<script type="module"> 需要配合始终开启的 CORS 进行加载。这意味着你的服务器必须返回诸如 Access-Control-Allow-Origin: * 的有效的 CORS 头。
```
