import { reservas, Caso1, Caso2 } from './data'



for (let i = 0; i < reservas.length; i++) {
  const reservaCaso1 = new Caso1(
    reservas[i].tipoHabitacion,
    reservas[i].desayuno,
    reservas[i].pax,
    reservas[i].noches
  )
  console.log(
    `Caso 1: Total de la reserva numero ${i + 1}:`,
    reservaCaso1.total(),
    'Subtotal:',
    reservaCaso1.subtotal()
  )
  const reservaCaso2 = new Caso2(
    reservas[i].tipoHabitacion,
    reservas[i].desayuno,
    reservas[i].pax,
    reservas[i].noches
  )
  console.log(
    `Caso 2: Total de la reserva numero ${i + 1}:`,
    reservaCaso2.total(),
    'Subtotal:',
    reservaCaso2.subtotal()
  )
}
