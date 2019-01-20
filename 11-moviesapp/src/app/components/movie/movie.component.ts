import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  movie: any;

  constructor(public _ms: MoviesService, private router: ActivatedRoute, private location: Location) {
    this.router.params.subscribe(params => {
      this._ms.getMovie(params['id']).subscribe(movie => this.movie = movie);
    });
  }

  ngOnInit() {
  }

  back () {
    this.location.back();
  }

}
