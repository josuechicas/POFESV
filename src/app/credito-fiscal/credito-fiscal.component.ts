import { Component, OnInit } from '@angular/core';
import { CreditoFiscal } from '../../model/credito-fiscal';
import { CreditoFiscalService } from '../service/credito-fiscal.service';




@Component({
  selector: 'app-credito-fiscal',
  templateUrl: './credito-fiscal.component.html',
  styleUrls: ['./credito-fiscal.component.css']
})
export class CreditoFiscalComponent implements OnInit {

  cude = "";

//para input
    text: string;
    disabled: boolean = true;
    toggleDisabled() {
        this.disabled = !this.disabled;
    }
//para button
  onClickSearchByCude() {
    this.creditoFiscalService.getAll(this.cude).subscribe(
      (result: any) => {
        /*for (let i = 0; i < result.length; i++) {
          let creditoFiscal = result[i] as CreditoFiscal;
          this.creditoFiscales.push(creditoFiscal);
        }*/
        console.log(result);
      },
      error => {
        console.log(error);
    
      }
      
    ) 
    }

    //aptchaDemo


  creditoFiscales: CreditoFiscal[];

  constructor(private creditoFiscalService: CreditoFiscalService) { }

  



  ngOnInit() {

 
  }

}
