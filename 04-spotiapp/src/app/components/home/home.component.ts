import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];

  loading = true;

  error = {
    message: ''
  };

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    this.spotify
      .getNewReleases()
      .subscribe((releases: any) => {
        this.newReleases = releases;
        this.loading = false;
      }, (error) => {
        this.error.message = error.error.error.message;
        this.loading = false;
      });
  }
}
