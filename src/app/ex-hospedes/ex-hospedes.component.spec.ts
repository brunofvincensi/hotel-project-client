import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExHospedesComponent } from './ex-hospedes.component';

describe('ExHospedesComponent', () => {
  let component: ExHospedesComponent;
  let fixture: ComponentFixture<ExHospedesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExHospedesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExHospedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
