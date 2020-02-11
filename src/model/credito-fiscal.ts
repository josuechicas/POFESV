export class CreditoFiscal {
    datosGenerales: [{
        version: number,
        tipoDTE: string,
        fecEmision: string,
        cude: string
      }];
      emisor: [{
        nombre: string,
        actividadEconomica: string,
        nombreComercial: string,
        tipoEstablecimiento: string,
        nombEstablecimeinto: string,
        departamento: string,
        municipio: string,
        direccion: string
      }];
      receptor: [{
        nit: string,
        nombre: string,
        actividadEconomica: string,
        nombreComercial: string,
        tipoEstablecimiento: string,
        nombEstablecimeinto: string,
        departamento: string,
        municipio: string,
        direccion: string,
        telefono: string,
        correo: string
      }];
      concepto: [{
        codigo: string,
        uniMedida: string,
        descripcion: string,
        cantidad: number,
        precioUnitario: number,
        noSujeta: number,
        exenta: number,
        afecta: number
      
      }];
      masInfo: [{
        nomEntrega: string,
        numEntraga: string,
        nomRecibe: string,
        numRecibe: number,
        observaciones: number
      }];
      totales: [{
        ventaNoSujeta: number,
        ventaExenta: number,
        ventaAfecta: number,
        descuento: number,
        ventaNeta: number
        iva: number,
        subTotal: number,
        totalPagar: number,
        montoLetra: string
      }];
      



}