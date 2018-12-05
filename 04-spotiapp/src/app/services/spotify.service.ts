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
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBG7DQ6S6S0kL34jRbnrJzp1ZAhI8QLBSkpYkejPCInBVMUzqF_boQHbvF1jCDDzL6AvsLGEsNtvZ9ETg8'
    });

    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers});
  }
}
