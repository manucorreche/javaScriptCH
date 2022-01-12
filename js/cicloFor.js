//--------------------------------------------------
//FOR EJEMPLO
for(let i=0;i<20; i++){
    console.log(i)
}


//--------------------------------------------------
//FOR TABLA DE MULTIPLICAR
let numeroMultiplicado = parseInt(prompt("ingrese numero a multiplicar"))

for(let i =0;i<10; i++){
    let multiplicacion = numeroMultiplicado*i
    console.log(numeroMultiplicado + " x " + i + " es igual a " + multiplicacion)
}


//--------------------------------------------------
//SENTENCIA BREAK

/*Interrumpe el ciclo cuando surge cierta condicion
Al escribir break el ciclo se interrumpe como si hubies terminado */

for (let i = 0; i < 10; i++){
    if (i == 6 ){
        break; //corta el ciclo en 6
    }
}
//--------------------------------------------------
//Sentencia CONTINUE

/* Sirve para que cuadno se cumple una conmdicion,
el ciclo saltee esa repeticion y siga con la proxima*/

for (let i = 0; i < 10; i++){
    if (i == 6 ){
        continue; //saltea el 6
    }
}
