import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedesAtivosComponent } from './hospedes-ativos.component';

describe('HospedesAtivosComponent', () => {
  let component: HospedesAtivosComponent;
  let fixture: ComponentFixture<HospedesAtivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospedesAtivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedesAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
