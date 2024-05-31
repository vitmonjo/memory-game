function CardsWrapper({ pokemons, onClick }) {

  const handleClick = (name) => {
    onClick(name);
  };

  const shuffledPokemons = {};

  function shuffle(pokemons) {
    const keys = Object.keys(pokemons);
    keys.sort(function(a, b) {return Math.random()- 0.5})
    keys.forEach(function(k) {
      shuffledPokemons[k] = pokemons[k];
    })
  }

  shuffle(pokemons);

  return (
    <div className="card-container">
      {Object.keys(shuffledPokemons).length === 0 ? (
        <p>Choose a Pokémon interval to start</p>
      ) : (
        Object.keys(shuffledPokemons).map((key) => (
          <div key={key} className="card" onClick={() => handleClick(shuffledPokemons[key].name)}>
            <img src={`https://img.pokemondb.net/artwork/large/${shuffledPokemons[key].name}.jpg`} alt={shuffledPokemons[key].displayName} />
            <div>{shuffledPokemons[key].displayName}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default CardsWrapper;