import express from "express";

import pokemonRouter from "./routes/pokemon.js";
import cors from "cors";
const app = express();

app.use(express.json());
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api", cors(corsOptions), pokemonRouter);
app.listen(8080, () => {
  console.log(`App listen running at port : 8080`);
});
export const viteNodeApp = app;
