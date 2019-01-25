import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropPhotos]'
})
export class NgDropPhotosDirective {
  @Input() photos: FileItem[] = [];
  @Output() mouseEnter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver (event: any) {
    this.mouseEnter.emit(true);

    this.preventOpenPhoto(event);
  }

  @HostListener('dragleave', ['$event']) onDragLeave (event: any) {
    this.mouseEnter.emit(false);
  }

  @HostListener('drop', ['$event']) onDrop (event: any) {
    this.mouseEnter.emit(false);

    this.extractPhotos(event);
    this.preventOpenPhoto(event);
  }

  private extractPhotos (event: any) {
    const files = event.dataTransfer ? event.dataTransfer.files : event.originalEvent.dataTransfer.files;

    if (!files) {
      return;
    }

    for (const key in files) {
      if (files.hasOwnProperty(key) && this.canLoadPhoto(files[key])) {
        const file = files[key];
        this.photos.push(new FileItem(file));
      }
    }

    console.log(this.photos);
  }

  private canLoadPhoto (photo: File) {
    console.log(photo);
    if (!this.isPhotoDuplicated(photo.name) && this.isPhotoValidFormat(photo.type)) {
      return true;
    }
    return false;
  }

  private preventOpenPhoto (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private isPhotoDuplicated (filename: string): boolean {
    for (const photo of this.photos) {
      if (photo.filename === filename) {
        console.error('Duplicated photo');
        return true;
      }
    }
    return false;
  }

  private isPhotoValidFormat (filetype: string): boolean {
    return (filetype === '' || filetype === undefined) ? false : filetype.startsWith('image');
  }
}
