const mongoose = require("mongoose");
const schema = mongoose.Schema;
const PostSchema = new schema({
  content: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      text: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("post", PostSchema);
