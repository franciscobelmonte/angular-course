import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artist: any;

  loading = true;

  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this._spotifyService.getArtist(params['id']).subscribe(artist => {
        this.artist = artist;
        this.loading = false;
      });
    });
  }

}
