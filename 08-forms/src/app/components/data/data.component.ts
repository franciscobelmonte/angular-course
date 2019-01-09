import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'surnames': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email])
    });
  }

  save () {
    console.log(this.form);
  }

}
