class Camisetas {
    constructor(id, precio, stock, talle, modelo) {
      this.id = id;
      this.precio = precio;
      this.stock = stock;
      this.talle = talle;
      this.modelo = modelo;
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


const almacenamientoDeDatos = document.getElementById("almacenarDatos");
let stock = document.getElementById("stock");
let talle = document.getElementById("talle");
let modelo = document.getElementById("modelo");

almacenamientoDeDatos.addEventListener("click", function () {
  localStorage.setItem("Stock demandado", stock.value);
  localStorage.setItem("Talle pedido", talle.value);
  localStorage.setItem("Modelo demandado", modelo.value);
});

const comprar = document.getElementById("confirmarCompra");
const detalles = document.querySelector(".Alerta");
comprar.addEventListener("click", () => {
  const confirmacion = document.createElement(`div`);
  confirmacion.classList.add("Alerta");
  confirmacion.innerHTML = Swal.fire({
    icon: 'success',
    title: '¡Felicidades, has realizado una compra!',
    footer: '<a href="https://www.cariverplate.com.ar/index.php" target="_blank">INGRESA A ESTE ENLACE EN CASO DE DUDAS</a>',
  });

  `<h2> ¡Felicidades, has realizado una compra! DETALLES DE COMPRA: - Cantidad de camisetas compradas: ` + stock.value + ` - Talle: ` + talle.value + ` - Modelo: ` + modelo.value + ` </h2>`;
  detalles.appendChild(confirmacion);
});

fetch("camisetas.json")
  .then((resp) => {
    if (!resp.ok) {
      throw new Error("La respuesta de la red no fue exitosa");
    }
    return resp.json();
  })
  .then((data) => {
    const camisetas = data; 
    const productocamisetas = document.getElementById("stockJson");

    camisetas.forEach((x) => {
      const camisetasjson = document.createElement('p');
      camisetasjson.textContent = `Modelo de la camiseta:` + x.modelo + `. ID de la camiseta: ` + x.id + `. Talle: ` + x.talle;
      productocamisetas.appendChild(camisetasjson);
    });
  })
  .catch((error) => {
    console.error("Error al obtener datos:", error);
    Swal.fire("Ocurrió un fallo en el sistema");
  });