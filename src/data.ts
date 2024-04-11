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
    precioDesayuno: number
    precioPorNoche :number
    precioPorPersonaAdicional:number
    iva: number

    constructor(
      reservas : Reserva[]
    ) {
      this.reservas = reservas
      this.precioDesayuno=15
      this.precioPorNoche=100
      this.precioPorPersonaAdicional=40
      this.iva=0.21
    }
  
    calculaSubtotal() {
      return this.reservas.reduce((subtotal, reserva)=>{
        let totalDesayuno = 0
        let totalPersonasAdicionales = 0
        switch(reserva.tipoHabitacion){
          case "standard":
          this.precioPorNoche=100;
          break
          case "suite":
            this.precioPorNoche=150
        }
        if(reserva.desayuno){
         totalDesayuno = this.precioDesayuno * reserva.noches
        }
        if(reserva.pax>1){
          totalPersonasAdicionales = ((reserva.pax-1)*this.precioPorPersonaAdicional)*reserva.noches
        }
        subtotal+= this.precioPorNoche*reserva.noches + totalDesayuno + totalPersonasAdicionales
        return subtotal
      },0)
    }
    calculaTotal() {
      const subtotal = this.calculaSubtotal()
      const impuestos = subtotal * this.iva
      return subtotal + impuestos
    }
  }
  
 /*export class Caso2 extends Caso1 {
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
    
    calculaSubtotal(): number {
      return (
        this.calculoPrecioNoches() +
        this.calculoPersonasAdicionales() +
        this.calculoDesayuno() -
        this.calculoDescuento()
      )
    }
  }*/