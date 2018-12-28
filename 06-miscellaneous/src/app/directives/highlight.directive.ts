import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color: string;

  constructor(private element: ElementRef) {
    console.log('Calling directive...');
  }

  @HostListener('mouseenter') mouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.color || 'yellow';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.element.nativeElement.style.backgroundColor = null;
  }

}
