import { HospedeInsertDTO } from './../models/hospedeInsertDTO';
import { HospedeDTO } from './../models/hospedeDTO';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospedeService {

  private baseURL = "http://localhost:8080/api/hospede";

  constructor(private httpClient: HttpClient) { }

  getHospedeList(): Observable<HospedeDTO[]>{
    return this.httpClient.get<HospedeDTO[]>(`${this.baseURL}`);
  }

  createHospede(hospede: HospedeInsertDTO): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, hospede);
  }

  getHospedeById(id: number): Observable<HospedeDTO>{
    return this.httpClient.get<HospedeDTO>(`${this.baseURL}/${id}`);
  }

  updateHospede(id: number, hospede: HospedeInsertDTO): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, hospede);
  }

  deleteHospede(id: number){
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
