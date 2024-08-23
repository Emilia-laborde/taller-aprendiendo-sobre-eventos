document.addEventListener('DOMContentLoaded', () => {
    
    const botonSaluda = document.getElementById("btn");
    botonSaluda.addEventListener("click", () => {
        alert("Hola");
    });

    const botonDiv = document.querySelector(".botonDiv");
        botonDiv.addEventListener("click", () =>{
            alert ("Hola! Soy el div")

        })
    })
