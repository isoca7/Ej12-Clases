interface Reserva {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}
  
 export const reservas : Reserva[]= [
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 3,
    },
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 4,
    },
    {
      tipoHabitacion: "suite",
      desayuno: true,
      pax: 2,
      noches: 1,
    },
  ];

export  class Caso1 {
    reservas : Reserva[]
    tipoHabitacion: 'standard' | 'suite'
    precioTipoHabitacion: number
    desayuno: boolean
    precioDesayuno: number
    pax: number
    noches: number
    iva: number
    precioAdicionalPorPersona: number
  
    constructor(
      reservas : Reserva[]
    ) {
      this
      reservas.forEach((reserva : Reserva)=>{
        this.tipoHabitacion = reserva.tipoHabitacion
      switch (this.tipoHabitacion) {
        case 'standard':
          this.precioTipoHabitacion = 100
          break
        case 'suite':
          this.precioTipoHabitacion = 150
      }
      this.desayuno = reserva.desayuno
      this.precioDesayuno = 15
      this.pax = reserva.pax
      this.noches = reserva.noches
      this.iva = 0.21
      this.precioAdicionalPorPersona = 40
      })
      
    }
  
    calculoDesayuno() {
      return this.desayuno ? this.precioDesayuno * this.noches : 0
    }
    calculoPrecioNoches() {
      return this.precioTipoHabitacion * this.noches
    }
    calculoPersonasAdicionales() {
      return this.pax > 1
        ? this.precioAdicionalPorPersona * (this.pax-1) * this.noches
        : 0
    }
    calculoIva() {
      return this.subtotal() * this.iva
    }
    subtotal() {
      return (
        this.calculoPrecioNoches() +
        this.calculoPersonasAdicionales() +
        this.calculoDesayuno()
      )
    }
    total() {
      return this.subtotal() + this.calculoIva()
    }
  }
  
 export class Caso2 extends Caso1 {
    descuento: number
  
    constructor(
      tipoHabitacion: 'standard' | 'suite',
      desayuno: boolean,
      pax: number,
      noches: number
    ) {
      super(tipoHabitacion, desayuno, pax, noches)
      this.descuento = 0.15
      this.precioTipoHabitacion = 100
    }
  
    calculoDescuento(): number {
      return (
        (this.calculoPrecioNoches() +
          this.calculoPersonasAdicionales() +
          this.calculoDesayuno()) *
        this.descuento
      )
    }
    
    subtotal(): number {
      return (
        this.calculoPrecioNoches() +
        this.calculoPersonasAdicionales() +
        this.calculoDesayuno() -
        this.calculoDescuento()
      )
    }
  }