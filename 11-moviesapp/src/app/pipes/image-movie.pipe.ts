import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageMovie'
})
export class ImageMoviePipe implements PipeTransform {

  transform(movie: any): string {
    const poster = movie.backdrop_path || movie.poster_path;

    if (!poster) {
      return 'assets/images/noimage.jpg';
    }

    return 'http://image.tmdb.org/t/p/w500' + poster;
  }

}
