import { HospedagemService } from './hospedagem.service';
import { TestBed } from '@angular/core/testing';

describe('HospedagemService', () => {
  let service: HospedagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospedagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
