var xhr = new XMLHttpRequest();
xhr.withCredentials = false;
let datos = ''
xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    //console.log(this.responseText);
    datos = JSON.parse(this.responseText)
    console.log(datos[0])
  }
});

xhr.open("GET", "http://localhost:5000/api/Data");

xhr.send();