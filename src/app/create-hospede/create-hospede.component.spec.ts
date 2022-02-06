
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHospedeComponent } from './create-hospede.component';

describe('CreateHospedeComponent', () => {
  let component: CreateHospedeComponent;
  let fixture: ComponentFixture<CreateHospedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHospedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHospedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
