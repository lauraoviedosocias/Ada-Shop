const filtroBusqueda = document.querySelector("#filtro-busqueda")

const tarjetas = document.querySelectorAll(".tarjeta")

filtroBusqueda.oninput = () => {
    console.log("Hola")
    for (tarjeta of tarjetas) {
        if (tarjeta.dataset.nombre.includes(filtroBusqueda.value)) {
            console.log(nombre)
            tarjeta.classList.remove("hidden")
        }
        else {
            tarjeta.classList.add("hidden")
        }
    }
}