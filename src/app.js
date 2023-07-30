import express from "express";

import pokemonRouter from "./routes/pokemon";
import cors from "cors";
const app = express();

app.use(express.json());
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api", cors(corsOptions), pokemonRouter);

export const viteNodeApp = app;
