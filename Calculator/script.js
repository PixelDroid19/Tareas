let screen = document.querySelector("#screen-result"); //Obtener valor del input screen

function getData(ref){
    let value = ref.value;
    screen.value += value;
}

function clean(){
    screen.value = ""; //Funcion para borrar la pantalla
}

function calculater(){
    try {
        screen.value = eval(screen.value);  //evalúa los string para realizar la expresion escrita 
    }catch(error){
        screen.value = "Error";
        setTimeout(() => {
            clean();
        },500);
    }
}