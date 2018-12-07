import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styles: []
})
export class SearcherComponent implements OnInit {
  artists: any[] = [];

  loading = false;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  search (term: string) {
    this.loading = true;
    this.spotify
      .searchArtists(term)
      .subscribe((artists: any) => {
        this.artists = artists;
        this.loading = false;
      });
  }
}
