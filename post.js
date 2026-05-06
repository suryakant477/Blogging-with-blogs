const mongoose = require("mongoose");

module.exports = mongoose.model("Post", {
  title: String,
  content: String,
  likes: { type: Number, default: 0 },
  comments: [String]
});
