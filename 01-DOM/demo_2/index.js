

// let titulo = document.getElementById("title")

// let titulo = document.querySelector("#title")

// console.log(titulo)

let boton = document.querySelector("#btn")

boton.addEventListener("click", function (e) {

    console.log(e) 
    let input = document.querySelector("#input")

    if (input.value) {

        let lista = document.getElementById("lista")
        let nuevoElement = document.createElement("li")
        //
        nuevoElement.innerText = input.value

        lista.appendChild(nuevoElement)

        input.value = ""
    } else {
        alert("PONE UNA COMIDA CHEEEE")
    }
})