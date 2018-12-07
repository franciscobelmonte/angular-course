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
  tracks: any[] = [];

  loading = true;

  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.getArtist(params['id']);
      this.getTopTracksForArtist(params['id']);
    });
  }

  private getArtist (id: string) {
    this._spotifyService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  private getTopTracksForArtist (id: string) {
    this._spotifyService.getTopTracksForArtist(id).subscribe(tracks => {
      this.tracks = tracks;
    });
  }

}
