import { Component, OnInit } from '@angular/core';

import { HeroesService } from './../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: any;

  loading = true;

  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  deleteHero (key: string) {
    this._heroesService.deleteHero(key).subscribe(response => {
      if (response === null) {
        delete this.heroes[key];
      }
    });
  }

}
