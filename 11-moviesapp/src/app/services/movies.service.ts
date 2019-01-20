import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private key = '18f50d1b9a9a6e7ae6f3f1d00c33282f';
  private api = 'https://api.themoviedb.org/3';

  movies: any;

  constructor(private http: HttpClient) { }

  getBoxOffice () {
    const from = new Date();

    const to = new Date();
    to.setDate(from.getDate() + 7);

    // tslint:disable-next-line:max-line-length
    const url = `${this.api}/discover/movie?primary_release_date.gte=${from.getFullYear()}-${from.getMonth() + 1}-${from.getDate()}&primary_release_date.lte=${to.getFullYear()}-${to.getMonth() + 1}-${to.getDate()}&api_key=${this.key}`;

    return this.http.jsonp(url, 'callback');
  }

  getPopularMovies () {
    const url = `${this.api}/discover/movie?sort_by=popularity.desc&api_key=${this.key}`;

    return this.http.jsonp(url, 'callback');
  }

  getChildrenPopularMovies () {
    const url = `${this.api}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.key}`;

    return this.http.jsonp(url, 'callback');
  }

  searchMovie (movie: string) {
    const url = `${this.api}/search/movie?query=${movie}&sort_by=popularity.desc&api_key=${this.key}`;

    return this.http.jsonp(url, 'callback').pipe(
      map(data => {
        this.movies = data['results'];
        return data;
      })
    );
  }

  getMovie (id: string) {
    const url = `${this.api}/movie/${id}?api_key=${this.key}`;

    return this.http.jsonp(url, 'callback');
  }
}
