const gM = document.querySelector(".fotos_modal");
const iGM = document.querySelector(".fotos_modal img");

// function fecharGaleria(){
//    gM.style.visibility = "hidden"; 
//    iGM.style.transform = "scale(0)";
//  }

// function abrirGaleria(src){
//     gM.style.visibility = "visible";
//     iGM.style.transform = "scale(1)";
//     iGM.src = src;
//  }

function abrirGaleria(){
    var div = document.getElementById('fotos_abertas'); 
    div.style.display = 'block';
    var div = document.getElementById('teste');
    div.style.display = 'none';
    var div = document.getElementById('nav');
    div.style.display = 'none';
}

function fecharGaleria(){
    var div = document.getElementById('fotos_abertas'); 
    div.style.display = 'none';
    var div = document.getElementById('teste');
    div.style.display = 'flex';
    var div = document.getElementById('nav');
    div.style.display = 'flex';
}

document.getElementById("btn-reservar").addEventListener("click", function() {
    window.location.href = "login.html";
});


