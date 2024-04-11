import { reservas, Caso1,  } from './data'


const caso1 = new Caso1(reservas)
console.log("Subtotal: ", caso1.calculaSubtotal())
console.log("Total: ",caso1.calculaTotal())

