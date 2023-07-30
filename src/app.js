import express from "express";

import pokemonRouter from "./routes/pokemon";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
const corsOptions = {
  origin: true,
  credentials: true,
};

app.use("/api", cors(corsOptions), pokemonRouter);

export const viteNodeApp = app;
