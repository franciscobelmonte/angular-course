import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../model/hero.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesUrl = 'https://heroesapp-279d3.firebaseio.com/heroes.json';
  heroUrl = 'https://heroesapp-279d3.firebaseio.com/heroes';

  constructor(private http: HttpClient) { }

  addHero (hero: Hero) {
    const body = JSON.stringify(hero);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.heroesUrl, body, {headers})
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  updateHero (hero: Hero, key: string) {
    const body = JSON.stringify(hero);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put(`${this.heroUrl}/${key}.json`, body, {headers})
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
