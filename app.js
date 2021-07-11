let botonPiedra=document.querySelector(".piedra");
let botonPapel=document.querySelector(".papel");
let botonTijera=document.querySelector(".tijera");
let manoUsuaria=document.querySelector(".mano-usuaria");
let manoCompu=document.querySelector(".mano-computadora");
let resultado=document.querySelector(".resultado");
let tablero = document.querySelector(".tablero");

let puntajeUsuaria=document.querySelector(".puntaje-usuaria p");
let puntajeComputadora=document.querySelector(".puntaje-computadora p");

let contadorPuntajeUsuario=0;
let contadorPuntajeComputadora=0;

let eleccionUsuaria="";
let eleccionComputadora="";

const eleccionCompu=()=>{
  let numeroAlAzar=Math.floor(Math.random()*3);
  if(numeroAlAzar==0){
    manoCompu.src="./assets/piedra_computadora.png";
    eleccionComputadora="piedra";
  }
   if(numeroAlAzar==1){
    manoCompu.src="./assets/papel_computadora.png";
    eleccionComputadora="papel";
  }
   if(numeroAlAzar==2){
    manoCompu.src="./assets/tijera_computadora.png";
    eleccionComputadora="tijera";
  }
}

const compararElecciones=()=>{
  if(eleccionUsuaria=="piedra"){
    if(eleccionComputadora=="piedra"){
      resultado.textContent="Empate!";
    }
    if(eleccionComputadora=="papel"){
            resultado.textContent="Perdi :(";
             contadorPuntajeComputadora++;
            puntajeComputadora.textContent=contadorPuntajeComputadora;

    }
    if(eleccionComputadora=="tijera"){
            resultado.textContent="Gane :)";
             contadorPuntajeUsuario++;
            puntajeUsuaria.textContent=contadorPuntajeUsuario;

    }
  }
    if(eleccionUsuaria=="papel"){
    if(eleccionComputadora=="papel"){
      resultado.textContent="Empate!";
    }
    if(eleccionComputadora=="tijera"){
            resultado.textContent="Perdi :(";
            contadorPuntajeComputadora++;
            puntajeComputadora.textContent=contadorPuntajeComputadora;

    }
    if(eleccionComputadora=="piedra"){
            resultado.textContent="Gane :)";
             contadorPuntajeUsuario++;
            puntajeUsuaria.textContent=contadorPuntajeUsuario;


    }
  }

    if(eleccionUsuaria=="tijera"){
    if(eleccionComputadora=="tijera"){
      resultado.textContent="Empate!";
    }
    if(eleccionComputadora=="piedra"){
            resultado.textContent="Perdi :(";
             contadorPuntajeComputadora++;
            puntajeComputadora.textContent=contadorPuntajeComputadora;

    }
    if(eleccionComputadora=="papel"){
            resultado.textContent="Gane :)";
             contadorPuntajeUsuario++;
            puntajeUsuaria.textContent=contadorPuntajeUsuario;

    }
  }
}

botonPiedra.onclick=()=>{
manoUsuaria.src = "./assets/piedra_ada.png";
  manoCompu.src = "./assets/piedra_computadora.png";
   resultado.innerHTML = "&#128521;";

  tablero.classList.add("jugando");

  setTimeout(() => {

  eleccionUsuaria="piedra";
manoUsuaria.src="./assets/piedra_ada.png";
eleccionCompu();
compararElecciones();

    tablero.classList.remove("jugando");
  }, 2000);
}


botonPapel.onclick=()=>{
  manoUsuaria.src = "./assets/piedra_ada.png";
  manoCompu.src = "./assets/piedra_computadora.png";
  resultado.innerHTML = "&#128521;";

  tablero.classList.add("jugando");

  setTimeout(() => {

  eleccionUsuaria="papel";
manoUsuaria.src="./assets/papel_ada.png";
eleccionCompu();
compararElecciones();
 tablero.classList.remove("jugando");
  }, 2000);
}
botonTijera.onclick=()=>{
  manoUsuaria.src = "./assets/piedra_ada.png";
  manoCompu.src = "./assets/piedra_computadora.png";
  resultado.innerHTML = "&#128521;";

  tablero.classList.add("jugando");

  setTimeout(() => {

  eleccionUsuaria="tijera";
manoUsuaria.src="./assets/tijera_ada.png";
eleccionCompu();
compararElecciones();
 tablero.classList.remove("jugando");
  }, 2000);
}
