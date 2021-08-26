const modal = document.getElementById("modal-id"),
containerActive = document.getElementById("active"),
modaltitle = document.getElementById("modal-title")
modalImg = document.getElementById("modal-img"),
Description = document.getElementById("item-description"),
btnEliminar = document.getElementById('Clean');

let ID = 0;

const btnClean = document.getElementById("Clean");

const modalActive = () => {
   modal.classList.toggle('active'); 
   containerActive.classList.toggle('active'); 
}

//Agregar items
items.addEventListener("click", (e) => {
   addItems(e);
 });
 
 const addItems = (e) => {
   //que contenga btn dark y devuelve true
   if (e.target.classList.contains("makeover")) {
     //captura todos los elementos de la target
     setItem(e.target.parentElement);
   }
 };
 
 const setItem = (object) => {
   const ObtenerDatos = async () => {
     try {
       const res = await fetch("https://fakestoreapi.com/products");
       const data = await res.json();
 
       //Recorre el json con map
       data.map((Datos) => {
         if (object.getAttribute("data-id") == Datos.id) {
           const { id, title, image, description } = Datos;
           modaltitle.textContent = title;
           modalImg.setAttribute("src",image);
           Description.textContent = description;
           ID = object.getAttribute("data-id");
           console.log(ID);
         }
       });
       // appendChild agrega un nodo al final de la lista
       items.appendChild(fragment);
     } catch (error) {
       console.log(error);
     }
   };
 
   return ObtenerDatos();
 };

 
const CleanItems = async() =>{
  let resp = await fetch(`http://localhost:4001/Productos/${ID}`,{
      method: 'DELETE'
  })
}
 
btnEliminar.addEventListener('click',CleanItems);