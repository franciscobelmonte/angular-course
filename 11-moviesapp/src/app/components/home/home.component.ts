import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  boxOffice: any;
  popular: any;
  childrenPopular: any;

  constructor(private _ms: MoviesService) {
    this._ms.getBoxOffice().subscribe(movies => {
      this.boxOffice = movies['results'];
    });

    this._ms.getPopularMovies().subscribe(movies => {
      this.popular = movies['results'];
    });

    this._ms.getChildrenPopularMovies().subscribe(movies => {
      this.childrenPopular = movies['results'];
    });
  }

  ngOnInit() {
  }

}
