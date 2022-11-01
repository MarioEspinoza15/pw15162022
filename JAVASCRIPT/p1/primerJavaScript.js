//alert("Priemer JavaScript")

function funcionAlerta(){
    alert("Di clic");
}

function quitarSITEC()  {
    let Pregunta = confirm("Seguro de quitar SITEC");
    if(Pregunta){
        alert("SITEC borrado...:(")
        let chi = document.getElementById("sitec");
        chi.innerHTML = "Chalee";
    }
}