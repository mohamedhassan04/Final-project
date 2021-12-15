const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  birthdaydate: { type: String, required: true },
  city: { type: String, required: true },
  club: { type: String },
  cin: { type: String },
  statut: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String },
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model("user", UserSchema);
