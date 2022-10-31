const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  loginType: {
    type: String,
    required: true,
    default: 'email',
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  googleId: {
    type: String,
  },
  twitterId: {
    type: String,
  }
});


module.exports = mongoose.model('User', UserSchema);