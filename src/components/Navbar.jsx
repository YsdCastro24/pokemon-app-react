import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-pokemon-red to-pokemon-yellow shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 py-4">
          <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl hover:animate-vibrate">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg" 
              alt="PokéApp"
              className="h-8 w-auto transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-white hover:text-pokemon-yellow transition-colors duration-300">Home</Link>
            <Link to="/favorites" className="text-white hover:text-pokemon-yellow transition-colors duration-300">Favoritos</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
