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
        alert("¡¡Listo " + IngresarMail + ", disfruta de nuestra página y todos sus beneficios!!")

        let MailSoporte = "SoporteTecnicoCARP@gmail.com"
        for (i = 1; i<8; i++){
            let MailsXdia = i
            console.log("Usted recibio " + MailsXdia + " Mail/s sobre notificaciones acerca de nuestras actualizaciones al siguiente mail : " + IngresarMail)
            
        }
        console.log("Usted a recibido la cantidad maxima de notificaciones por dia, para dejar de recibir notificaciones o recibir mas notificaciones, usted debe comunicarse con el siguiente mail : " + MailSoporte)

    }
   
    else if(NotificacionesExtra == "no"){
        Agradecimiento = alert("¡¡¡No pasa nada, disfruta nuestra página!!!")
        console.log ("No ingreso ningun mail, por lo tanto no recibira notificaciones Extra")
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