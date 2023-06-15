const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async (email, password) => {
  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already in use");
  }
};

module.exports = mongoose.model("User", userSchema);
