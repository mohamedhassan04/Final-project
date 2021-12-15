const mongoose = require("mongoose");
const schema = mongoose.Schema;
const EventSchema = new schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  name: { type: String, required: true },
  date: { type: String, required: true },
  adress: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, required: true },
  distance: { type: Array, required: true },
  intelligence: { type: String, required: true },
  addphotoevent: { type: String },
  addoffcielphoto: { type: String, required: true },
  description: { type: String, required: true },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    },
  ],
  participant: { type: Array },
  isApprouved: { type: Boolean, default: false },
});

module.exports = mongoose.model("event", EventSchema);
