import "./Pokedex.css"
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce"
const Pokedex = () => {

const[inputValue, setInputValue] = useState("");
const [pokemons, setPokemons] = useState({});
const[value] = useDebounce(inputValue, 700);
const [error, setError] = useState(false);

const searchPokemon = async () => {
  //trycach
  setError(false)
  try{
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
  const dataJSON = await data.json();
  setPokemons(dataJSON)
  setLoaded(true)
  } catch (error) {
    setError(true)
  }
  //hasta aqui
};

useEffect(() => {
  searchPokemon()
}, [value])

  return (
    <main className="pokedex">
      <img  className="fondopokedex" src="/images/CoverHome.webp"/>
      <div className="search">
        <img className="img" src="/logos/PokedexLogo.png"/>
        <input type="text" placeholder="Search name..." 
        value={inputValue}
        onInput={(ev) => setInputValue(ev.target.value)}/>
      </div>
     {!error ? (<p>lo sentimos, prueba otra busqueda</p>) : (
       <div className="pokemoncard">
        {inputValue == "" ? <p>¿Que Pokemon quieres buscar?</p> : 
        <>
        <img className="imgpokemon" src={pokemons.sprites?.other.home.front_default} alt={pokemons.name} />
        
       <h3 className="pokemonsname">{pokemons.name}</h3>
       <h3 className="weight">Weight: {pokemons.weight / 10} Kg</h3>
       <h3 className="order">Position: {pokemons.order}</h3>
       <h3 className="id">Id:{pokemons.id}</h3>
       </>}
   </div>
     )}
    </main>
  )
}

export default Pokedex;