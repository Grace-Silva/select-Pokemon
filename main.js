// Declaración del Arreglo de contendrá los objetos pokemon:
const ArrayPokemons = [];

// Clase POKEMON:
class POKEMON {
  constructor(id, nombre, foto, tipo, nivel, ps) {
    this.id = id;
    this.nombre = nombre;
    this.foto = foto;
    this.tipo = tipo;
    this.nivel = nivel;
    this.ps = ps;
  }
}

// se crean los objetos pokemon:
let charmander = new POKEMON(
    1,
  "Charmander",
  "https://fbi.cults3d.com/uploaders/14388486/illustration-file/1d0c7d7e-ec38-4a6e-bf81-2ca8a3d35bb9/Charmander_2.png",
  "Fuego",
  "5",
  "50ps"
);
let bulbasur = new POKEMON(
  2, 
  "Bulbasur",
  "https://fbi.cults3d.com/uploaders/14388486/illustration-file/82a10630-f5c4-4f7f-8478-28ee09f08af8/Bulbasaur_0.jpg",
  "planta",
  "5",
  "45ps"
);
let squirtle = new POKEMON(
  3,
  "Squirtle",
  "https://fbi.cults3d.com/uploaders/18850278/illustration-file/405a5ad5-7bb5-4a4c-aec9-f8d4a5077e7d/squirtleB02.png",
  "agua",
  "5",
  "45ps"
);

ArrayPokemons.push(charmander, bulbasur, squirtle);

let card;
let pokeContainer = document.getElementById("pokeContainer");

ArrayPokemons.forEach((e) => {
  card = `
    <div class="item">

    <img src=${e.foto} alt="" class="pokemonImage">

    <span class="pokemonName" id="pokeName">${e.nombre}
    </span>

    <ul class="pokemonData">
        <li id=${e.id}>${e.tipo}</li>
        <li id="level">${e.nivel}</li>
        <li id="hp">${e.ps}</li>
    </ul>

</div>
    `;

    pokeContainer.innerHTML += card; 

});

let presionables;
presionables = document.querySelectorAll(".item");


/*presionables.forEach((i) => {
    i.addEventListener("mousedown", () => {
        
    });
});
*/
  
  presionables.forEach((elementoPresionable, indiceArray) => {
    elementoPresionable.addEventListener("click", (evento) =>{
      evento.stopPropagation();
      /*Al agregar evento.stopPropagation() en el evento de clic, se detiene la propagación del evento hacia arriba en la jerarquía del DOM, lo que debería evitar que el evento se ejecute varias veces.*/

      const seleccionMostrada = ArrayPokemons[indiceArray].nombre;

      alert("El Pokemon seleccionado fué: "+seleccionMostrada);

      console.log("El pokemon seleccionado es: "+seleccionMostrada);
      
      
      
    });
  });
  

