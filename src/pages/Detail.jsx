import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useFavorites } from "../hooks/useFavorites";

function Detalle() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const [pokemonResponse, speciesResponse] = await Promise.all([
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
          axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
        ]);

        const pokemonData = pokemonResponse.data;
        const speciesData = speciesResponse.data;

        const weaknesses = await getWeaknesses(pokemonData.types);

        setPokemon({
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.other["official-artwork"].front_default,
          height: pokemonData.height / 10,
          weight: pokemonData.weight / 10,
          types: pokemonData.types.map((type) => type.type.name),
          abilities: pokemonData.abilities.map((ability) => ability.ability.name),
          weaknesses: weaknesses,
          gender_rate: speciesData.gender_rate,
          category: speciesData.genera.find((g) => g.language.name === "es").genus,
          description: speciesData.flavor_text_entries
            .find((f) => f.language.name === "es")
            .flavor_text.replace(/\f/g, " "),
        });
      } catch (error) {
        console.error("Error al obtener datos del Pokémon:", error);
        setError("No se pudo cargar la información del Pokémon. Inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  const getWeaknesses = async (types) => {
    const weaknesses = new Set();
    for (const type of types) {
      const response = await axios.get(type.type.url);
      response.data.damage_relations.double_damage_from.forEach((weakness) => {
        weaknesses.add(weakness.name);
      });
    }
    return Array.from(weaknesses);
  };

  const getGenderRatio = (rate) => {
    if (rate === -1) return "Sin género";
    const femalePercentage = (rate / 8) * 100;
    return `${femalePercentage}% Hembra, ${100 - femalePercentage}% Macho`;
  };

  if (loading) return <div className="text-center mt-8">Cargando...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!pokemon) return <div className="text-center mt-8">No hay información disponible sobre este Pokémon.</div>;

  const isFavorite = favorites.some((fav) => fav.id === pokemon.id);

  return (
    <div className="bg-gray-100 p-4 flex justify-center fade-in">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl">
      <Link to="/" className="text-pokemon-blue hover:underline mb-4 inline-block">
        &larr; Volver al Inicio
      </Link>
      <div className="text-center">
        <img src={pokemon.image} alt={pokemon.name} className="w-40 h-40 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
        <h1 className="text-2xl font-bold capitalize mb-4 transition-colors duration-300 hover:text-pokemon-blue">{pokemon.name}</h1>
        <p className="text-gray-600 italic">{pokemon.description}</p>
      </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Detalles</h2>
            <p><span className="font-semibold">Altura:</span> {pokemon.height} m</p>
            <p><span className="font-semibold">Peso:</span> {pokemon.weight} kg</p>
            <p><span className="font-semibold">Categoría:</span> {pokemon.category}</p>
            <p><span className="font-semibold">Género:</span> {getGenderRatio(pokemon.gender_rate)}</p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Tipo</h2>
            <div className="flex flex-wrap gap-2">
              {pokemon.types.map((type) => (
                <span
                  key={type}
                  className="px-3 py-1 bg-green-300 text-green-800 rounded-full text-sm capitalize"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Habilidades</h2>
            <ul className="list-disc list-inside">
              {pokemon.abilities.map((ability) => (
                <li key={ability} className="capitalize">{ability}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Debilidades</h2>
            <div className="flex flex-wrap gap-2">
              {pokemon.weaknesses.map((weakness) => (
                <span
                  key={weakness}
                  className="px-3 py-1 bg-red-300 text-red-800 rounded-full text-sm capitalize"
                >
                  {weakness}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => toggleFavorite(pokemon)}
          className={`mt-6 w-full px-6 py-3 rounded ${
            isFavorite ? "bg-yellow-400 text-gray-800" : "bg-blue-500 text-white"
          } hover:opacity-90 transition-opacity hover:animate-vibrate`}
        >
          {isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
        </button>


      </div>
    </div>
  );
}

export default Detalle;
