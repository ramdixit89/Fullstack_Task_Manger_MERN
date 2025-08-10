const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const MongoUser = mongoose.model('Users', userSchema);

module.exports =  MongoUser ;
