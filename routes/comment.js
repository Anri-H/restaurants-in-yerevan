import express from "express";
import { addComment } from "../controllers/comment.js";

const routerComment = express.Router();

routerComment.post("/comment/:id", addComment);

export default routerComment;
