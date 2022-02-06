import { HospedeInsertDTO } from '../models/hospedeInsertDTO';
import { Component, OnInit } from '@angular/core';
import { HospedeService } from '../services/hospede.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alterar-hospede',
  templateUrl: './update-hospede.component.html',
  styleUrls: ['./update-hospede.component.css']
})
export class UpdateHospedeComponent implements OnInit {

  id: number;
  hospede: HospedeInsertDTO = new HospedeInsertDTO();
  constructor(private hospedeService: HospedeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.hospedeService.getHospedeById(this.id).subscribe(data => {
      this.hospede = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.hospedeService.updateHospede(this.id, this.hospede).subscribe( data =>{
      this.goToHospedeList();
    }
    , error => console.log(error));
  }

  goToHospedeList(){
    this.router.navigate(['/hospedes']);
  }
}
