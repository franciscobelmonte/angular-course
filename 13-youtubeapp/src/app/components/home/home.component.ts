import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  selectedVideo: any;

  constructor(private ys: YoutubeService) {
    this.ys.getVideos().subscribe(videos => this.videos = videos);
  }

  ngOnInit() {
  }

  watchVideo (video) {
    this.selectedVideo = video;
    $('#youtubeModal').modal();
  }

  closeModal () {
    this.selectedVideo = null;
    $('#youtubeModal').modal('hide');
  }

  loadMoreVideos () {
    this.ys.getVideos().subscribe(videos => this.videos.push.apply(this.videos, videos));
  }

}
