console.log("Carregando.");

document.onload = function(){
    console.log("Carregado");
    var form = document.getElementById("formulario");
    var serializado = form.serialize();
    console.log(serializado);
}

