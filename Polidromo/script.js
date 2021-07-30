/*
.split(''), lo separa en un array.
.reverse() revierte el arreglo.
.join('') Lo vuelve a convertir en string.
*/
  function polindromeChecker(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase()//eliminamos los espacion en linea
    const strReversed = newStr.split("").reverse().join("")/*Estoy dividiendo cada carácter, luego invirtiéndolo y luego uniendolos para obtener una string invertido*/
  
    if(strReversed === newStr){
        resul = "es palindromo";
     }else if(strReversed !== str){
         resul = "no es palindromo";
     }
     return resul;
  }

let button = document.getElementById("btn");

button.onclick = function(){
   let pal = document.getElementById("str").value;
   console.log(polindromeChecker(pal));
   document.getElementById("result").innerHTML = polindromeChecker(pal);
}