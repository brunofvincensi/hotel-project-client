
import { Router } from '@angular/router';
import { HospedeService } from './../services/hospede.service';
import { Component, OnInit } from '@angular/core';
import { HospedeDTO } from '../models/hospedeDTO';

@Component({
  selector: 'app-ex-hospedes',
  templateUrl: './ex-hospedes.component.html',
  styleUrls: []
})
export class ExHospedesComponent implements OnInit {

  exHospedes : HospedeDTO[];


  constructor(private hospedeService : HospedeService,
     private router : Router) { }

  ngOnInit(): void {
    this.getExHospedes()
  }

  private getExHospedes(){

    this.hospedeService.getHospedeList().subscribe( data =>{

      this.exHospedes = data.filter(h => h.hospedagemAtual == null && h.hospedagens.length > 0);
    }
    )
  }

  calcValorTotal(hospede : HospedeDTO){

    let valorTotal = 0.0;

    hospede.hospedagens.forEach(h => valorTotal += h.valor)

    return valorTotal;
  }

}
