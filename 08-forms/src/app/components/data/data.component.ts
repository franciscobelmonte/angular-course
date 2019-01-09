import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {
  form: FormGroup;

  user: Object = {
    fullname: {
      name: 'Francisco',
      surnames: 'Belmonte'
    },
    email: 'fbr@gmail.com',
    hobbies: ['Read books', 'Running', 'Physics']
  };

  constructor() {
    this.form = new FormGroup({
      'fullname': new FormGroup({
        'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'surnames': new FormControl('', Validators.required)
      }),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'hobbies': new FormArray([
        new FormControl('Read books', Validators.required)
      ])
    });

    // this.form.setValue(this.user);
  }

  save () {
    console.log(this.form);

    this.form.reset(this.user);
  }

  addHobbie () {
    (<FormArray>this.form.controls.hobbies).push(
      new FormControl('Running', Validators.required)
    );
  }

}
