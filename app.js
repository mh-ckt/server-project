// 引入express中间件
const express = require('express')
const connectDB = require('./db');
// 创建web服务器
const app = express()

// 跨域处理
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // 允许所有域名访问，生产环境建议指定具体域名
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS') // 允许的 HTTP 方法
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization') // 允许的请求头，如果前端有自定义头或token需要传递，要加上
  // 如果是预检请求（OPTIONS），直接返回 200
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use(express.json()) // 用来解析客户端发送的 JSON 格式请求体
app.use(express.urlencoded({ extended: true })) // 可选，解析表单提交

// 1. 先连接 MongoDB
connectDB();

// 挂载路由
const billRoutes = require('./routes/billRoutes.js')
app.use('/api', billRoutes)


// 启动服务器监听8000端口
app.listen(8000, () => {
  console.log('8000端口启动成功')
})
