import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styles: []
})
export class SearcherComponent implements OnInit {
  search = '';
  results = [];

  constructor(public _ms: MoviesService, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      if (params['movie']) {
        this.search = params['movie'];
        this.searchMovie();
      }
    });
  }

  ngOnInit() {
  }

  searchMovie () {
    if (this.search === '') {
      return;
    }

    this._ms.searchMovie(this.search).subscribe(movies => {

    });
  }

}
