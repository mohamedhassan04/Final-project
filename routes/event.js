const express = require("express");
const EventRouter = express.Router();
const Event = require("../models/Event");

EventRouter.post("/addevent", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    let result = await newEvent.save();
    res.send({ result: result, msg: "event added" });
  } catch (error) {
    console.log(error);
  }
});

EventRouter.get("/getevent", async (req, res) => {
  try {
    let result = await Event.find().populate("creator", "_id name");
    res.send({ events: result, msg: "all events" });
  } catch (error) {
    console.log(error);
  }
});

EventRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Event.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: "event deleted" });
  } catch (error) {
    console.log(error);
  }
});

EventRouter.put("/:id", async (req, res) => {
  try {
    let result = await Event.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ newEvent: result, msg: "event updated" });
  } catch (error) {
    console.log(error);
  }
});

EventRouter.put("/part/:id", async (req, res) => {
  try {
    let result = await Event.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { participant: { ...req.body } } }
    );
    res.send({ newEvent: result, msg: "event updated" });
  } catch (error) {
    console.log(error);
  }
});

EventRouter.put("/like/:id/:userid", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (
      event.likes.filter((like) => like.user.toString() === req.params.userid)
        .length > 0
    ) {
      return res.status(400).json({ error: "event already liked" });
    }

    event.likes.unshift({ user: req.params.userid });
    await event.save();
    res.json(event.likes);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

EventRouter.put("/unlike/:id/:userid", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (
      event.likes.filter((like) => like.user.toString() === req.params.userid)
        .length === 0
    ) {
      return res.status(400).json({ error: "event has not been liked yet " });
    }

    const removeindex = event.likes
      .map((like) => like.user.toString())
      .indexOf(req.params.userid);

    event.likes.splice(removeindex, 1);
    await event.save();
    res.status(200).json(event.likes);
  } catch (error) {
    res.json(error);
  }
});

module.exports = EventRouter;
