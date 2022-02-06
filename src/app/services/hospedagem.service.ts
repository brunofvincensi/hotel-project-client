import { HospedagemInsertDTO } from './../models/hospedagemInsertDTO';
import { CheckOutDTO } from './../models/checkOutDTO';
import { HospedagemDTO } from './../models/hospedagemDTO';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospedagemService {

  private baseURL = "http://localhost:8080/api/hospedagem";

  constructor(private httpClient: HttpClient) { }

  checkOut(checkOutDTO: CheckOutDTO): Observable<HospedagemDTO>{
    return this.httpClient.patch<HospedagemDTO>(`${this.baseURL}`, checkOutDTO);
  }

  checkIn(hospedagem : HospedagemInsertDTO): Observable<HospedagemInsertDTO>{
    return this.httpClient.post<HospedagemInsertDTO>(`${this.baseURL}`, hospedagem);
  }

}
