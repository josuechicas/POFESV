import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { CreditoFiscal } from '../../model/credito-fiscal';



@Injectable({
  providedIn: 'root'
})
export class CreditoFiscalService {

  BaseUrl = 'http://svfe-recepcion.centralus.azurecontainer.io:8080/fesv';


  constructor(private http: HttpClient) { }

  getAll(cude) : Observable<any> {
    return this.http.get(this.BaseUrl + "/consultadte/" + cude)
          .pipe(
            map( this.crearArreglo )
          )
}
private crearArreglo ( creditoFiscalObj: object ) {

  const creditoFiscales: CreditoFiscal[] = [];

  console.log(creditoFiscalObj);

  if ( creditoFiscalObj ===null ) { return []; }
Object.keys( creditoFiscalObj ).forEach( key => {

  const creditoFiscal: CreditoFiscal = creditoFiscalObj[key];

  creditoFiscales.push( creditoFiscal) ;

})
 
  return creditoFiscales;

}
}
