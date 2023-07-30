import express from "express";

import pokemonRouter from "./routes/pokemon";
import cors from "cors";
const app = express();

//

// app.get("/api/pokemons", (req, res) => {
//   try {
//     const sortPokemon = pokemonList.sort((a, b) => {
//       const nameA = a.pokemonName.toLowerCase();
//       const nameB = b.pokemonName.toLowerCase();
//       return nameA.localeCompare(nameB);
//     });
//     return res.status(200).json({
//       message: "Lấy danh sách thành công",
//       data: sortPokemon,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Error 500",
//     });
//   }
// });
// app.get("/api/pokemons/:id", (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log(pokemonList, id);
//     const filter = pokemonList.filter((pokemon) => pokemon.id == id);

//     if (filter.length === 0) {
//       return res.status(404).json({
//         message: "Không tìm thấy sản phẩm nào",
//       });
//     } else {
//       return res.status(201).json({
//         message: "Lấy sản phẩm thành công",
//         data: filter,
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       message: "Error 500",
//     });
//   }
// });

// app.get("/api/pokemon", (req, res) => {
//   try {
//     const { _keyword } = req.query;
//     console.log(_keyword);
//     if (!_keyword) {
//       return res.status(404).json({
//         message: "Vui Lòng nhập từ khóa bạn muốn tìm",
//       });
//     }

//     const pokemonName = pokemonList.filter((pokemon) =>
//       pokemon.pokemonName.includes(_keyword.toLowerCase())
//     );
//     if (pokemonName.length === 0) {
//       return res.status(404).json({ message: "Không tìm thấy sản phẩm nào." });
//     }
//     return res.status(200).json({
//       message: "Tìm kiếm theo tên thành công",
//       data: pokemonName,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Error 500",
//     });
//   }
// });
app.use(express.json());
app.use(cors());
app.use("/api", pokemonRouter);

export const viteNodeApp = app;
