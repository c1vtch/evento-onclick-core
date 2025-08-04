let sessionBtn = document.querySelector(".session-btn")
let addDefinititon = document.querySelector(".add-definition")
let likeBtn = document.querySelectorAll(".like-btn")



//contador de likes dentro del html
let likeCounter = document.querySelectorAll(".like-counter")

// Para el boton de sesion
sessionBtn.addEventListener(("click"), () => {
    // Cambia el texto del boton de sesion
    if(sessionBtn.innerText == "Cerrar sesión"){
        sessionBtn.innerText = "Iniciar sesión"
    }else{
        sessionBtn.innerText = "Cerrar sesión"
    }
})

// Para el boton de agregar
addDefinititon.addEventListener("click", () =>{
    addDefinititon.remove() // remueve el boton de agregar
})

// Para los botones de me gusta
likeBtn.forEach((btn) => {
    let counter = 0;
    btn.addEventListener("click", () =>{
        // para el prompt
        let pet = btn.closest(".pet") 
        let title = pet.querySelector('h3').textContent

        // likes
        let likes = pet.querySelector(".like-counter")

        alert(`${title} was liked`)

        // se actualiza el like
        counter += 1;
        likes.innerText = counter
       
    })
})


// lo hice asi primero y funcionaba pero tendria que repetir el codigo para cada nuevo div 
/* let counter = 0;
likeBtn.addEventListener("click",() =>{
    counter += 1
    likeCounter.innerText = counter
    alert("title here was liked")
})

let counter2 = 0;
secondLikeBtn.addEventListener("click", () =>{
    counter2 += 1
    likeCounterTwo.innerText = counter2
    alert("title here was liked")
}) */