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

  private query(query: string) {
    const url = 'https://api.spotify.com/v1/';

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD7F9RO9R8Umdnd0AEEuP_Vwpa0HWFGmO3RsIR3Fl88R8yqJKWOr6GnKWLrQvn0X_qEg6YkZF3W4Qx5Uq0'
    });

    return this.http.get(`${url}${query}`, { headers });
  }
}
