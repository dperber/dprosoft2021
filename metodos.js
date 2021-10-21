var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function tratarDatos(result) {
    //console.log("Datos" + result);

    var datos = JSON.parse(result);


    //console.log(datos);

    var problemas = document.getElementById("problemas");

    for (var i = 0; i < datos.length; i++) {

        var elemento = document.createElement("div"); //en este div meteremos todo lo de respuesta

        elemento.setAttribute("id", "p" + datos[i].id);

        elemento.setAttribute("class", "col-md-4"); //tiene una clase con md4

        elemento.innerHTML = (datos[i].id + " " + datos[i].titulo + " " + datos[i].descripcion + " <br> " +
            "<button  type='button' class='btn btn-success inicio' problema=" + (i + 1) + ">Inicio</button>" +
            "<button  type='button' class='btn btn-danger fin' problema=" + (i + 1) + ">Fin</button>");


        problemas.appendChild(elemento);

    }

}

fetch("http://localhost:5000/api/Problemas", requestOptions)
    .then(response => response.text())
    .then(result => tratarDatos(result))
    .catch(error => console.log('error', error));