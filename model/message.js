const moongoose = require("mongoose");
const Message = new moongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    // required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Course: {
    type: String,
    // required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", Message);
