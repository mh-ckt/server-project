// 引入express中间件
const express = require('express')
// 创建web服务器
const app = express()
// 引入商品列表数据
const goodsList = require('./src/goods.js')
// 引入省份数据
const province = require('./src/province.js')

// 跨域处理
// app.all('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'GET,POST')
//   next()
// })

// 返回商品列表
app.post('/mh/goodsList', (req, res) => {
  res.send(goodsList)
})

// 返回省份数据
app.post('/mh/province', (req, res) => {
  res.send(province)
})

//并发请求
for (let i = 0; i < 100; i++) {
  //最大请求接口数是100个
  app.get('/test' + i, (req, res) => {
    res.send({
      result: `请求成功:请求的接口是第${i}`
    })
  })
}

// 启动服务器监听8000端口
app.listen(8000, () => {
  console.log('8000端口启动成功')
})
