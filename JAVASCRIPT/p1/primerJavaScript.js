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

async function traePersona(){
    const respuesta = await fetch("https://randomuser.me/api/");
    const datos = await respuesta.json();
    // console.log(datos);
    console.log(datos.results[0].name.first+" "+datos.results[0].name.last);
}