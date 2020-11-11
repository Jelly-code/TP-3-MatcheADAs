const grillaHTML = document.querySelector("#grilla");
const nuevoJuego = document.querySelector("#nuevo");
const reiniciarJuego = document.querySelector("#reiniciar");
const buscarMatches = document.querySelector("#buscar-match")

const frutas =  ['🍉', '🥥', '🍋', '🥝', '🍒', '🍑']
let dificultad = ''
let grilla = []

// GRILLA 

const obtenerFrutaAlAzar = (frutas) => {
  return frutas[Math.floor(Math.random() * frutas.length)]
}

const generarGrilla = (tamaño) => {
  grilla = []
  for (let i = 0; i < tamaño; i++) {
    grilla[i] = []
    for (let j = 0; j < tamaño; j++) {
      grilla[i][j] = obtenerFrutaAlAzar(frutas)
    }
  }
  return grilla
}


const crearGrilla = (ancho) => {
  const anchoDeGrilla = 50 * ancho
  grillaHTML.style.width = `${anchoDeGrilla}px`

  const listaDeFrutas = generarGrilla(ancho)
  grillaHTML.innerHTML = ''
  for (let i = 0; i < listaDeFrutas.length; i++) {
    for (let j = 0; j < listaDeFrutas[i].length; j++) {
      grillaHTML.innerHTML += `<div data-x="${i}" data-y="${j}">${listaDeFrutas[i][j]}</div>`
    }
  }
}

const comenzarJuego = dificultad => {
  if (dificultad === "facil") {
    crearGrilla(10)
  }
  else if (dificultad === "normal") {
    crearGrilla(8)
  }
  else if (dificultad === "dificil") {
    crearGrilla(6)
  }
  else {
    alert("No ingresaste una opcion valida :(")
  }
}

const pedirDificultad = () => {
  const pedirDificultad = prompt("Escoge una dificultad: facil, normal, dificil")
  dificultad = pedirDificultad
  comenzarJuego(dificultad)
}

reiniciarJuego.onclick = () => {
    comenzarJuego(dificultad)
}

nuevoJuego.onclick = () => {
    pedirDificultad()
}

buscarMatches.onclick = () => {
    let matches = [];

    for (let i = 0; i < grilla.length; i++) {
        for (let j = 0; j < grilla[i].length; j++) {

            if (grilla[i][j] === grilla[i][j + 1] && grilla[i][j + 1] === grilla[i][ j + 2]) {
                matches.push(grilla[i][j], grilla[i][j + 1], grilla[i][j + 2])
            }
        }
    
    }
  console.log(matches)
}

alert("Bienvenidx!")
pedirDificultad()