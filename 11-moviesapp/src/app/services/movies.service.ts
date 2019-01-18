import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private key = '18f50d1b9a9a6e7ae6f3f1d00c33282f';
  private api = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopularMovies () {
    const url = `${this.api}/discover/movie?sort_by=popularity.desc&api_key=${this.key}`;

    return this.http.jsonp(url, 'callback');
  }

  searchMovie (movie: string) {
    const url = `${this.api}/search/movie?query=${movie}&sort_by=popularity.desc&api_key=${this.key}`;

    return this.http.jsonp(url, 'callback');
  }
}
