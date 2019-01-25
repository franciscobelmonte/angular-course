import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private folder = 'img';

  constructor(private db: AngularFirestore) { }

  uploadPhotos (photos: FileItem[]) {
    console.log(photos);
  }

  uploadPhoto (photo: {name: string, url: string}) {
    this.db.collection(`/${this.folder}`).add(photo);
  }
}
