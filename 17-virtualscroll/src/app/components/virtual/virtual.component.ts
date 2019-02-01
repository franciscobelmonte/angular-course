import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  people = Array(500).fill(0);

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  constructor() { }

  ngOnInit() {
  }

  gotoEnd () {
    this.viewport.scrollToIndex(this.people.length);
  }

  gotoStart () {
    this.viewport.scrollToIndex(0);
  }

  gotoMiddle () {
    this.viewport.scrollToIndex(this.people.length / 2);
  }

}
