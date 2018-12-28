import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
      Hello world, this is an HTML tag!
    </p>

    <button class="btn btn-primary" (click)="size = size + 5">
      <i class="fas fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="size = size - 5">
      <i class="fas fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  size = 10;

  constructor() { }

  ngOnInit() {
  }

}
