const items = document.getElementById("items"),
  templateCard = document.getElementById("template-card").content,
  fragment = document.createDocumentFragment(),
  makeoverlay = document.querySelector(".info-container");

document.addEventListener("DOMContentLoaded", () => {
  ObtenerDatos();
});

const ObtenerDatos = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    //Recorre el json con map
    data.map((Datos) => {
      const { id, title, image, description } = Datos;
      templateCard.querySelector("h3").textContent = title;
      templateCard.querySelector("p").textContent = description;
      templateCard.querySelector("img").setAttribute("src", image);
      templateCard.querySelector(".img").dataset.id = id;
      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    });
    // appendChild agrega un nodo al final de la lista
    items.appendChild(fragment);
  } catch (error) {
    console.log(error);
  }
};

const userRegister = async() => {
  let name = NameRegister.value,
  Password = PasswordRegister.value;
      if (name !== "" && Password !== "") {
          let resp = await fetch('http://localhost:4000/usuarios/',{
              method: 'POST',
              body: JSON.stringify({
                  name: name,
                  Clave: Password
              }),
              headers: {
                  "Content-Type": "application/json; charset=UTF-8"
              }
          }) 
      }else{
          alert("¡¡Llena todos los campos!!");
      }
  }