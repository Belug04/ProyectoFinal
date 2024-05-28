let edad= prompt("Para comprar en esta pagian necesita ser mayor de edad. Ingrese su edad: ");

function mayor(edad){
    if(edad >= 18){
        alert("Exitos en su compra.");
    }else{
        alert("No puede comprar en esta pagina pero puede seguir navegando.")
    }
}

mayor(edad);
