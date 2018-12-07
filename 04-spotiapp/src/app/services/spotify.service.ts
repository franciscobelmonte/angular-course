import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getNewReleases () {
    return this.query(`browse/new-releases?limit=20`)
      .pipe(map(response => response['albums'].items));
  }

  searchArtists (term: string) {
    return this.query(`search?q=${term}&type=artist&limit=15`)
      .pipe(map(response => response['artists'].items));
  }

  getArtist (id: string) {
    return this.query(`artists/${id}`);
  }

  getTopTracksForArtist (id: string) {
    return this.query(`artists/${id}/top-tracks?country=us`)
      .pipe(map(response => response['tracks']));
  }

  private query(query: string) {
    const url = 'https://api.spotify.com/v1/';

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAzWkTzPT8J9IriUa6kMt_Z78eRW5iV-oOTxhv-Td2YUQFs8bxG6bOVtLDH4X9Zhs3x5qArnpNEnxZATY8'
    });

    return this.http.get(`${url}${query}`, { headers });
  }
}
