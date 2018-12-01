import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styles: []
})
export class SearcherComponent implements OnInit {
  heroes: Heroe[] = [];
  term: string;

  constructor (
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router
  ) { }

  ngOnInit () {
    this._activatedRoute.params.subscribe(params => {
      this.term = params.term;
      this.heroes = this._heroesService.searchHeroes(params.term);
    });
  }
}
