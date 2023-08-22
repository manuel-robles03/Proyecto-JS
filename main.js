function bienvenida(Saludo){
    let NombreIngresado = prompt("Ingresa tu nombre")
    if(NombreIngresado == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No colocaste tu nombre, porfavor intenta de vuelta',
          })
        bienvenida()
    }
    else{
        Swal.fire('Te damos la bienvenida ' + NombreIngresado)
    }
}
bienvenida()

function recibirNotificaciones(RecibirNoticias){
    let NotificacionesExtra = prompt("¿Querés recibir notificaciones? (poner si/no)")
    if(NotificacionesExtra == "si"){
        IngresarMail = prompt("Coloca tu mail para recibir cualquier tipo de notificación")
        Swal.fire("¡¡Listo " + IngresarMail + ", disfruta de nuestra página y todos sus beneficios!!")

        let MailSoporte = "SoporteTecnicoCARP@gmail.com"
        for (i = 1; i<8; i++){
            let MailsXdia = i
            console.log("Usted recibio " + MailsXdia + " Mail/s sobre notificaciones acerca de nuestras actualizaciones al siguiente mail : " + IngresarMail)
            }
        console.log("Usted a recibido la cantidad maxima de notificaciones por dia, para dejar de recibir notificaciones o recibir mas notificaciones, usted debe comunicarse con el siguiente mail : " + MailSoporte)

    }
   
    else if(NotificacionesExtra == "no"){
        Agradecimiento = Swal.fire("¡¡¡No pasa nada, disfruta nuestra página!!!")
        console.log ("No ingreso ningun mail, por lo tanto no recibira notificaciones Extra")
    }
    else if(NotificacionesExtra == "")
    {
        Swal.fire("Ingresar si o no!")
        recibirNotificaciones()
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Inválido',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        recibirNotificaciones()
    }
}
recibirNotificaciones()

class Camisetas{
    constructor(id, precio, stock, talle, modelo){
        this.id=id
        this.precio=precio
        this.stock=stock
        this.talle=talle
        this.modelo=modelo
    }
}

const camiseta1 = new Camisetas (32424, 30000, 600000, "xl", "titular")
const camiseta2 = new Camisetas (32425, 30000, 600000, "l", "titular")
const camiseta3 = new Camisetas (32426, 30000, 600000, "m", "titular")
const camiseta4 = new Camisetas (32427, 30000, 600000, "s", "titular")
const camiseta5 = new Camisetas (32428, 30000, 600000, "xl", "suplente")
const camiseta6 = new Camisetas (32429, 30000, 600000, "l", "suplente")
const camiseta7 = new Camisetas (32430, 30000, 600000, "m", "suplente")
const camiseta8 = new Camisetas (32431, 30000, 600000, "s", "suplente")

const indumentaria = [camiseta1, camiseta2, camiseta3, camiseta4, camiseta5, camiseta6, camiseta7,camiseta8]
datosJson = JSON.stringify(indumentaria)
console.log(datosJson)

console.log ("El precio de las camisetas es: " + camiseta1.precio)

const camisetasDeEntrenamiento = []

camisetasDeEntrenamiento.push (new Camisetas (21321, 25000, 30000, "xl", "entrenamiento"))
camisetasDeEntrenamiento.push (new Camisetas (21322, 25000, 30000, "l", "entrenamiento"))
camisetasDeEntrenamiento.push (new Camisetas (21323, 25000, 30000, "m", "entrenamiento"))
camisetasDeEntrenamiento.push (new Camisetas (21324, 25000, 30000, "s", "entrenamiento"))


let listaCamisetas = [camiseta1,camiseta2,camiseta3,camiseta4,camiseta5,camiseta6,camiseta7,camiseta8]

function FiltrarCamisetas(){
    let keyword = prompt ("Ingresa el modelo de camiseta que queres buscar")
    let filtrado = listaCamisetas.filter ((camiseta)=> camiseta.modelo.includes(keyword))

    if (filtrado.length > 0){
        console.table("Encontré las siguientes coincidencias: " ,filtrado)
    }else{
       Swal.fire("No se encuentran coincidencias")
    }
}
FiltrarCamisetas()

const almacenamientoDeDatos = document.getElementById("almacenarDatos")
let stock = document.getElementById("stock")
let talle = document.getElementById("talle")
let modelo = document.getElementById("modelo")

almacenamientoDeDatos.addEventListener("click", function(){
    localStorage.setItem("Stock demandado", stock.value)
    localStorage.setItem("Talle pedido", talle.value)
    localStorage.setItem("Modelo demandado", modelo.value)
})

const comprar = document.getElementById("confirmarCompra")
const detalles = document.querySelector(`.Alerta`)
comprar.addEventListener("click", () => {
    const confirmacion = document.createElement(`div`)
    confirmacion.classList.add("Alerta")
    confirmacion.innerHTML = 
    
    `<h2> Felicidades, has realizado una compra. DETALLES DE COMPRA: - Cantidad de camisetas compradas: ` + stock.value + ` - Talle : ` + talle.value + ` - Modelo : ` + modelo.value + ` </h2>`
    detalles.appendChild(confirmacion)
})