let formulario = document.querySelector("form");
let listarCita = document.getElementById("listarCita");
let buscar = document.getElementById("btnBuscar");
let busqueda = document.getElementById("busqueda");
let citas = [];
let id = 0;

const capturaDatos = () => {
  let nombre = document.getElementById("nombre").value;
  let fecha = document.getElementById("fecha").value;
  let hora = document.getElementById("hora").value;
  let sintomas = document.getElementById("sintomas").value;

  let registro = {
    id,
    nombre,
    fecha,
    hora,
    sintomas,
  };
  
  citas.push(registro);id++;
  localStorage.setItem("Citas", JSON.stringify(citas));
  getLocalStorage()
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  capturaDatos();
});

const getLocalStorage = () => {
  listarCita.innerHTML = "";
  let citasLocalStorage = JSON.parse(localStorage.getItem("Citas"));
  //console.log(citasLocalStorage);
  citasLocalStorage.map((cita) => {
    const { nombre, fecha, hora, sintomas } = cita;
    listarCita.innerHTML += `
                            <td>${nombre}</td>
                            <td>${fecha}</td>
                            <td>${hora}</td>
                            <td>${sintomas}</td>
        `;
  });
};

document.addEventListener("DOMContentLoaded", getLocalStorage);

buscar.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.getElementById("inputBuscar").value;
  let data = JSON.parse(localStorage.getItem("Citas"));
  let filtro = data.filter(
    (cita) => cita.nombre.toLowerCase() === input.toLowerCase()
  );
  busqueda.innerHTML = "";
  console.log(filtro);

  filtro.length === 0
    ? (busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe</div>`)
    : filtro.map((cita) => {
        const { nombre, fecha, hora, sintomas, id } = cita;
        busqueda.innerHTML += `<div id="${id}">
                                    <p style="color:white;">${nombre}</p>
                                    <p style="color:white;">${fecha}</p>
                                    <p style="color:white;">${hora}</p>
                                    <p style="color:white;">${sintomas}</p>
                                    <button class="btn-dark">Borrar</Button></div><br>             
                `;
      });
});

busqueda.addEventListener("click", (e) => {
    deletedtarget(e);
});

const deletedtarget = (e) => {
  //que contenga btn dark y devuelve true
  if (e.target.classList.contains("btn-dark")) {
    //captura todos los elementos de la target
    deleted(e.target.parentElement);
  }
};

const deleted = (object) => {
    let data = JSON.parse(localStorage.getItem('Citas'));
     
    let registro = [];
        registro = data;

        for(let i = 0; i < registro.length; i++){
            if(registro[i] !== registro[i].id){
                registro[i].id = i;
            }
        }
            registro.splice(object.id,1)
            localStorage.setItem('Citas',JSON.stringify(registro));  
            location.reload();    
};
