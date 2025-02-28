import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleswares/errorhandeler.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use(errorHandler);

export default app;