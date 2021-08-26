const modalC = document.getElementById("modal-product"),
      containerC = document.getElementById("active"), 
      nameProduct = document.getElementById('nameProduct'),
      marcaProduct = document.getElementById('marcaProduct'),
      precioProduct = document.getElementById('precioProduct'),
      infoProduct = document.getElementById('infoProduct'),
      ButtonProduct = document.getElementById('ProductCreater');

const modalCreater = () => {
        modalC.classList.toggle('active'); 
        containerC.classList.toggle('active'); 
    }


const registerProduct = async() => {
  let nameRegister = nameProduct.value,
      MarcaRegister = marcaProduct.value,
      precioRegister = precioProduct.value,
      infoRegister = infoProduct.value,
      imageUrl = 'http://placeimg.com/640/480/people';

      if (nameRegister !== "" && MarcaRegister !== "") {
          let resp = await fetch('http://localhost:4001/Productos/',{
              method: 'POST',
              body: JSON.stringify({
                name: nameRegister,
                precio: precioRegister,
                marca: MarcaRegister,
                image: imageUrl,
                info: infoRegister
              }),
              headers: {
                  "Content-Type": "application/json; charset=UTF-8"
              }
          }) 
      }else{
          alert("¡¡Llena todos los campos!!");
      }
  }

 
ButtonProduct.addEventListener('click', registerProduct);