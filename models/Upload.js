const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UploadSchema = new schema({
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("upload", UploadSchema);
