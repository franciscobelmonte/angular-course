import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

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

  constructor(private snackBar: MatSnackBar) {
    this.loadFromStorage();
  }

  ngOnInit() {
  }

  addMarker (event) {
    const marker = new Marker(event.coords.lat, event.coords.lng);
    this.markers.push(marker);
    this.saveToStorage();

    this.snackBar.open('Marker added', 'Close', {duration: 3000});
  }

  deleteMarker (index) {
    this.markers.splice(index, 1);
    this.saveToStorage();

    this.snackBar.open('Marker deleted', 'Close', {duration: 3000});
  }

  saveToStorage () {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  loadFromStorage () {
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

}
