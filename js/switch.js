let nombre = prompt("pone el nombre de jugador para que te diga el apellido")

switch (nombre.toUpperCase()){

    case "ROMAN":
        alert(" EL Apellido es Riquelme");
    break;

    case "SEBASTIAN":
        alert( "El Apellido es Veron");
    break;

    default:
        alert("Nombre incorrecto");
    break;
            
}