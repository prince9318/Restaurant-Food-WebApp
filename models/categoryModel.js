const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Category is required"],
    },
    imageUrl: {
      type: {
        type: String,
        default:
          "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
      },
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Category", categorySchema);
