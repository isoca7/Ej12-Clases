import { reservas, Caso1, Caso2 } from './data'


const caso1 = new Caso1(reservas)
console.log("Caso 1 Subtotal: ", caso1.calculaSubtotal())
console.log("Caso 1 Total: ",caso1.calculaTotal())

const caso2 = new Caso2(reservas)
console.log("Caso 2 Subtotal: ", caso2.calculaSubtotal())
console.log("Descuento: ", caso2.calculoDescuento())
console.log("Caso 2 Total: ",caso2.calculaTotal())