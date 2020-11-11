const grillaHTML = document.querySelector("#grilla");
const nuevoJuego = document.querySelector("#nuevo");
const buscarMatches = document.querySelector("#buscar-match")

// ELEMENTOS 
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

// MODAL - NUEVO JUEGO - ESCOGER DIFICULTAD
const modalInicio = document.querySelector('.modal-inicio')
const overlayInicio = document.querySelector('.overlay')

const btnFacil = document.getElementById('facil')
const btnNormal = document.getElementById('normal')
const btnDificil = document.getElementById('dificil')

btnFacil.onclick = () => {
    modalInicio.classList.add('hidden')
    overlayInicio.classList.add('hidden')
    crearGrilla(8)
}

btnNormal.onclick = () => {
    modalInicio.classList.add('hidden')
    overlayInicio.classList.add('hidden')
    crearGrilla(10)
}

btnDificil.onclick = () => {
    modalInicio.classList.add('hidden')
    overlayInicio.classList.add('hidden')
    crearGrilla(6)
}

nuevoJuego.onclick = () => {
    overlayInicio.classList.remove('hidden')
    modalInicio.classList.remove('hidden')
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
