const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var mongooseDelete = require("mongoose-delete");

const Coureses = new Schema(
  {
    name: { type: String, required: true },
    descript: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
Coureses.plugin(mongooseDelete, { deletedAt: true });

module.exports = mongoose.model("Coureses", Coureses);
