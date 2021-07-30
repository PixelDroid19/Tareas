let getData = function(){//Funcion guardar las horas y calcular el pago
    const pago = 16000, extra=20000;//constante con el valor de pago y Extra
    let total=0, pagoExtra=0; //Variables: pago final y pago de horas extras 
    let Hours = document.getElementById("Hours").value;//Pedir valor del campo de Horas

    if(Hours == 40 || Hours < 40){//Condicional para calcular pagos
        for(let i = 0; i < Hours;i++){
            total += pago;
        }
        console.log("Pago: " + total);
        document.getElementById("Salary").value = (Hours * pago);
        document.getElementById("totalPay").value = total;
    }else{
        pagoExtra = Hours - 40;
        total = (pagoExtra * extra) + (40 * pago);
        document.getElementById("hoursExtra").value = (pagoExtra * extra);
        document.getElementById("Salary").value = (40 * pago);
        document.getElementById("totalPay").value = total;
    }
}