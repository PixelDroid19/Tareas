const NameR = document.getElementById("NameR"),
  CorreoR = document.getElementById("CorreoR"),
  PasswordR = document.getElementById("PasswordR"),
  BtnCreateAccount = document.getElementById("CreateAccount");

//Datos Personales
let Usuario = "";
imgUrl = "https://picsum.photos/200/300";

const UserName = "",
  UsersEmail = "";

const ObtenerRegistro = () => {
  let Datos = {
    Nombre: NameR.value,
    Clave: PasswordR.value,
    Correo: CorreoR.value,
  };

  return Datos;
};

const CrearUsuario = async () => {
  const { Nombre, Clave, Correo } = ObtenerRegistro();

  if (Nombre !== "" && Clave !== "" && Correo != "") {
    let resp = await fetch("http://localhost:4000/usuarios/", {
      method: "POST",
      body: JSON.stringify({
        ImageUrl: imgUrl,
        nombre: Nombre,
        correo: Correo,
        clave: Clave,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    let notification = alertify.notify('Se ha creado la cuenta', 'success', 5, function(){  console.log('dismissed'); });
    
  } else {
    alertify.error('¡¡Llena todos los campos!!');
  }
};
