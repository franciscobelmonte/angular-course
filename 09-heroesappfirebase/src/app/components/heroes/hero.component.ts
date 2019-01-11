import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from './.././../model/hero.interface';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {
  hero: Hero = {
    name: '',
    publisher: 'Marvel',
    bio: ''
  };

  constructor() { }

  ngOnInit() {
  }

  save () {
    console.log(this.hero);
  }

}
