require("dotenv/config");
require("../db/index");
const Cat = require("../models/Cat.model");

const cat = {
  name: "Toinette",
  age: "15 ans",
  description: "La meilleure de toute",
  picture: "https://imgflip.com/s/meme/I-Should-Buy-A-Boat-Cat.jpg",
};

async function seed() {
  try {
    await Cat.deleteMany();
    await Cat.create(cat);
    console.log("Created the cat!");
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

seed();
