const items = document.getElementById("items"),
  templateCard = document.getElementById("template-card").content,
  fragment = document.createDocumentFragment();
  
  

document.addEventListener("DOMContentLoaded", () => {
  GetPokemon();
});

const GetPokemon = async () => {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();

    //Recorre el json con map
    data.map((poke) => {
      const {id, name, image, Fecha} = poke;
      templateCard.querySelector("p").textContent = name;
      templateCard.querySelector("span").textContent = Fecha;
      templateCard.querySelector("img").setAttribute("src", image);
      templateCard.querySelector(".select").dataset.id = id;
      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    });
    // appendChild agrega un nodo al final de la lista
    items.appendChild(fragment);

  } catch (error) {
    console.log(error);
  }
};

items.addEventListener("click", (e) => {
  addLike(e);
});

const addLike = (e) => {
  //que contenga btn dark y devuelve true
  if (e.target.classList.contains("select")) {
    //captura todos los elementos de la target
    setLike(e.target.parentElement);
  }
};

const setLike = (object) => {
  console.log(objeto.querySelector('.select').dataset.id,);
};