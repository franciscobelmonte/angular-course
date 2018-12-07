import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {
  @Input() item: any;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  routeToArtist (item: any) {
    const id = item.type === 'artist' ? item.id : item.artists[0].id;

    this._router.navigate(['/artist', id]);
  }
}
