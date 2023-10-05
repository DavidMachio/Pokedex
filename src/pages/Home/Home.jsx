import { useState, useEffect } from "react";
import "./Home.css"

const Home = () => {

  const[pokemonRandom, setPokemonRandom] = useState({})
  const[loaded, setLoaded] = useState(false)

  const getPokemonRandom = async () =>{
    setLoaded(false);
    const random = Math.floor(Math.random(1) *100)
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${random}`
    );
    const dataJSON = await data.json();
    setPokemonRandom(dataJSON);
    setLoaded(true)
  }
  useEffect(() => {
    getPokemonRandom()
  }, []);

  return (
    
    <main className="home">
      {!loaded ? (<p>Loading</p>) 
      : <section className="section">
      
      <div className="fondo">
        <img  className="fotofondo" src={pokemonRandom.sprites.other.home.front_default}/>
      </div>
      <h1 className="name">{pokemonRandom.name}</h1>
      <span className="pokemondate">
      <img src={pokemonRandom.sprites.other.home.front_default} className="pokemon"/>
      <div className="passpokemon"> 
      <button className="buttonpass less">◀︎</button>

       <div>{pokemonRandom.types.map((type) => <h2 key={type.type.name} className="type">{type.type.name}</h2>)}</div>
       <button className="buttonpass more">▶︎</button> 
      </div>
      </span>
      </section>
      }
    </main>
  )
}

export default Home;