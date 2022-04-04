let button = document.getElementById("btn");

button.onclick = function () {
  let numero = document.getElementById("numeros").value;
  verification(numero);
};

const verification = (numero) => {
  document.getElementById("result").value = "";
  let unidades = 0,
    decenas = 0,
    centenas = 0,
    millar = 0;

  unidades = numero % 10;
  numero /= 10;
  decenas = Math.trunc(numero % 10);
  numero /= 10;
  centenas = Math.trunc(numero % 10);
  numero /= 10;
  millar = Math.trunc(numero % 10);
  numero /= 10;

  switch (millar) {
    case 1:
      document.getElementById("result").value += "M";
      break;
    case 2:
      document.getElementById("result").value += "MM";
      break;
    case 3:
      document.getElementById("result").value += "MMM";
      break;
  }

  switch (centenas) {
    case 1:
      document.getElementById("result").value += "C";
      break;
    case 2:
      document.getElementById("result").value += "CC";
      break;
    case 3:
      document.getElementById("result").value += "CCC";
      break;
    case 4:
      document.getElementById("result").value += "CD";
      break;
    case 5:
      document.getElementById("result").value += "D";
      break;
    case 6:
      document.getElementById("result").value += "DC";
      break;
    case 7:
      document.getElementById("result").value += "DCC";
      break;
    case 8:
      document.getElementById("result").value += "DCCC";
      break;
    case 9:
      document.getElementById("result").value += "CM";
      break;
  }

  switch (decenas) {
    case 1:
      document.getElementById("result").value += "X";
      break;
    case 2:
      document.getElementById("result").value += "XX";
      break;
    case 3:
      document.getElementById("result").value += "XXX";
      break;
    case 4:
      document.getElementById("result").value += "XL";
      break;
    case 5:
      document.getElementById("result").value += "L";
      break;
    case 6:
      document.getElementById("result").value += "LX";
      break;
    case 7:
      document.getElementById("result").value += "LXX";
      break;
    case 8:
      document.getElementById("result").value += "LXXX";
      break;
    case 9:
      document.getElementById("result").value += "XC";
      break;
  }

  switch (unidades) {
    case 1:
      document.getElementById("result").value += "I";
      break;
    case 2:
      document.getElementById("result").value += "II";
      break;
    case 3:
      document.getElementById("result").value += "III";
      break;
    case 4:
      document.getElementById("result").value += "IV";
      break;
    case 5:
      document.getElementById("result").value += "V";
      break;
    case 6:
      document.getElementById("result").value += "VI";
      break;
    case 7:
      document.getElementById("result").value += "VII";
      break;
    case 8:
      document.getElementById("result").value += "VIII";
      break;
    case 9:
      document.getElementById("result").value += "IX";
      break;
  }
}
