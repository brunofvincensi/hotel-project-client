import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHospedeComponent } from './update-hospede.component';

describe('UpdateHospedeComponent', () => {
  let component: UpdateHospedeComponent;
  let fixture: ComponentFixture<UpdateHospedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHospedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHospedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
