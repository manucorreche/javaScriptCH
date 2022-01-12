let entradaNumero = parseInt(prompt("Ingrese un numero entre 50 y 100"));
if ((entradaNumero != "") && ((entradaNumero >= 50) && (entradaNumero <= 100))) {
    alert("FELICITACIONES! El numero elegido esta en el rango solicitado y es " + entradaNumero);
} else {
    alert("ERROR! El numero elegido no esta entre el rango solicitado");
}
