interface Reserva {
  tipoHabitacion: 'standard' | 'suite'
  desayuno: boolean
  pax: number
  noches: number
}

export const reservas: Reserva[] = [
  {
    tipoHabitacion: 'standard',
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: 'standard',
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: 'suite',
    desayuno: true,
    pax: 2,
    noches: 1,
  },
]

export class Caso1 {
  reservas: Reserva[]
  precioDesayuno: number
  precioPorNoche: number
  precioPorPersonaAdicional: number
  iva: number

  constructor(reservas: Reserva[]) {
    this.reservas = reservas
    this.precioDesayuno = 15
    this.precioPorNoche = 100
    this.precioPorPersonaAdicional = 40
    this.iva = 0.21
  }

  calculaPrecioHabitacionPorTipo(reserva: Reserva) {
    switch (reserva.tipoHabitacion) {
      case 'standard':
        return 100 * reserva.noches
      case 'suite':
        return 150 * reserva.noches
    }
  }
  calculaTotalDesayuno(reserva: Reserva) {
    if (reserva.desayuno) {
      return this.precioDesayuno * reserva.noches * reserva.pax
    }
    return 0
  }
  calculaTotalPersonaAdicional(reserva: Reserva) {
    return (reserva.pax - 1) * this.precioPorPersonaAdicional * reserva.noches
  }

  calculaSubtotal() {
    return this.reservas.reduce((subtotal, reserva) => {
      subtotal +=
        this.calculaPrecioHabitacionPorTipo(reserva) +
        this.calculaTotalDesayuno(reserva) +
        this.calculaTotalPersonaAdicional(reserva)
      return subtotal
    }, 0)
  }
  calculaTotal() {
    const subtotal = this.calculaSubtotal()
    const impuestos = subtotal * this.iva
    return subtotal + impuestos
  }
}

export class Caso2 extends Caso1 {
  descuento: number

  constructor(reservas: Reserva[]) {
    super(reservas)
    this.descuento = 0.15
  }

  calculaPrecioHabitacionPorTipo(reserva: Reserva) {
    return 100 * reserva.noches
  }
  calculoDescuento(): number {
    return this.reservas.reduce((subtotal, reserva) => {
      subtotal +=
        this.calculaPrecioHabitacionPorTipo(reserva) +
        this.calculaTotalDesayuno(reserva) +
        this.calculaTotalPersonaAdicional(reserva)
      return subtotal 
    }, 0) * this.descuento
  }

  calculaSubtotal(): number {
    return this.reservas.reduce((subtotal, reserva) => {
      subtotal +=
        this.calculaPrecioHabitacionPorTipo(reserva) +
        this.calculaTotalDesayuno(reserva) +
        this.calculaTotalPersonaAdicional(reserva) 
      return subtotal 
    }, 0) - this.calculoDescuento()
  }
}
