import { Component, OnInit } from '@angular/core';
import { Marker } from './../../model/marker.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers: Marker[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor() {
    const marker = new Marker(this.lat, this.lng);
    this.markers.push(marker);
  }

  ngOnInit() {
  }

  addMarker (event) {
    const marker = new Marker(event.coords.lat, event.coords.lng);
    this.markers.push(marker);
  }

}
