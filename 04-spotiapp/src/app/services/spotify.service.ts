import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service ready');
  }

  getNewReleases () {
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases?limit=20', this.getHeaders());
  }

  searchArtists (term: string) {
    return this.http
      .get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, this.getHeaders());
  }

  private getHeaders() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCGo_v-gnjunT3V86FTtxjwRgXqcvcOzNYgetLuV-_nNXdZNg87qmLfI7kp_yoCPqzqvr2rSkikUMPsuGg'
    });

    return {headers};
  }
}
