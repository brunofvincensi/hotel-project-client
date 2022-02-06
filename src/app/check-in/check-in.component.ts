import { HospedeDTO } from './../models/hospedeDTO';
import { HospedagemService } from './../services/hospedagem.service';
import { HospedagemInsertDTO } from './../models/hospedagemInsertDTO';
import { Component, OnInit } from '@angular/core';
import { HospedeService } from '../services/hospede.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  hospedagemInsertDTO = new HospedagemInsertDTO();
  hospedes: HospedeDTO[]
  filtro: string;

  // numeroQuarto: string;



  comGaragem: string;

  constructor(private hospedeService: HospedeService, private hospedagemService: HospedagemService,
    private router: Router) { }

  ngOnInit(): void {

  }

  saveCheckIn(){
    this.hospedagemService.checkIn(this.hospedagemInsertDTO).subscribe( data =>{
      console.log(data);
      this.goToHospedesAtivosList();
    },
    error => console.log(error));
  }

  goToHospedesAtivosList(){
    this.router.navigate(['/hospedes-ativos']);
  }


  getResult(){

    this.hospedeService.getHospedeList().subscribe(data => {
      console.log(data)
      this.hospedes = data.filter(h => h.nome == this.filtro || h.cpf == this.filtro || h.telefone == this.filtro);
    });

  }

 filtrar(){

  console.log(this.filtro);
    this.getResult();
}



  setHospedeId(id : number){

    console.log(id)
    this.hospedagemInsertDTO.hospedeId = id
   
  }

  setTrue(){
    this.hospedagemInsertDTO.comGaragem = true
    console.log(this.hospedagemInsertDTO.comGaragem)
  }
  setFalse(){
    this.hospedagemInsertDTO.comGaragem = false
  }


  onSubmit(){

    /* let r  = (<HTMLSelectElement>document.querySelector('input[name="comGaragem"]:checked')).value;


    this.hospedagemInserDTO.hospedeId = parseInt(r)


    if(r == "true"){
     this.hospedagemInserDTO.comGaragem = true
    }

    else if(r == "false"){
     this.hospedagemInserDTO.comGaragem = false
    }*/

    this.saveCheckIn()

  }





}
