import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private key = 'AIzaSyAWiGhm7U7v7y6zhX5HxxjRJKPbmmbBitA';
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken;

  constructor(private http: HttpClient) { }

  getVideos () {
    const url = `${this.youtubeUrl}/playlistItems`;

    let params = new HttpParams();
    params = params.set('part', 'snippet');
    params = params.set('maxResults', '10');
    params = params.set('playlistId', this.playlist);
    params = params.set('key', this.key);

    return this.http.get(url, {params}).pipe(
      map(result => {
        this.nextPageToken = result['nextPageToken'];

        const videos: any[] = [];
        for (const video of result['items']) {
          videos.push(video.snippet);
        }

        return videos;
      })
    );
  }
}
