import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {
  user: Object = {
    name: 'Francisco',
    surnames: 'Belmonte',
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log('Saving form...');
    console.log('Form', form);
    console.log('Value', form.value);
    console.log('User', this.user);
  }

}
