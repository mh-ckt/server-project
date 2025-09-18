// routes/billRoutes.js

const express = require('express')
const router = express.Router()
const Bill = require('../models/Bill') // 引入账单模型

// 添加账单
router.post('/addBill', async (req, res) => {
  try {
    const { billType, aNoteText, detailsDate, singleAmount } = req.body
    const newBill = new Bill({
      billType,
      aNoteText,
      detailsDate,
      singleAmount,
    })

    const savedBill = await newBill.save()
    res.json({
      success: true,
      message: '账单添加成功',
      data: savedBill,
    })
  } catch (error) {
    console.error('❌ 账单保存失败：', error)
    res.status(500).json({
      success: false,
      message: '账单保存失败',
      error: error.message,
    })
  }
})

// 获取所有账单
router.get('/getBills', async (req, res) => {
  try {
    const bills = await Bill.find()
    res.json({
      success: true,
      message: '获取账单成功',
      data: bills,
    })
  } catch (error) {
    console.error('❌ 查询账单失败：', error)
    res.status(500).json({
      success: false,
      message: '获取账单失败',
      error: error.message,
    })
  }
})

// 导出路由
module.exports = router