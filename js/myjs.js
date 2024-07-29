var botao = document.getElementById("mybutton");
var menu = document.getElementById("menu-aberto");
var img = document.querySelector("#img");

botao.addEventListener("click", function(){
    if(menu.style.display == "block"){
        menu.style.display = "none";
        img.setAttribute('src', 'https://cdn.icon-icons.com/icons2/1244/PNG/96/1492790916-19menu_84194.png');
    } else{
        menu.style.display = "block";
        img.setAttribute('src', 'https://cdn-icons-png.flaticon.com/128/88/88039.png');

    }
});

var botaoTexto = document.getElementById("botao");
var texto = document.getElementById("texto");
var imgTexto = document.querySelector("#image");

botaoTexto.addEventListener("click", function() {
  if (texto.style.display === "block") {
    texto.style.display = "none";
    botao.style.marginTop = "-30px";
    imgTexto.setAttribute('src', 'images/down.png')

  } else {
    texto.style.display = "block";
    botao.style.marginTop = "0";
    imgTexto.setAttribute('src', 'images/up.png')
  }
});


