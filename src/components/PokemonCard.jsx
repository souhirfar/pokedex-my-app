import PropTypes from 'prop-types';


function PokemonCard(props) {
    const { pokemon } = props;
    console.log(props);


const isImg = pokemon.imgSrc ? (
    <img src={pokemon.imgSrc} alt={pokemon.name} />
  ) : (
    <p>???</p>
  );


    return (
      <figure>
        <img
          src={pokemon.imgSrc}
          alt={pokemon.name}
        />
   
      <figcaption>
        {pokemon.name}
      </figcaption>
      </figure>
  );

    }
    PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
          name: PropTypes.string.isRequired,
          imgSrc: PropTypes.string,
        }).isRequired,
      };
export default PokemonCard;





 
  
  
  
  
  