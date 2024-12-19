import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import { useFavorites } from '../hooks/useFavorites';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(20);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      const results = response.data.results;
      const pokemonData = await Promise.all(
        results.map(async (pokemon) => {
          const detailResponse = await axios.get(pokemon.url);
          return {
            id: detailResponse.data.id,
            name: detailResponse.data.name,
            image: detailResponse.data.sprites.other['official-artwork'].front_default,
          };
        })
      );
      setPokemons(pokemonData);
    };

    fetchPokemons();
  }, [limit]); 

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Lista de Pokémon</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isFavorite={favorites.some((fav) => fav.id === pokemon.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => setLimit((prevLimit) => prevLimit + 20)}
          className="px-6 py-2 bg-pokemon-blue text-white rounded hover:bg-pokemon-yellow hover:animate-vibrate"
        >
          Cargar más
        </button>
      </div>
    </div>
  );
}

export default Home;
