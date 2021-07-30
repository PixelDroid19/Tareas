/*Desarrollar una aplicación que permita llevar el control de las compras de un
almacén de computadores haciendo uso de los conceptos básicos e
integraciones de HTML, CSS y JavaScript.
Los clientes tienen derecho a recibir un descuento sobre el monto de la compra.
Si la compra es mayor o igual a $1.640.000 pero menor o igual a $3.280.000 el
descuento será de 15%. Si la compra es mayor a $3.280.000 y menor o igual a
$6.560.000 su descuento será de 25%. Si la compra es mayor a $6.560.000 y
menor o igual a 9.840.000 el descuento será de 35% y si la compra es mayor a
$9.840.000 no tendrá derecho a recibir un descuento.
El valor de un computador es de $820.000*/
const precio = 820000;

function descuento(){
    var cantidad =  document.getElementById("cantidad").value; 
    var descuento = 0, monto_total=0, monto=0;

    monto = cantidad * precio;

    if (monto >= 1640000 && monto <= 3280000){
        descuento = monto * 0.15;
        descuentos.innerHTML = "Descuento del 15%";
        monto_total = monto - descuento;   
    }else if (monto >= 3280000 && monto <= 6560000){
        descuento = monto * 0.25;
        descuentos.innerHTML = "Descuento del 25%";
        monto_total = monto - descuento;   
    }else if (monto >= 6560000 && monto <= 9840000){
        descuento = monto * 0.35;
        descuentos.innerHTML = "Descuento del 35%";
        monto_total = monto - descuento;   
    }else{
        descuentos.innerHTML = "Descuento no disponible para esta compra";
        monto_total = monto * cantidad;   
    }
    document.getElementById("Compra").value = precio * cantidad; 
    document.getElementById("descuento").value = descuento; 
    document.getElementById("Monto_Final").value = monto_total;
}