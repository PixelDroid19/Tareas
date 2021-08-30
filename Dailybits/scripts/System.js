let answer_Items = document.getElementById("answer_Items"),
  Life = document.getElementById("Life"),
  Comprobar = document.getElementById("comprobar"),
  boxNext = document.getElementById("Next"),
  buttomNext = document.getElementById("CheckNext"),
  boxTry = document.getElementById("Try"),
  buttomTry = document.getElementById("TryButton"),
  progressBar = document.getElementById("bar-item"),
  //Mostrar Prguntas
  Pregunta = document.getElementById("Text"),
  Resp1 = document.getElementById("preg1"),
  Resp2 = document.getElementById("preg2"),
  Resp3 = document.getElementById("preg3"),
  Resp4 = document.getElementById("preg4");

let VectorRandom = [],
  Cambio = 0,
  Posicion = 0,
  Progress = 0,
  CurrentLife = 5;
Correcta = "";

const ObtenerDatos = async () => {
  try {
    const res = await fetch("./Data/Data.json");
    const data = await res.json();

    const { Preg, Corr, resp1, resp2, resp3, resp4 } = data[Cambio];
    VectorRandom = [resp1, resp2, resp3, resp4];
    VectorRandom.sort(() => Math.random() - 0.5);

    Pregunta.textContent = Preg;
    Resp1.textContent = VectorRandom[0];
    Resp2.textContent = VectorRandom[1];
    Resp3.textContent = VectorRandom[2];
    Resp4.textContent = VectorRandom[3];
    Correcta = Corr;
  } catch (error) {
    console.log(error);
  }
};

//Seleccionar items
answer_Items.addEventListener("click", (e) => {
  capturaItems(e);
});

const capturaItems = (e) => {
  //item que contenga la clase 'selectItems' devuelve
  if (e.target.classList.contains("selectItems")) {
    //captura todos los elementos de la target
    setItem(e.target.parentElement);
  }
};

const setItem = (e) => {
  Posicion = e.getAttribute("data-id");
};

//Comprobar

Comprobar.addEventListener("click", function () {
  if (VectorRandom[Posicion] == Correcta) {
   Hidden();showNext();

    Cambio++;
    Progress += 20;
    progressBar.setAttribute("style", `width: ${Progress}%`);
    
    
  } else {
    if (CurrentLife > 0) {
      Life.textContent = CurrentLife--;
      showTry();
      Hidden();
    }
  }
});
//Boton para continuar
buttomNext.addEventListener("click", function () {
  if (Cambio <= VectorRandom.length) {
    ObtenerDatos();
      showNext();
    Hidden();
  }
});

//Boton de intentar de nuevo
buttomTry.addEventListener("click", function () {
  if (CurrentLife > 0) {
    TakeLife();
    Hidden();showTry();
  }
});
//Vidas
const TakeLife = () =>{
  Life.textContent = CurrentLife--;
}
const showNext = () => {
  boxNext.classList.toggle("Active");
};

const Hidden = () => {
  Comprobar.classList.toggle("Active");
};

const showTry = () => {
  boxTry.classList.toggle("Active");
};

ObtenerDatos();
