import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
})
export class FormRegisterComponent implements OnInit {
  constructor(private service: RegisterService) {}
  get Comunas() {
    return this.service.Comunas;
  }

  ngOnInit(): void {
    this.service.getHeroes();
  }
}
