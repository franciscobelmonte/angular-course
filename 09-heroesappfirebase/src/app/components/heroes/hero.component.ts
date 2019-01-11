import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from './.././../model/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {
  hero: any = {
    name: '',
    publisher: 'Marvel',
    bio: ''
  };

  id: string;

  constructor(
    private _heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
        if (this.id !== 'new') {
          this._heroesService.getHero(this.id)
            .subscribe(hero => {
              this.hero = hero;
            });
        }
      });
    }

  ngOnInit() {
  }

  save () {
    if (this.id === 'new') {
      this._heroesService.addHero(this.hero)
        .subscribe(hero => {
          this.router.navigate(['/hero', hero['name']]);
        }, error => console.error(error)
      );
      return;
    }

    this._heroesService.updateHero(this.hero, this.id)
      .subscribe(hero => {
        console.log(hero);
      }, error => console.error(error)
    );
  }

  reset(form: NgForm) {
    this.router.navigate(['/hero', 'new']);
    form.reset({
      publisher: 'Marvel'
    });
  }

}
