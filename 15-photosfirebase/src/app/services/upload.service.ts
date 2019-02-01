import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private folder = 'img';

  constructor(private db: AngularFirestore) { }

  uploadPhotos (photos: FileItem[]) {
    const storageRef = firebase.storage().ref();

    for (const photo of photos) {
      photo.isUploading = true;
      if (photo.progress >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.folder}/${photo.filename}`).put(photo.file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snaphost: firebase.storage.UploadTaskSnapshot) => {
       photo.progress = (snaphost.bytesTransferred / snaphost.totalBytes) * 100;
      }, (error) => {
        console.error(error);
      }, () => {
        console.log('Photo uploaded successfully');

        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          photo.url = downloadURL;
          photo.isUploading = false;
          this.uploadPhoto({ name: photo.filename, url: photo.url });
        });

      });
    }
  }

  uploadPhoto (photo: {name: string, url: string}) {
    this.db.collection(`/${this.folder}`).add(photo);
  }
}
