import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRoutes from "./Routes/index.routes.js";
import authRoutes from "./Routes/auth.routes.js";

// npm i @types/morgan  @types/express @types/cors -D

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(indexRoutes);
app.use("/api", authRoutes);

app.use((req, res, next) => {
  res.status(404).json({ Message: "Endpoint Not Found." });
});

export default app;
