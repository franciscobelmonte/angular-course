import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef} from '@angular/material';

import { Marker } from './../../model/marker.model';
import { EditMapComponent } from './edit-map.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers: Marker[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {
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

  editMarker(marker: Marker) {
    const dialogRef = this.dialog.open(EditMapComponent, {
      width: '250px',
      data: { title: marker.title, description: marker.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      marker.title = result.title;
      marker.description = result.description;
      this.saveToStorage();
      this.snackBar.open('Marker updated', 'Close', { duration: 3000 });
    });
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
