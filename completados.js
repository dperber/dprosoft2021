$(document).ready(() => {

    botonesIni = document.getElementsByClassName("inicio");
    botonesFin = document.getElementsByClassName("fin");

    console.log(botonesIni);
    console.log(botonesFin);

    //ESTADO PROBLEMAS AL CARGAR LA PAGINA
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log("problemas:\n" + this.responseText);
            var problemas = JSON.parse(this.responseText);


            for (let index = 0; index < problemas.length; index++) {

                var nombreProb = document.getElementById(`p${index+1}`);

                if (problemas[index].estado == 1) {
                    nombreProb.classList.remove("text-success", "text-danger");
                    nombreProb.classList.add("text-success");
                } else {
                    nombreProb.classList.remove("text-success", "text-danger");
                    nombreProb.classList.add("text-danger");
                }

            }
            //llamamos a función para asignar funcionalidad a los botones
            botones();
        }
    });

    xhr.open("GET", "http://localhost:5000/api/problemas");

    xhr.send();



    //FUNCION QUE ASIGNA AL EVENTO ONCLICK DE CADA BOTON LA PETICIÓN CORRESPONDIENTE Y EL CAMBIO DE COLOR
    function botones() {

        //console.log("p2:" + document.getElementById("p2"));

        //ASIGNAR EVENTOS ONCLICK A BOTONES
        Array.from(botonesIni).forEach(boton => {

            boton.onclick = (event) => {
                var id = parseInt(event.target.getAttribute("problema"));
                console.log(id);

                //cambiar estado a iniciado
                var data = JSON.stringify({
                    "id": id,
                    "estado": 1
                });

                var xhr = new XMLHttpRequest();
                xhr.withCredentials = false;

                xhr.addEventListener("readystatechange", function() {
                    if (this.readyState === 4) {
                        console.log(this.responseText);
                    }
                });

                xhr.open("PUT", "http://localhost:5000/api/problemas");
                xhr.setRequestHeader("Content-Type", "application/json");

                xhr.send(data);

                //cambiar color a verde
                var nombreProb = document.getElementById(`p${id}`);
                //console.log(nombreProb);
                nombreProb.classList.remove("text-success", "text-danger");
                nombreProb.classList.add("text-success");

            }

        });

        Array.from(botonesFin).forEach(boton => {
            boton.onclick = (event) => {
                var id = parseInt(event.target.getAttribute("problema"));
                console.log(id);

                //cambiar estado a terminado
                var data = JSON.stringify({
                    "id": id,
                    "estado": 0
                });


                var xhr = new XMLHttpRequest();
                xhr.withCredentials = false;

                xhr.addEventListener("readystatechange", function() {
                    if (this.readyState === 4) {
                        console.log(this.responseText);
                    }
                });

                xhr.open("PUT", "http://localhost:5000/api/problemas");
                xhr.setRequestHeader("Content-Type", "application/json");

                xhr.send(data);

                //cambiar color a rojo
                var nombreProb = document.getElementById(`p${id}`);
                //console.log(nombreProb);
                nombreProb.classList.remove("text-success", "text-danger");
                nombreProb.classList.add("text-danger");


            }

        });

    }




})