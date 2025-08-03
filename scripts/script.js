let sessionBtn = document.querySelector(".session-btn")
let addDefinititon = document.querySelector(".add-definition")
let likeBtn = document.querySelector(".like-btn")
let secondLikeBtn = document.querySelector(".second-like")

//contador de likes dentro del html
let likeCounter = document.querySelector(".like-counter")
let likeCounterTwo = document.querySelector(".like-counter-two")
// Para el boton de sesion
sessionBtn.addEventListener(("click"), () => {
    if(sessionBtn.innerText == "Cerrar sesión"){
        sessionBtn.innerText = "Iniciar sesión"
    }else{
        sessionBtn.innerText = "Cerrar sesión"
    }
})

// Para el boton de agregar
addDefinititon.addEventListener("click", () =>{
    addDefinititon.remove()
})

// Para los botones de me gusta
let counter = 0;
likeBtn.addEventListener("click",() =>{
    counter += 1
    likeCounter.innerText = counter
    alert("Gato Atigrado was liked")
})

let counter2 = 0;
secondLikeBtn.addEventListener("click", () =>{
    counter2 += 1
    likeCounterTwo.innerText = counter2
    alert("Golden Retriever was liked")
})