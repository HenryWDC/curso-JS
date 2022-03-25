function verde(){
    document.querySelector(".color-box").classList.remove('marron')
    document.querySelector(".color-box").classList.remove('laranja')
    document.querySelector(".color-box").classList.add('verde')
}
function marron(){
    document.querySelector(".color-box").classList.remove('verde')
    document.querySelector(".color-box").classList.remove('laranja')
    document.querySelector(".color-box").classList.add('marron')
}
function laranja(){
    document.querySelector(".color-box").classList.remove('marron')
    document.querySelector(".color-box").classList.remove('verde')
    document.querySelector(".color-box").classList.add('laranja')
}
function reset(){
    document.querySelector(".color-box").classList.remove('marron')
    document.querySelector(".color-box").classList.remove('laranja')
    document.querySelector(".color-box").classList.remove('verde')
}