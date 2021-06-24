import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisEstacionamientosComponent } from './mis-estacionamientos.component';

describe('MisEstacionamientosComponent', () => {
  let component: MisEstacionamientosComponent;
  let fixture: ComponentFixture<MisEstacionamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisEstacionamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisEstacionamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
