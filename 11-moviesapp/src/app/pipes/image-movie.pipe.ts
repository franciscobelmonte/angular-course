import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageMovie'
})
export class ImageMoviePipe implements PipeTransform {

  transform(movie: any, poster: boolean = false): string {
    let image = movie.backdrop_path || movie.poster_path;

    if (poster) {
      image = movie.poster_path;
    }

    if (!image) {
      return 'assets/images/noimage.jpg';
    }

    return 'http://image.tmdb.org/t/p/w500' + image;
  }

}
