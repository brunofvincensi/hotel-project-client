import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HospedeListComponent } from './hospede-list.component';

describe('HospedeListComponent', () => {
  let component: HospedeListComponent;
  let fixture: ComponentFixture<HospedeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospedeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
