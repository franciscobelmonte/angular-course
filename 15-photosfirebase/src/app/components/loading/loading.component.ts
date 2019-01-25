import { Component, OnInit } from '@angular/core';
import { FileItem } from './../../models/file-item';
import { UploadService } from './../../services/upload.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styles: []
})
export class LoadingComponent implements OnInit {
  photos: FileItem[] = [];
  userEnterInDropZone = false;

  constructor(public _us: UploadService) { }

  ngOnInit() {
  }

  uploadPhotos () {
    this._us.uploadPhotos(this.photos);
  }

}
