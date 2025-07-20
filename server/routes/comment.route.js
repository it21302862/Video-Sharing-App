import express from "express";
import { addComment, deleteComment, getComments } from "../controllers/comment.controller.js";
import {verifyToken} from "../verifyToken.js"

const commentRoutes = express.Router();

commentRoutes.post("/", verifyToken, addComment)
commentRoutes.delete("/:id", verifyToken, deleteComment)
commentRoutes.get("/:videoId", getComments)

export default commentRoutes;