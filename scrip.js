let edad= prompt("Para comprar en esta pagian necesita ser mayor de edad. Ingrese su edad: ");

function mayor(edad){
    if(edad >= 18){
        alert("Exitos en su compra.");
    }else{
        alert("Puede comprar con la supervisión de un adulto. Puede seguir navegando.")
    }
}

mayor(edad);
