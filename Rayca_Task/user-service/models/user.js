const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: ['admin', 'agent', 'user'], default: 'user' },
  // Add MFA fields if needed
});

module.exports = mongoose.model('User', userSchema);
