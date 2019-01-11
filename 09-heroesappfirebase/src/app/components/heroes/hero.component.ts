import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from './.././../model/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


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

  constructor(private _heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
  }

  save () {
    this._heroesService.addHero(this.hero)
      .subscribe(hero => {
        this.router.navigate(['/hero', hero['name']]);
      }, error => console.error(error));
  }

}
