const CorreoV = document.getElementById('Correo');

const ObtenerUsuario = () => {
    let Datos = {
      Correo: CorreoV.value,
    };
  
    return Datos;
  };

//Login
const checkLogin = async () => {
    try {
      const res = await fetch("http://localhost:4000/usuarios/");
      const data = await res.json();
  
      const {Nombre, Correo } = ObtenerUsuario();
      //Recorre el json con map
      if(Correo == ''){
        alertify.error('Ingrese su correo. '); 
      }else{
      data.map((Datos) => {
        const { correo} = Datos;
        if (correo == Correo ) {
          //Cambiar esto
          localStorage.setItem('Usuario', JSON.stringify(Datos));
          redireccionar('./main.html')
        }
      });
  }
    } catch (error) {
      console.log("error");
    }
  };
  
  const Showdata = () =>{
    ShowEmail = document.getElementById('emailUser'),
    ShowName = document.getElementById('nameUser');
    ShowImage = document.getElementById('ImgUser');
  
    let usuario = JSON.parse(localStorage.getItem('Usuario'));
  
    ShowImage.setAttribute("src", usuario['ImageUrl']);
    ShowName.textContent = usuario['nombre'];
    ShowEmail.innerHTML = usuario['correo'];
  }