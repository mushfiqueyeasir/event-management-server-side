const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please Provide User Name!"],
    },

    userEmail: {
      type: String,
      required: [true, "Please Provide User Email!"],
      unique: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please Enter A Valid Email Address!",
      ],
    },
    userImage: {
      type: String,
      required: [true, "Please Provide User Image!"],
      default:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    },
  },
  { timestamps: true }
);
const user = mongoose.model("user", userSchema);
module.exports = user;
