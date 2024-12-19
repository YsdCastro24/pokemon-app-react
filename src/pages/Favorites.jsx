import { useFavorites } from '../hooks/useFavorites';
import { Link } from 'react-router-dom';

function Favoritos() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div>
      <Link to={`/pokemon/${favorites[0]?.id}`} className="text-pokemon-blue hover:underline mb-4 inline-block">
        &larr; Volver a Detalles
      </Link>
      <h1 className="text-3xl font-bold mb-6">Pokémon Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Aún no has agregado ningún Pokémon a tus favoritos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((pokemon) => (
            <div key={pokemon.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/pokemon/${pokemon.id}`}>
                <img src={pokemon.image} alt={pokemon.name} className="w-full h-48 object-cover" />
              </Link>
              <div className="p-4">
                <h2 className="text-xl font-semibold capitalize mb-2">{pokemon.name}</h2>
                <button
                  onClick={() => toggleFavorite(pokemon)} // Eliminar de favoritos
                  className="px-4 py-2 rounded bg-red-500 text-white mt-2 hover:animate-vibrate"
                >
                  Eliminar de Favoritos
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
