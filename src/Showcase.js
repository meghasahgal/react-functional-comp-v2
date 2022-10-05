import bulbasaur from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "VineWhip",
  };
  return (
    <div>
      <h1> {favPokemon}'s Showcase Component </h1>
      {/* assign image variable to the image imported above */}
      <img src={bulbasaur} alt={favPokemon}></img>
      <h2>
        Bulbasaur's type is{" "}
        <span
          className="word1"
          // style={{ backgroundColor: "green", color: "white" }}
        >
          {pokeCharacteristics.type}{" "}
        </span>
        and move is{" "}
        <span
          className="word2"
          // style={{ backgroundColor: "white", color: "green" }}
        >
          {pokeCharacteristics.move}{" "}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
