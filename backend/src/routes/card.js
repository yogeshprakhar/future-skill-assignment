import { Router } from "express";
import { Post } from "../models/post.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    return res.status(200).send({ message: "post created ok" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "something went wrong while creating post" });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .send({ message: "something went wrong while creating post" });
  }
});

router.get("/search/:input", async (req, res) => {
  const { input } = req.params;
  try {
    let posts = await Post.find({ name: input });
    if (posts.length == 0) {
      return res.json({ message: "post not found" });
    }
    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).send({ message: "something went wrong" });
  }
});

export default router;
