function abrirModal(){
    let modal = document.getElementById("modal")
    modal.style.display = "block"

    let escuro = document.getElementById("escuro")
    escuro.style.display = "block"

    window.scrollbars = 0
}

function fecharModal(){
    let modal = document.getElementById("modal")
    modal.style.display = "none"

    let escuro = document.getElementById("escuro")
    escuro.style.display = "none"
}