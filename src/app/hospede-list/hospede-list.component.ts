import { HospedeDTO } from '../models/hospedeDTO';
import { HospedeService } from '../services/hospede.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hospede-list',
  templateUrl: './hospede-list.component.html',
  styleUrls: ['./hospede-list.component.css']
})
export class HospedeListComponent implements OnInit {

  hospedes: HospedeDTO[];

  constructor(private hospedeService: HospedeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHospedes();
  }

  private getHospedes(){
    this.hospedeService.getHospedeList().subscribe(data => {
      this.hospedes = data;
    });
  }

  hospedeInfo(id: number){
    this.router.navigate(['hospede-info/', id]);
  }

  alterarHospede(id: number){
    this.router.navigate(['alterar-hospede/', id]);
  }

  deletarHospede(id: number){
    this.hospedeService.deleteHospede(id).subscribe( data => {
      console.log(data);
      this.getHospedes();
    })
  }
}
