debugger
function bienvenida(Saludo){
    let NombreIngresado = prompt("Ingresa tu nombre")
    if(NombreIngresado == ""){
        alert("Ingresar nombre")
        bienvenida()
    }
    else{
        alert("Te damos la bienvenida " + NombreIngresado)
    }
}
bienvenida()
debugger
function recibirNotificaciones(RecibirNoticias){
    let NotificacionesExtra = prompt("¿Querés recibir notificaciones? (poner si/no)")
    if(NotificacionesExtra == "si"){
        IngresarMail = prompt("Coloca tu mail para recibir cualquier tipo de notificación")
        alert("¡¡Listo " + NombreIngresado + ", disfruta de nuestra página y todos sus beneficios!!")
    }
    else if(NotificacionesExtra == "no"){
        Agradecimiento = alert("¡¡¡No pasa nada, disfruta nuestra página!!!")
    }
    else if(NotificacionesExtra == "")
    {
        alert("Ingresar si o no!")
        recibirNotificaciones()
    }
    else{
        alert("Inválido")
        recibirNotificaciones()
    }
}
recibirNotificaciones()
console.log("Le estaremos enviando información extra sobre nosotros a este mail: " + IngresarMail)