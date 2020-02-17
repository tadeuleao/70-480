function setarLocal(){
    console.log("Adicionando local storage");
    localStorage.setItem("Nome" , "Tadeu Leão");
}

function setarSessao(){
    console.log("Adicionando session storage");
    sessionStorage.setItem("Nome" , "Yuri Leão");
}

function Validar() {  

        
        if(localStorage.length > 0){
            document.getElementById("localSpan").innerText = localStorage.getItem("Nome");
        } else {
            setarLocal();
        }

        if(sessionStorage.length > 0 ){
            document.getElementById("sessionSpan").innerText = localStorage.getItem("Nome");
        } else {
            setarSessao();
        }

}


Validar();