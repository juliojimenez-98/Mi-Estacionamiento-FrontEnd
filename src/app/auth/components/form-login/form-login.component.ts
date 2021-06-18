import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  singIn(username: string, password: string, event: Event) {
    event.preventDefault();
    console.log({ username: username, password: password });
  }
}
