import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../model/hero.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  url = 'https://heroesapp-279d3.firebaseio.com/heroes.json';

  constructor(private http: HttpClient) { }

  addHero (hero: Hero) {
    const body = JSON.stringify(hero);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.url, body, {headers})
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        })
      );
  }
}
