import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Francisco';

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  percent = 0.234;

  salary = 1234.5;

  hero = {
    name: 'Logan',
    code: 'Wolverine',
    age: 200,
    address: {
      street: 'Graymalkin Lane',
      number: 1407
    }
  };

  promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve('Promise ended');
    }, 3500);
  });

  date = new Date();
}
