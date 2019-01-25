import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appNgDropPhotos]'
})
export class NgDropPhotosDirective {
  @Output() mouseEnter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver (event: any) {
    this.mouseEnter.emit(true);
  }

  @HostListener('dragleave', ['$event']) onDragLeave (event: any) {
    this.mouseEnter.emit(false);
  }

}
