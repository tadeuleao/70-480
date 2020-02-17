var x = document.getElementById("demo");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(mostrarPosicao);
    }else {
        x.innerHTML = "Seu browser não suporta geolocalização";
    }
}

function mostrarPosicao(position){
    x.innerHTML = "Latitude: " +  position.coords.latitude + " <br />" + "Longitude: " + position.coords.longitude; 
    mostrarNoMapa(position);
}


function mostrarNoMapa(position){
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"";
    document.getElementById("mapa").innerHTML = "<img src='" + img  + "' />";
}

getLocation();