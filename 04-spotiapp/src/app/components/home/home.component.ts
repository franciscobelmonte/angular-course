import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    this.spotify
      .getNewReleases()
      .subscribe((releases: any) => {
        console.log(releases.albums.items);
        this.newReleases = releases.albums.items;
      });
  }
}
