import express from "express";
import { getAll, getPokemonById } from "../controllers/pokemon";

const router = express.Router();

router.get("/pokemons/:id", getPokemonById);
router.get("/pokemons/", getAll);

export default router;
