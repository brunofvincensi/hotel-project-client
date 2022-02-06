import { CheckOutDTO } from './../models/checkOutDTO';
import { HospedagemService } from './../services/hospedagem.service';
import { HospedagemDTO } from './../models/hospedagemDTO';
import { HospedeService } from './../services/hospede.service';
import { HospedeDTO } from './../models/hospedeDTO';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospedes-ativos',
  templateUrl: './hospedes-ativos.component.html',
  styleUrls: []
})
export class HospedesAtivosComponent implements OnInit {

  hospedesAtivos: HospedeDTO[]

  hospedagemDTO: HospedagemDTO[];

  constructor(private hospedeService: HospedeService, private hospedagemService: HospedagemService,
    private router: Router) { }

  ngOnInit(): void {

    this.getHospedesAtivos()

  }


  private getHospedesAtivos(){
    this.hospedeService.getHospedeList().subscribe(data => {
      this.hospedesAtivos = data.filter(h => h.hospedagemAtual != null);

    });

  }

  calcValorTotal(hospede : HospedeDTO){

    let valorTotal = 0.0;

    hospede.hospedagens.forEach(h => valorTotal += h.valor)

    return valorTotal;
  }

  checkOut(id : number){

    let checkOut =  new CheckOutDTO
    checkOut.id = id

    this.hospedagemService.checkOut(checkOut).subscribe( data => {
      console.log(data);
      this.getHospedesAtivos();
    })

  }

}
