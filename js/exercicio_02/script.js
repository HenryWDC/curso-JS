function trocar() {
    if(document.querySelector(".btn").classList.contains("preto")){
        document.querySelector(".btn").classList.remove("preto")
        document.querySelector(".btn").classList.add("laranja")
    }else{
        document.querySelector(".btn").classList.remove("laranja")
        document.querySelector(".btn").classList.add("preto")
    }
}