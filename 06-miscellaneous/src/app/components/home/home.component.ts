import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <hr>
    <app-css></app-css>

    <hr>
    <app-classes></app-classes>

    <hr>
    <p [appHighlight]="'red'">Hello world using directives</p>

    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
