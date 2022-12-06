const BASE_URL = "https://pokeapi.co/api/v2/";

function detail(pokemon) {
  // `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  return fetch(`${BASE_URL}pokemon/${pokemon}`).then((res) => res.json());
}

export default {
  detail
}

