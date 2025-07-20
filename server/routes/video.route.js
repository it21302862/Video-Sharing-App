import express from "express";
import { addVideo, deleteVideo, updateVideo, getVideo, addView, trend, random, sub, getByTag, search } from "../controllers/video.controller.js";
import { verifyToken } from "../verifyToken.js";

const videoRoutes = express.Router();

//create a video
videoRoutes.post("/", verifyToken, addVideo)
videoRoutes.put("/:id", verifyToken, updateVideo)
videoRoutes.delete("/:id", verifyToken, deleteVideo)
videoRoutes.get("/find/:id", getVideo)
videoRoutes.put("/view/:id", addView)
videoRoutes.get("/trend", trend)
videoRoutes.get("/random", random)
videoRoutes.get("/sub",verifyToken, sub)
videoRoutes.get("/tags", getByTag)
videoRoutes.get("/search", search)

export default videoRoutes;