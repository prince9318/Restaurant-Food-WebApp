const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      unique: true,
      validate: [validator.isEmail, "Please provide valid email address"],
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    address: {
      type: Array,
      required: [true, "address is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    usertype: {
      type: String,
      required: [true, "user type is required"],
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n9vUNCLmnEJ5pKIl0VUwTPofdPGIXPf2pA&s",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
