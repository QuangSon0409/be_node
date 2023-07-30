const pokemonModel = [
  {
    id: "1",
    pokemonName: "Charmander ",
    image: "https://db.pokemongohub.net/images/official/full/004.webp",
    description:
      "Charmander is a Fire type Pokémon in Pokémon GO. It has a max CP of 1108, with the following stats in Pokémon GO: 116 ATK, 93 DEF and 118 STA.Charmander's best moves in Pokémon GO are Ember and Flamethrower (6.05 DPS)",
    level: "Charmeleon , Charizard",
  },
  {
    id: "2",
    pokemonName: "Squirtle ",
    image: "https://db.pokemongohub.net/images/official/full/007.webp",
    description:
      "Squirtle is a Watertype Pokémon in Pokémon GO. It has a max CP of 1069, with the following stats in Pokémon GO: 94 ATK, 121 DEF and 127 STA",
    level: "Wartortle , Blastoise ",
  },
  {
    id: "3",
    pokemonName: "Caterpie ",
    image: "https://db.pokemongohub.net/images/official/full/010.webp",
    description:
      "Caterpie is a Bug type Pokémon in Pokémon GO. It has a max CP of 494, with the following stats in Pokémon GO: 55 ATK, 55 DEF and 128 STA.",
    level: "Metapod , Butterfree",
  },
  {
    id: "4",
    pokemonName: "Weedle",
    image: "https://db.pokemongohub.net/images/official/full/013.webp",
    description:
      "Weedle is a Bug and Poison type Pokémon in Pokémon GO. It has a max CP of 515, with the following stats in Pokémon GO: 63 ATK, 50 DEF and 120 STA.",
    level: "Kakuna , Beedrill",
  },
  {
    id: "5",
    pokemonName: "Pidgey ",
    image: "https://db.pokemongohub.net/images/official/full/016.webp",
    description:
      "Pidgey is a Normal and Flying type Pokémon in Pokémon GO. It has a max CP of 769, with the following stats in Pokémon GO: 85 ATK, 73 DEF and 120 STA.",
    level: "Pidgeotto  , Pidgeot ",
  },
  {
    id: "6",
    pokemonName: "Rattata ",
    image: "https://db.pokemongohub.net/images/official/full/019.webp",
    description:
      "Rattata is a Normal type Pokémon in Pokémon GO. It has a max CP of 830, with the following stats in Pokémon GO: 103 ATK, 70 DEF and 102 STA.",
    level: "Raticate  ",
  },
  {
    id: "7",
    pokemonName: "Spearow ",
    image: "https://db.pokemongohub.net/images/official/full/021.webp",
    description:
      "Spearow is a Normal and Flying type Pokémon in Pokémon GO. It has a max CP of 902, with the following stats in Pokémon GO: 112 ATK, 60 DEF and 120 STA.",
    level: "Fearow  ",
  },
  {
    id: "8",
    pokemonName: "Ekans  ",
    image: "https://db.pokemongohub.net/images/official/full/023.webp",
    description:
      "Ekans is a Poison type Pokémon in Pokémon GO. It has a max CP of 1048, with the following stats in Pokémon GO: 110 ATK, 97 DEF and 111 STA.",
    level: "Arbok   ",
  },
  {
    id: "9",
    pokemonName: "Pikachu  ",
    image: "https://db.pokemongohub.net/images/official/full/025.webp",
    description:
      "Pikachu is a Electric type Pokémon in Pokémon GO. It has a max CP of 1060, with the following stats in Pokémon GO: 112 ATK, 96 DEF and 111 STA.",
    level: "Raichu",
  },
  {
    id: "10",
    pokemonName: "Sandshrew  ",
    image: "https://db.pokemongohub.net/images/official/full/027.webp",
    description:
      "Sandshrew is a Ground type Pokémon in Pokémon GO. It has a max CP of 1426, with the following stats in Pokémon GO: 126 ATK, 120 DEF and 137 STA.",
    level: "Sandslash   ",
  },
  {
    id: "11",
    pokemonName: "Nidoran ",
    image: "https://db.pokemongohub.net/images/official/full/029.webp",
    description:
      "Nidoran♀ is a Poison type Pokémon in Pokémon GO. It has a max CP of 922, with the following stats in Pokémon GO: 86 ATK, 89 DEF and 146 STA.",
    level: "Nidorina, Nidoking  ",
  },
  {
    id: "12",
    pokemonName: "Clefairy ",
    image: "https://db.pokemongohub.net/images/official/full/035.webp",
    description:
      "Clefairy is a Fairy type Pokémon in Pokémon GO. It has a max CP of 1306, with the following stats in Pokémon GO: 107 ATK, 108 DEF and 172 STA.",
    level: "Clefable  ",
  },
  {
    id: "13",
    pokemonName: "Vulpix ",
    image: "https://db.pokemongohub.net/images/official/full/037.webp",
    description:
      "Vulpix is a Fire type Pokémon in Pokémon GO. It has a max CP of 998, with the following stats in Pokémon GO: 96 ATK, 109 DEF and 116 STA.",
    level: "Ninetales  ",
  },
  {
    id: "14",
    pokemonName: "Jigglypuff ",
    image: "https://db.pokemongohub.net/images/official/full/039.webp",
    description:
      "Jigglypuff is a Normal and Fairy type Pokémon in Pokémon GO. It has a max CP of 818, with the following stats in Pokémon GO: 80 ATK, 41 DEF and 251 STA.",
    level: "Wigglytuff  ",
  },
  {
    id: "15",
    pokemonName: "Zubat  ",
    image: "https://db.pokemongohub.net/images/official/full/041.webp",
    description:
      "Zubat is a Poison and Flying type Pokémon in Pokémon GO. It has a max CP of 754, with the following stats in Pokémon GO: 83 ATK, 73 DEF and 120 STA.",
    level: "Golbat   ",
  },
  {
    id: "16",
    pokemonName: "Oddish  ",
    image: "https://db.pokemongohub.net/images/official/full/043.webp",
    description:
      "Oddish is a Grass and Poison type Pokémon in Pokémon GO. It has a max CP of 1389, with the following stats in Pokémon GO: 131 ATK, 112 DEF and 128 STA.",
    level: "Gloom , Vileplume   ",
  },
  {
    id: "17",
    pokemonName: "Paras  ",
    image: "https://db.pokemongohub.net/images/official/full/046.webp",
    description:
      "Paras is a Bug and Grass type Pokémon in Pokémon GO. It has a max CP of 1150, with the following stats in Pokémon GO: 121 ATK, 99 DEF and 111 STA.",
    level: "Parasect   ",
  },
  {
    id: "18",
    pokemonName: "Venonat  ",
    image: "https://db.pokemongohub.net/images/official/full/048.webp",
    description:
      "Venonat is a Bug and Poison type Pokémon in Pokémon GO. It has a max CP of 1135, with the following stats in Pokémon GO: 100 ATK, 100 DEF and 155 STA.",
    level: "Venomoth   ",
  },
  {
    id: "19",
    pokemonName: "Diglett  ",
    image: "https://db.pokemongohub.net/images/official/full/050.webp",
    description:
      "Diglett is a Ground type Pokémon in Pokémon GO. It has a max CP of 764, with the following stats in Pokémon GO: 109 ATK, 78 DEF and 67 STA.",
    level: "Dugtrio   ",
  },
  {
    id: "20",
    pokemonName: "Meowth  ",
    image: "https://db.pokemongohub.net/images/official/full/052.webp",
    description:
      "Meowth is a Normal type Pokémon in Pokémon GO. It has a max CP of 846, with the following stats in Pokémon GO: 92 ATK, 78 DEF and 120 STA.",
    level: "Persian  ",
  },
];

export const getPokemonById = async (req, res) => {
  try {
    const pokemons = pokemonModel.filter((p) => p.id == req.params.id);

    if (pokemons.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm nào",
      });
    } else {
      return res.status(201).json({
        message: "Lấy sản phẩm thành công",
        data: pokemons,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error 500",
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const { _keyword } = req.query;
    const searchPokemon = (pokemons) => {
      return pokemons.filter((p) =>
        p.pokemonName.includes(_keyword.toLowerCase())
      );
    };
    const sortPokemon = pokemonModel.sort((a, b) => {
      const nameA = a.pokemonName.toLowerCase();
      const nameB = b.pokemonName.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    if (sortPokemon.length === 0) {
      res.status(404).json({
        message: "Không có sản phẩm nào",
      });
    }
    if (_keyword) {
      const searchData = await searchPokemon(sortPokemon);
      if (searchData.length === 0) {
        return res.status(200).json({
          message: "Sản phẩm bạn tìm không có tồn tại trong danh sách",
        });
      }
      return res.status(200).json({
        message: "Lấy danh sách theo tên thành công",
        data: searchData,
      });
    }
    return res.status(200).json({
      message: "lấy sản phẩm thành công",
      data: sortPokemon,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
