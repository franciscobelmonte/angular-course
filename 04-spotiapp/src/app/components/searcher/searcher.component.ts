import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styles: []
})
export class SearcherComponent implements OnInit {
  artists: any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  search (term: string) {
    this.spotify
      .searchArtists(term)
      .subscribe((artists: any) => {
        this.artists = artists.artists.items;
      });
  }
}
