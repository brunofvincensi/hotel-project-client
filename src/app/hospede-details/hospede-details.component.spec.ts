import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedeDetailsComponent } from './hospede-details.component';

describe('HospedeDetailsComponent', () => {
  let component: HospedeDetailsComponent;
  let fixture: ComponentFixture<HospedeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospedeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
