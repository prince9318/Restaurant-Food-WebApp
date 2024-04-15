const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "food title is required"],
    },
    descreption: {
      type: String,
      required: [true, "food descreption is required"],
    },
    price: {
      type: Number,
      required: [true, "food price is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
    },
    foodTags: {
      type: String,
    },
    category: {
      type: String,
    },
    code: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
    },
    returnat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resturant",
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Food", foodSchema);
