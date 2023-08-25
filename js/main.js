const aceptarDatos = document.getElementById("guardarDatos")
let nombre = document.getElementById("nombre")
let notificaciones = document.getElementById("notificaciones")
let mail = document.getElementById("mail")

aceptarDatos.addEventListener("click", function(){
    localStorage.setItem("Nombre ingresado", nombre.value)
    localStorage.setItem("Notificaciones", notificaciones.value)
    localStorage.setItem("Mail ingresado", mail.value)
})

aceptarDatos.addEventListener("click", function(y){
    y.preventDefault()
    if(nombre.value.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No colocaste tu nombre, porfavor intenta de vuelta',
          })
    }
    else if(notificaciones.value.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Colocar si o no!!',
          })
    }
    else if(mail.value.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No colocaste tu mail, porfavor intenta de vuelta',
          })
    }
    else{
        Swal.fire({
            icon: 'success',
            title: 'Felicidades, llenaste los datos con éxito',
            text: 'Para continuar con la compra, toque el link debajo',
            footer: '<a href="../HTML/compra.html" target="_blank">INGRESÁ ACÁ PARA CONTINUAR</a>',
          })
    }
})