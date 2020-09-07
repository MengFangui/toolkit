/*
 * @Author: 孟繁贵
 * @Date: 2020-08-02 17:50:16
 * @LastEditTime: 2020-09-07 16:06:48
 * @LastEditors: 孟繁贵
 * @Description: 
 * @FilePath: \toolkit\build\index.js
 */
const fs = require('fs')

const documentationFolder = 'docs'

async function getFiles (directory) {
  const files = []
  const dir = fs.opendirSync(directory)

  for await (const dirent of dir) {
    files.push(dirent.name)
  }

  return files.sort()
}

function filenameToTitle (filename) {
  return filename.split('.').shift().replace(/_/g, ' ')
}

async function buildSection (directory) {
  const files = await getFiles(`${documentationFolder}/${directory}`)
  const title = filenameToTitle(directory)
  const content = [`- ${title}\n`]

  for (const file of files) {
    content.push(`\t- [${filenameToTitle(file)}](${directory}/${file})`)
  }

  return content.join('\n')
}

async function buildSidebar (watchEventType) {
  if (watchEventType == 'change') { return }

  console.log('Building _sidebar.md')
  const content = '- [首页](README.md) \n\n' +
   await buildSection('对象') + '\n\n\n' +
   await buildSection('函数') + '\n\n\n' +
   await buildSection('集合') + '\n\n\n' +
   await buildSection('日期') + '\n\n\n' +
   await buildSection('数学') + '\n\n\n' +
   await buildSection('数组') + '\n\n\n' +
   await buildSection('通用') + '\n\n\n' +
   await buildSection('网站') + '\n\n\n' +
   await buildSection('性能优化') + '\n\n\n' +
   await buildSection('字符串') + '\n\n\n' +
   await buildSection('node') + '\n\n\n'

  fs.writeFileSync(`${documentationFolder}/_sidebar.md`, content)
}

fs.watch(`${documentationFolder}/对象`, buildSidebar)
fs.watch(`${documentationFolder}/函数`, buildSidebar)
fs.watch(`${documentationFolder}/集合`, buildSidebar)
fs.watch(`${documentationFolder}/日期`, buildSidebar)
fs.watch(`${documentationFolder}/数学`, buildSidebar)
fs.watch(`${documentationFolder}/数组`, buildSidebar)
fs.watch(`${documentationFolder}/网站`, buildSidebar)
fs.watch(`${documentationFolder}/性能优化`, buildSidebar)
fs.watch(`${documentationFolder}/通用`, buildSidebar)
fs.watch(`${documentationFolder}/字符串`, buildSidebar)
fs.watch(`${documentationFolder}/node`, buildSidebar)

buildSidebar()
