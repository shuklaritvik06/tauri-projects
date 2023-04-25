import { useEffect, useState } from "react";
import PokeApi from "../api/api";
import { PokemonResponse } from "../types/pokemonInterface";
import { PokeNames } from "../types/namesInterface";
import Card from "../components/Card";
import Button from "../components/Button";
import { MAX_NUMBER } from "../constants/constants";

const PokemonPage = () => {
  const [data, setData] = useState<PokemonResponse>();
  const [names, setNames] = useState<string[]>();
  const [pokeIndex, setPokeIndex] = useState<number>(1);
  function decreaseIndex() {
    if (pokeIndex > 0) {
      setPokeIndex(pokeIndex - 1);
    }
  }
  function IncreaseIndex() {
    if (pokeIndex < MAX_NUMBER) {
      setPokeIndex(pokeIndex + 1);
    }
  }
  useEffect(() => {
    PokeApi.get<PokeNames>("").then((res) => {
      const response = res.data;
      const namesArray = response.results.map((element) => {
        return element.name;
      });
      setNames(namesArray);
    });
  }, []);
  useEffect(() => {
    PokeApi.get<PokemonResponse>(`/${pokeIndex}`).then((res) => {
      setData(res.data);
    });
  }, [pokeIndex]);
  return (
    <div className="w-full h-full">
      <Card pokeIndex={pokeIndex} name={names?.[pokeIndex - 1].toUpperCase()} />
      <div className="flex justify-around m-5">
        <Button
          text="Prev"
          handler={decreaseIndex}
          disabled={!(pokeIndex - 1 > 0)}
        />
        <Button
          text="Next"
          handler={IncreaseIndex}
          disabled={!(pokeIndex + 1 <= MAX_NUMBER)}
        />
      </div>
    </div>
  );
};

export default PokemonPage;
