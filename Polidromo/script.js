/*
.split(''), lo separa en un array.
.reverse() revierte el arreglo.
.join('') Lo vuelve a convertir en string.
*/
const btnCheck = document.getElementById("btnCheck"),
      stringInput = document.getElementById("str"),
      result = document.getElementById("result");

const polindromeChecker = (str) => {
  const newStr = str.replace(/[\W_]/g, "").toLowerCase(); //eliminamos los espacion en linea
  const strReversed = newStr
    .split("")
    .reverse()
    .join(
      ""
    ); /*Estoy dividiendo cada carácter, luego invirtiéndolo y luego uniendolos para obtener una string invertido*/

  if (newStr.length <= 2) {
    resul = "Ingrese una palabra";
  } else if (strReversed === newStr) {
    resul = "Es palíndromo";
  } else if (strReversed !== str) {
    resul = "No es palíndromo";
  }

  return resul;
};

btnCheck.addEventListener("click", () => {
  let Value = stringInput.value;
  result.innerHTML = polindromeChecker(Value);
});
