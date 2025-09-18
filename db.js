// 用于 mongoose 连接 MongoDB
const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/testdb';
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB 连接成功（通过 Mongoose）');
  } catch (err) {
    console.error('❌ MongoDB 连接失败:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;