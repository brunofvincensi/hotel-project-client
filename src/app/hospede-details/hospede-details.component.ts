import { HospedeDTO } from './../models/hospedeDTO';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HospedeService } from '../services/hospede.service';

@Component({
  selector: 'app-hospede-details',
  templateUrl: './hospede-details.component.html',
  styleUrls: []
})
export class HospedeDetailsComponent implements OnInit {

  id: number
  hospede: HospedeDTO

  constructor(private route: ActivatedRoute, private hospedeService: HospedeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.hospede = new HospedeDTO();
    this.hospedeService.getHospedeById(this.id).subscribe( data => {
      this.hospede = data;
    });
  }

}
