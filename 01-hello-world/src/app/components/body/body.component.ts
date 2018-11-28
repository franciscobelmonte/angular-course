import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  sentence: any = {
    message: 'A great power carries a great responsibility',
    author: 'Ben Parker'
  };

  show = true;

  characters: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}
