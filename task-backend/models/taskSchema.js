const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true 
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const MongoTask = mongoose.model('Task', taskSchema);
module.exports =  MongoTask ;
