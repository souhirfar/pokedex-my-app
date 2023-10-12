

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
export default PokemonCard;





 
  
  
  
  
  