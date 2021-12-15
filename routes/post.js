const express = require("express");
const PostRouter = express.Router();
const Post = require("../models/Post");

PostRouter.post("/addpost", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    let result = await newPost.save();
    res.send({ result: result, msg: "post added" });
  } catch (error) {
    console.log(error);
  }
});

PostRouter.get("/getpost", async (req, res) => {
  try {
    let result = await Post.find().populate("creator", "_id name photo");
    res.send({ posts: result, msg: "all post" });
  } catch (error) {
    console.log(error);
  }
});

PostRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Post.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: "post deleted" });
  } catch (error) {
    console.log(error);
  }
});

PostRouter.put("/:id", async (req, res) => {
  try {
    let result = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ newEvent: result, msg: "post updated" });
  } catch (error) {
    console.log(error);
  }
});

PostRouter.post("/comment/:id/:userid", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id).populate(
      "comments.user",
      "_id name photo "
    );

    const newComment = {
      text: req.body.text,
      user: req.params.userid,
    };
    post.comments.unshift(newComment);
    await post.save();
    res.status(200).json(post.comments);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

PostRouter.delete("/comment/:id/:commentid/:userid", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const comment = post.comments.find(
      (comment) => comment.id === req.params.commentid
    );
    if (!comment) {
      return res.status(404).json({ msg: "comment does not exist" });
    }

    const removeindex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.params.userid);
    post.comments.splice(removeindex, 1);
    await post.save();
    res.json(post.comments);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

module.exports = PostRouter;
