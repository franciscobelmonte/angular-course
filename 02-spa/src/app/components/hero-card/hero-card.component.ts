import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Heroe;
  @Input() heroId: number;

  constructor (private _router: Router) { }

  ngOnInit () {
  }

  routeToHero() {
    this._router.navigate(['/hero', this.heroId]);
  }
}
