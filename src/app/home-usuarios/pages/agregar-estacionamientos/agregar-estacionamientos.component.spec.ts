import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstacionamientosComponent } from './agregar-estacionamientos.component';

describe('AgregarEstacionamientosComponent', () => {
  let component: AgregarEstacionamientosComponent;
  let fixture: ComponentFixture<AgregarEstacionamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEstacionamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEstacionamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
