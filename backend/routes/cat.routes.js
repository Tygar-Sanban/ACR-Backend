const express = require("express");
const router = express.Router();
const Cat = require("../models/Cat.model");
const isAuthenticated = require("../middleware/jwt.middleware");

router.get("/", async (req, res, next) => {
  try {
    const cats = await Cat.find();
    res.json(cats);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, age, description, picture } = req.body;
    const createdCat = await Cat.create({ name, age, description, picture });
    res.json(createdCat);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age, description, picture } = req.body;
    const updatedcat = await Cat.findByIdAndUpdate(
      id,
      {
        name,
        age,
        description,
        picture,
      },
      { new: true }
    );
    res.json(updatedcat);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCat = await Cat.findByIdAndDelete(id);
    res.json(deletedCat);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
