import { HospedeInsertDTO } from './../models/hospedeInsertDTO';
import { Component, OnInit } from '@angular/core';
import { HospedeService } from '../services/hospede.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hospede',
  templateUrl: './create-hospede.component.html',
  styleUrls: []
})
export class CreateHospedeComponent implements OnInit {

  hospede: HospedeInsertDTO = new HospedeInsertDTO();
  constructor(private hospedeService: HospedeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveHospede(){
    this.hospedeService.createHospede(this.hospede).subscribe( data =>{
      console.log(data);
      this.goToHospedeList();
    },
    error => console.log(error));
  }

  goToHospedeList(){
    this.router.navigate(['/hospedes']);
  }

  onSubmit(){
    console.log(this.hospede);
    this.saveHospede();
  }
}
