const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: String,
  phone: Number,
  password: { type: String, required: true },
  isAdmin: Boolean,
  tripPlan: Array,
  tripList: [{ type: String }],
  friendList: [{ type: String }],
});

module.exports = mongoose.model('User', UserSchema);