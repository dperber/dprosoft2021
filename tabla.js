$(document).ready(() => {
    obtenerDatos();

    var contenido = document.querySelector('#contenido')

    //ENVIAR FORM
    document.getElementById("enviar").onclick = (event) => {

        var dni = document.form1.dni.value;
        var nombre = document.form1.nombre.value;
        var problema = document.form1.problema.value;

        if ((!dni.length == 0) && (!nombre.length == 0) && (!problema.length == 0)) {
            event.preventDefault();
            //var dni = document.form1.dni.value;
            console.log(dni);
            console.log(nombre);
            console.log(parseInt(problema));

            var raw = JSON.stringify({
                "DNI": dni,
                "nombre": nombre,
                "problema": parseInt(problema),
                "estado": 1
            });

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:5000/api/Estudiante", requestOptions)
                .then(response => response.text())
                .then(result => obtenerDatos())
                .catch(error => console.log('error', error));
        }


    }

    function obtenerDatos() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/Estudiante", requestOptions)
            .then(response => response.json())
            .then(result => {
                table(result)
            })
            .catch(error => console.log('error', error));
    }

    function table(result) {

        contenido.innerHTML = ''
        for (let valor of result) {
            contenido.innerHTML += `
                    
                   <tr class=${(valor.estado == 1)?"text-success":"text-danger"}>
                       <th scope="row" name="tdni">${valor.dni}</th>
                       <td name="tnombre">${valor.nombre}</td>
                       <td name="tproblema">${valor.problema}</td>
                       <td>${(valor.estado == 1)?"asignado":"abandonado"}</td>
                       <td><button type="button" name="boton" class="btn btn-danger abandono">Abandono</button></td>
                     </tr>
                    `
        }

        eventoAbandonar();

    }

    function eventoAbandonar() {
        var botonesAbandon = document.getElementsByClassName("abandono")

        Array.from(botonesAbandon).forEach(boton => {
            boton.onclick = (event) => {
                console.log("abandono");
                //obtenemos el th (la fila)
                var fila = event.target.parentElement.parentElement

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    "dni": fila.children.tdni.innerText,
                    "estado": 0
                });

                console.log(raw);

                var requestOptions = {
                    method: 'PUT',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:5000/api/estudiante", requestOptions)
                    .then(response => response.text())
                    .then(result => obtenerDatos())
                    .catch(error => console.log('error', error));
            }



        });
    }
});