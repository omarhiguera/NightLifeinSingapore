
$(document).ready(() => {
    $(".btn-tlf").click(() =>{
        $(".jquery-btn").toggle()
    })
})

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt(".titulo", {
     strings: [],
     cursor: false
    }).go();
  });

//LOADER

window.addEventListener("load", evento => {
setTimeout(() => {
    let loader = document.getElementById("loader")
     loader.style.display = "none"
}, 4000); 
})

//BTN TLF DISPLAY DESDE JAVASCRIPT PORQUE TIENE ABSOLUTE
let mediaQuery = window.matchMedia("(max-width: 450px)")

if (mediaQuery.matches){
    setTimeout(() => {
        let btn = document.querySelector(".btn-tlf")
        btn.style.display = "flex"
    }, 4500);
} else {
    let btn = document.querySelector(".btn-tlf")
    btn.style.display = "none"
}
