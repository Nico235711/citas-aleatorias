import { citas } from "./citas.js"

const cita = document.querySelector('.cita')
const autor = document.querySelector('.autor')
const boton = document.querySelector("#cambiar-cita")

const indiceAletorio = cambiarCita()
cita.textContent = citas[indiceAletorio].texto  
autor.textContent = citas[indiceAletorio].autor

function cambiarCita() {
  return Math.floor(Math.random() * citas.length)
}

boton.addEventListener("click", () => {
  const indiceAletorio = cambiarCita()
  cita.textContent = citas[indiceAletorio].texto
  autor.textContent = citas[indiceAletorio].autor
})
