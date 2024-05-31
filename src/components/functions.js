// Function to ensure every pokemon has a three digit ID
function ensureThreeDigits(number) {
    let numberString = number.toString();  // Convert the number to a string
    while (numberString.length < 3) {      // Loop until the string has at least 3 characters
        numberString = '0' + numberString; // Prepend a zero
    }
    return numberString;                   // Return the result as a string
}

// Function to generate a random number within the specified interval
function getRandomNumber(interval, existingNumbers) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (interval.max - interval.min + 1)) + interval.min;
    } while (existingNumbers.has(randomNumber));
    return randomNumber;
}

// Function to get the display name of the pokemon
function getDisplayName(str) {
    if (!str) return str;
    // Split the string by dash if it exists
    const parts = str.split('-');
    // Capitalize each part and join them with a space
    const capitalizedParts = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
    return capitalizedParts.join(' ');
  }

// Function to fetch pokemons
function fetchPokemons(interval, numOfCards) {

    const pokemonsFetching = async (interval) => {
      const existingNumbers = new Set();
      const pokemonsObject = {};
  
      for (let i = 0; i < numOfCards; i++) {
        const randomId = getRandomNumber(interval, existingNumbers);
        existingNumbers.add(randomId);
  
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        let pokemonData = await response.json();
        const pokemonId = ensureThreeDigits(pokemonData.id);
        const pokemonDisplayName = getDisplayName(pokemonData.name);
        pokemonsObject[`pokemon${i + 1}`] = {
          displayName: pokemonDisplayName,
          name: pokemonData.name,
          id: pokemonId
        };
      }
      return pokemonsObject;
    }
    return pokemonsFetching(interval);
}

export { fetchPokemons }