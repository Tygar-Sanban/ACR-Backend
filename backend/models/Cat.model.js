const { Schema, model } = require("mongoose");

const catSchema = new Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
});

const Cat = model("Cat", catSchema);

module.exports = Cat;
