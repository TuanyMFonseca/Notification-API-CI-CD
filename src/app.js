import express from "express";
import notificationRoutes from "./routes/notificationRoutes.js";
import logRoutes from "./routes/logRoutes.js";

const app = express();
app.use(express.json());

app.use("/api", notificationRoutes);
app.use("/api", logRoutes);

export default app;
