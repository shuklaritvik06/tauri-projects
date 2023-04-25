const Card = ({
  pokeIndex,
  name
}: {
  pokeIndex: number;
  name: string | undefined;
}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img src="pokemon.webp" className="w-1/3" />
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-1/2 border-2 border-orange-500 rounded-md">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`}
            className="w-full"
          />
          <h1 className="font-bold m-3 flex justify-center">{name}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
