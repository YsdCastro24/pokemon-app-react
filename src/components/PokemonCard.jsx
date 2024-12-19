import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <Link to={`/pokemon/${pokemon.id}`}>
        <img src={pokemon.image} alt={pokemon.name} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold capitalize mb-2 transition-colors duration-300 hover:text-pokemon-blue">
          {pokemon.name}
        </h2>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
