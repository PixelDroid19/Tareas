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
      const { id, name, image, href} = poke;
      templateCard.querySelector("img").setAttribute("src", image);
      templateCard.querySelector("a").setAttribute("href", href);
      templateCard.querySelector("p").textContent = name;
     
 
      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    });
    // appendChild agrega un nodo al final de la lista
    items.appendChild(fragment);

  } catch (error) {
    console.log(error);
  }
};

