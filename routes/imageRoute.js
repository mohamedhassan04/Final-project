const express = require("express");
const imageRouter = express.Router();
const Image = require("../models/Upload");

imageRouter.post("/", async (req, res) => {
  try {
    const newImage = new Image(req.body);

    const result = await newImage.save();
    res.send({ image: result });
  } catch (error) {
    console.log(error);
  }
});

imageRouter.get("/", async (req, res) => {
  try {
    let result = await Image.find();
    res.send({ events: result, msg: "all images" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = imageRouter;
