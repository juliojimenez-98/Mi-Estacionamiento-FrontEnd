import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiEstacionamientoDetailComponent } from './mi-estacionamiento-detail.component';

describe('MiEstacionamientoDetailComponent', () => {
  let component: MiEstacionamientoDetailComponent;
  let fixture: ComponentFixture<MiEstacionamientoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiEstacionamientoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiEstacionamientoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
