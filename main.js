const obtener = document.getElementById("a-aboutme");
const img = document.getElementById("img");

obtener.addEventListener("click", () => {
    Swal.fire({
        title: "Heading to the section...",
        icon: "success",
        timer: 1500,
        background: "#191919",
        customClass: {
            title: "titulo-alerta2"
        }

    })
    setTimeout(() => {
        location.href = "#aboutMe";
        console.log("Ubicacion realizada correctamente")
    }, 2000)
})

function volver () {
    Swal.fire({
        title: "Returning home...",
        icon: "success",
        timer: 1500,
        background: "#191919",
        customClass: {
            title: "titulo-alerta"
        }
    })
    setTimeout(() =>{
        location.href = "#home"
        console.log("Regresado correctamente")
    },2000)
}
// le pase una funcion para evitar hacerlo de forma manual
const obtener2 = document.getElementById("btn").addEventListener("click", volver)

const obtener3 = document.getElementById("servicios").addEventListener("click", () => {
    Swal.fire({
        title: "sending to services...",
        icon: "success",
        timer: 1500,
        background: "#191919",
        customClass: {
            title: "titulo-alerta"
        }
    })
    setTimeout(() =>{
        location.href = "#servicio"
        console.log("llegando correctamente")
    },2000)  
})

const obtener4 = document.getElementById("contacto");
obtener4.addEventListener("click", () => {
    Swal.fire({
        title: "directing to contacts...",
        icon: "success",
        timer: 1500,
        background: "#191919",
        customClass: {
            title: "titulo-alerta"
        }
    })
    setTimeout(() =>{
        location.href = "#contact"
        console.log("llegando correctamente")
    },2000) 
})

function contacto() { 
    location.href = "#contact"
}

const scroll = visuallyScrolling => {
    visuallyScrolling.forEach((viewImg) => {
        if(viewImg.isIntersecting) {
            viewImg.target.classList.add("view")
        }else {
            setTimeout(() => viewImg.target.classList.remove("view"),1500)
        }
    })
}

const observable = new IntersectionObserver(scroll, {
    root: null,
    rootMargin: '300px',
    threshold: 1.0
})

observable.observe(img)

//obtengo la ciudad donde vives 
const obtenerUbicacion = navigator.geolocation;
const posicion = (pos) => {console.log(pos)}
obtenerUbicacion.getCurrentPosition(posicion)

// image positioning