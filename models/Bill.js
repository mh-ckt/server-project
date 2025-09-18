const mongoose = require('mongoose')

// 定义 Bill 的数据模型
const billSchema = new mongoose.Schema({
  billType: { type: String, required: true },    // 账单类型
  singleAmount: { type: Number, required: true },  // 账单金额
  aNoteText: { type: String, required: true },   // 账单备注
  detailsDate: { type: String },                // 账单日期
})

// 创建并导出 Mongoose Model
const Bill = mongoose.model('Bill', billSchema)

module.exports = Bill