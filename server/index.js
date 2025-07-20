import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import videoRoutes from "./routes/video.route.js";
import commentRoutes from "./routes/comment.route.js";

const app = express();
dotenv.config();

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => {
        console.error("MongoDB connection failed:", error);
      });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/comment", commentRoutes);

app.use((err,req,res,next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
})


app.listen(8000, () => {
  connectDB();
  console.log("Server is running on port 8000");
});
