import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


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
        'surnames': new FormControl('', [Validators.required, this.customValidation])
      }),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'hobbies': new FormArray([
        new FormControl('Read books', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.asyncValidation),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    // this.form.setValue(this.user);

    this.form.controls.password2.setValidators([
      Validators.required,
      this.passwordValidation.bind(this)
    ]);

    this.form.controls.username.valueChanges.subscribe(data => {
      console.log(data);
    });

    this.form.controls.username.statusChanges.subscribe(data => {
      console.log(data);
    });
  }

  save () {
    console.log(this.form);

    // this.form.reset(this.user);
  }

  addHobbie () {
    (<FormArray>this.form.controls.hobbies).push(
      new FormControl('Running', Validators.required)
    );
  }

  customValidation (control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Belmonte') {
      return {
        notBelmonte: true
      };
    }
    return null;
  }

  passwordValidation(control: FormControl): { [s: string]: boolean } {
    if (control.value !== this.form.controls.password1.value) {
      return {
        notSamePassword: true
      };
    }
    return null;
  }

  asyncValidation(control: FormControl): Promise<any>|Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'fbelmonte') {
          resolve({usernameExists: true});
        }
        resolve(null);
      }, 3000);
    });

    return promise;
  }


}
